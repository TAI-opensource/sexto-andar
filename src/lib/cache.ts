const cache = new Map<string, { data: unknown; expiry: number }>();

const DEFAULT_TTL = 60 * 60 * 1000; // 1 hour

export function getCached<T>(key: string): T | null {
  const item = cache.get(key);
  if (!item) return null;
  if (Date.now() > item.expiry) {
    cache.delete(key);
    return null;
  }
  return item.data as T;
}

export function setCache(key: string, data: unknown, ttl: number = DEFAULT_TTL): void {
  cache.set(key, { data, expiry: Date.now() + ttl });
}

export function clearCache(): void {
  cache.clear();
}
