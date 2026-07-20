const API_BASE = "https://reidoape.com.br/api";

export interface Property {
  id_master: number;
  foto: string;
  categoria: string;
  categoria_nome: string;
  transacao: string;
  valor_venda1: string;
  valorLocacao: string;
  quartos: string;
  banheiros: string;
  vagas: string;
  area_total: string;
  area_privativa: string;
  desconto_pct: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  referencia_plain: string;
  descricao: string;
  link: string;
}

export interface ApiResponse {
  meta: {
    total: number;
    pagina: number;
    limite: number;
    ordena: string;
  };
  items: Property[];
}

export interface SearchFilters {
  categoria?: string;
  estado?: string;
  cidade?: string;
  bairro?: string;
  ordena?: string;
  pagina?: number;
  limite?: number;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .trim();
}

export async function searchProperties(
  filters: SearchFilters = {}
): Promise<ApiResponse> {
  const params = new URLSearchParams();
  params.append("ordena", filters.ordena || "recentes");
  params.append("pagina", String(filters.pagina || 0));
  params.append("limite", String(filters.limite || 24));
  params.append("id_master", "90821645");

  if (filters.categoria) {
    params.append("categoria[]", filters.categoria);
  }
  if (filters.estado) {
    params.append("estado", filters.estado);
  }
  if (filters.cidade) {
    params.append("cidade[]", filters.cidade);
  }
  if (filters.bairro) {
    params.append("bairro[]", filters.bairro);
  }

  const response = await fetch(API_BASE, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }

  return response.json();
}

export function parsePrice(priceHtml: string): number {
  const cleaned = stripHtml(priceHtml);
  const match = cleaned.match(/R\$\s*([\d.,]+)/);
  if (match) {
    return Number(match[1].replace(".", "").replace(",", "."));
  }
  return 0;
}

export function parseArea(areaHtml: string): number {
  const cleaned = stripHtml(areaHtml);
  const match = cleaned.match(/([\d.,]+)/);
  if (match) {
    return Number(match[1].replace(".", "").replace(",", "."));
  }
  return 0;
}

export function parseBedrooms(bedroomsHtml: string): number {
  const cleaned = stripHtml(bedroomsHtml);
  const match = cleaned.match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

export function getDiscountPercentage(property: Property): number {
  const cleaned = stripHtml(property.desconto_pct || "");
  const match = cleaned.match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

export const categories = [
  { id: "1", name: "Apartamento" },
  { id: "6", name: "Casa" },
  { id: "32", name: "Terreno" },
  { id: "16", name: "Galpão" },
  { id: "144", name: "Andar Corporativo" },
  { id: "17", name: "Imóvel Comercial" },
  { id: "18", name: "Loja" },
  { id: "19", name: "Prédio" },
  { id: "20", name: "Sobrado" },
  { id: "21", name: "Casa duplex" },
  { id: "22", name: "Grupo de Salas Comerciais" },
];

export const states = [
  { id: "SP", name: "São Paulo" },
  { id: "RJ", name: "Rio de Janeiro" },
  { id: "PR", name: "Paraná" },
  { id: "SC", name: "Santa Catarina" },
];

export const sortOptions = [
  { id: "recentes", name: "Mais recentes" },
  { id: "menor_valor", name: "Menor valor" },
  { id: "maior_valor", name: "Maior valor" },
  { id: "maior_desconto", name: "Maior desconto" },
];
