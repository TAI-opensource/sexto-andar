const memCache = new Map<string, { data: unknown; expiry: number }>();
const LS_PREFIX = "siena_cache_";
const DEFAULT_TTL = 60 * 60 * 1000; // 1 hour

function isClient(): boolean {
  return typeof window !== "undefined";
}

export function getCached<T>(key: string): T | null {
  if (isClient()) {
    try {
      const raw = localStorage.getItem(LS_PREFIX + key);
      if (raw) {
        const item = JSON.parse(raw);
        if (Date.now() < item.expiry) {
          memCache.set(key, item);
          return item.data as T;
        }
        localStorage.removeItem(LS_PREFIX + key);
      }
    } catch {}
  }

  const item = memCache.get(key);
  if (!item) return null;
  if (Date.now() > item.expiry) {
    memCache.delete(key);
    return null;
  }
  return item.data as T;
}

export function setCache(key: string, data: unknown, ttl: number = DEFAULT_TTL): void {
  const item = { data, expiry: Date.now() + ttl };
  memCache.set(key, item);

  if (isClient()) {
    try {
      const serialized = JSON.stringify(item);
      if (serialized.length < 2 * 1024 * 1024) { // max 2MB per entry
        localStorage.setItem(LS_PREFIX + key, serialized);
      }
    } catch {
      // localStorage full or quota exceeded
    }
  }
}

export function clearCache(): void {
  memCache.clear();
  if (isClient()) {
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const k = localStorage.key(i);
      if (k?.startsWith(LS_PREFIX)) localStorage.removeItem(k);
    }
  }
}
