import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface UserProperty {
  id: string;
  created_at: string;
  titulo: string;
  descricao: string;
  preco: string;
  categoria: string;
  estado: string;
  cidade: string;
  bairro: string;
  quartos: number;
  banheiros: number;
  vagas: number;
  area: number;
  area_terreno: number;
  fotos: string[];
  referencia: string;
  status: "ativo" | "vendido" | "pausado";
  endereco: string;
}
