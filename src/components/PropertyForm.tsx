"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase, type UserProperty } from "@/lib/supabase";

const categorias = [
  "Apartamento",
  "Casa",
  "Sobrado",
  "Terreno",
  "Galpão",
  "Andar Corporativo",
];

const estados = ["RJ", "SP", "PR", "SC"];

const cidadesPorEstado: Record<string, string[]> = {
  RJ: ["Rio de Janeiro", "São Gonçalo", "Nova Iguaçu", "Belford Roxo", "Itaboraí", "Campos dos Goytacazes", "Resende", "Magé"],
  SP: ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo"],
  PR: ["Curitiba", "Londrina", "Maringá"],
  SC: ["Florianópolis", "Joinville", "Blumenau"],
};

interface PropertyFormProps {
  initialData?: UserProperty;
  isEdit?: boolean;
}

export default function PropertyForm({ initialData, isEdit = false }: PropertyFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [titulo, setTitulo] = useState(initialData?.titulo || "");
  const [descricao, setDescricao] = useState(initialData?.descricao || "");
  const [preco, setPreco] = useState(initialData?.preco || "");
  const [categoria, setCategoria] = useState(initialData?.categoria || "");
  const [estado, setEstado] = useState(initialData?.estado || "");
  const [cidade, setCidade] = useState(initialData?.cidade || "");
  const [bairro, setBairro] = useState(initialData?.bairro || "");
  const [endereco, setEndereco] = useState(initialData?.endereco || "");
  const [quartos, setQuartos] = useState(initialData?.quartos || 0);
  const [banheiros, setBanheiros] = useState(initialData?.banheiros || 0);
  const [vagas, setVagas] = useState(initialData?.vagas || 0);
  const [area, setArea] = useState(initialData?.area || 0);
  const [areaTerreno, setAreaTerreno] = useState(initialData?.area_terreno || 0);
  const [referencia, setReferencia] = useState(initialData?.referencia || "");
  const [fotos, setFotos] = useState<string[]>(initialData?.fotos || []);
  const [novaFotoUrl, setNovaFotoUrl] = useState("");
  const [status, setStatus] = useState<"ativo" | "vendido" | "pausado">(initialData?.status || "ativo");

  const cidadesDisponiveis = cidadesPorEstado[estado] || [];

  function addFoto() {
    const url = novaFotoUrl.trim();
    if (!url) return;
    if (fotos.length >= 10) {
      setError("Máximo de 10 fotos");
      return;
    }
    setFotos([...fotos, url]);
    setNovaFotoUrl("");
  }

  function removeFoto(index: number) {
    setFotos(fotos.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!titulo.trim()) {
      setError("Título é obrigatório");
      return;
    }

    setSaving(true);

    const payload = {
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      preco: preco.trim(),
      categoria,
      estado,
      cidade,
      bairro: bairro.trim(),
      endereco: endereco.trim(),
      quartos,
      banheiros,
      vagas,
      area,
      area_terreno: areaTerreno,
      referencia: referencia.trim(),
      fotos,
      status,
    };

    if (isEdit && initialData) {
      const { error: updateError } = await supabase
        .from("user_properties")
        .update(payload)
        .eq("id", initialData.id);

      if (updateError) {
        setError("Erro ao salvar: " + updateError.message);
        setSaving(false);
        return;
      }
    } else {
      const { error: insertError } = await supabase
        .from("user_properties")
        .insert([payload]);

      if (insertError) {
        setError("Erro ao salvar: " + insertError.message);
        setSaving(false);
        return;
      }
    }

    router.push("/crm");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        {isEdit ? "Editar imóvel" : "Novo imóvel"}
      </h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      <div className="space-y-8">
        {/* Básico */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Informações básicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Título *</label>
              <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Ex: Apartamento 2 quartos no Centro"
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none"
              >
                <option value="">Selecione</option>
                {categorias.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preço</label>
              <input
                type="text"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                placeholder="Ex: R$ 250.000,00 ou Consulte"
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
              <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                rows={4}
                placeholder="Descreva o imóvel..."
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none resize-none"
              />
            </div>
          </div>
        </div>

        {/* Localização */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Localização</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
              <select
                value={estado}
                onChange={(e) => {
                  setEstado(e.target.value);
                  setCidade("");
                }}
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none"
              >
                <option value="">Selecione</option>
                {estados.map((e) => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
              <select
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                disabled={!estado}
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none disabled:opacity-50"
              >
                <option value="">{estado ? "Selecione" : "Primeiro selecione o estado"}</option>
                {cidadesDisponiveis.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
              <input
                type="text"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                placeholder="Ex: Centro"
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Endereço</label>
              <input
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                placeholder="Rua, número..."
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        {/* Características */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Características</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quartos</label>
              <input
                type="number"
                value={quartos}
                onChange={(e) => setQuartos(Number(e.target.value))}
                min={0}
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Banheiros</label>
              <input
                type="number"
                value={banheiros}
                onChange={(e) => setBanheiros(Number(e.target.value))}
                min={0}
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vagas</label>
              <input
                type="number"
                value={vagas}
                onChange={(e) => setVagas(Number(e.target.value))}
                min={0}
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Área (m²)</label>
              <input
                type="number"
                value={area || ""}
                onChange={(e) => setArea(Number(e.target.value))}
                min={0}
                placeholder="0"
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Área terreno (m²)</label>
              <input
                type="number"
                value={areaTerreno || ""}
                onChange={(e) => setAreaTerreno(Number(e.target.value))}
                min={0}
                placeholder="0"
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Referência</label>
            <input
              type="text"
              value={referencia}
              onChange={(e) => setReferencia(e.target.value)}
              placeholder="Código de referência do imóvel"
              className="w-full md:w-1/2 border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Fotos */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Fotos</h2>
          <p className="text-sm text-gray-500 mb-4">
            Cole URLs das fotos (máximo 10). A primeira foto será a capa.
          </p>
          <div className="flex gap-2 mb-4">
            <input
              type="url"
              value={novaFotoUrl}
              onChange={(e) => setNovaFotoUrl(e.target.value)}
              placeholder="https://exemplo.com/foto.jpg"
              className="flex-1 border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#1b4332] focus:border-transparent outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addFoto();
                }
              }}
            />
            <button
              type="button"
              onClick={addFoto}
              className="bg-gray-100 border border-gray-300 px-4 py-2.5 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              Adicionar
            </button>
          </div>

          {fotos.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {fotos.map((foto, index) => (
                <div key={index} className="relative group">
                  <img
                    src={foto}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg border border-gray-200"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=100&fit=crop";
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => removeFoto(index)}
                    className="absolute top-1 right-1 bg-red-600 text-white w-6 h-6 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    ×
                  </button>
                  {index === 0 && (
                    <span className="absolute bottom-1 left-1 bg-[#1b4332] text-white text-[10px] px-1.5 py-0.5 rounded">
                      Capa
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Status */}
        {isEdit && (
          <div className="bg-white p-6 border border-gray-200 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Status</h2>
            <div className="flex gap-3">
              {(["ativo", "pausado", "vendido"] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStatus(s)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                    status === s
                      ? s === "ativo"
                        ? "bg-green-600 text-white border-green-600"
                        : s === "vendido"
                        ? "bg-red-600 text-white border-red-600"
                        : "bg-yellow-500 text-white border-yellow-500"
                      : "border-gray-300 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {s === "ativo" ? "Ativo" : s === "vendido" ? "Vendido" : "Pausado"}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Submit */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={saving}
            className="bg-[#1b4332] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#143526] transition-colors disabled:opacity-50"
          >
            {saving ? "Salvando..." : isEdit ? "Salvar alterações" : "Cadastrar imóvel"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/crm")}
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
}
