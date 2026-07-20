"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const statesWithCities = [
  {
    id: "RJ",
    name: "Rio de Janeiro",
    cities: [
      { name: "Rio de Janeiro", slug: "rio-de-janeiro" },
      { name: "São Gonçalo", slug: "sao-goncalo" },
      { name: "Nova Iguaçu", slug: "nova-iguacu" },
      { name: "Belford Roxo", slug: "belford-roxo" },
      { name: "Itaboraí", slug: "itaborai" },
      { name: "Campos dos Goytacazes", slug: "campos-dos-goytacazes" },
      { name: "Resende", slug: "resende" },
      { name: "Magé", slug: "mage" },
    ],
  },
  {
    id: "SP",
    name: "São Paulo",
    cities: [
      { name: "São Paulo", slug: "sao-paulo" },
      { name: "Guarulhos", slug: "guarulhos" },
      { name: "Campinas", slug: "campinas" },
      { name: "São Bernardo do Campo", slug: "sao-bernardo-do-campo" },
    ],
  },
  {
    id: "PR",
    name: "Paraná",
    cities: [
      { name: "Curitiba", slug: "curitiba" },
      { name: "Londrina", slug: "londrina" },
      { name: "Maringá", slug: "maringa" },
    ],
  },
  {
    id: "SC",
    name: "Santa Catarina",
    cities: [
      { name: "Florianópolis", slug: "florianopolis" },
      { name: "Joinville", slug: "joinville" },
      { name: "Blumenau", slug: "blumenau" },
    ],
  },
];

const categories = [
  { id: "1", name: "Apartamento", icon: "🏢" },
  { id: "6", name: "Casa", icon: "🏠" },
  { id: "20", name: "Sobrado", icon: "🏡" },
  { id: "32", name: "Terreno", icon: "🌳" },
  { id: "16", name: "Galpão", icon: "🏭" },
  { id: "144", name: "Andar Corporativo", icon: "🏬" },
];

export default function ComprarPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#f8f9fa] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprar imóvel
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encontre o imóvel ideal para você. Escolha a cidade e comece sua busca.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Buscar por tipo de imóvel
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/comprar/imovel/rio-de-janeiro?categoria=${cat.id}`}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-[#1b4332] transition-all"
                >
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <div className="font-medium text-gray-900">{cat.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* States & Cities */}
        <section className="py-12 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Imóveis por cidade
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statesWithCities.map((state) => (
                <div key={state.id}>
                  <h3 className="text-lg font-semibold text-[#1b4332] mb-4">
                    {state.name}
                  </h3>
                  <ul className="space-y-2">
                    {state.cities.map((city) => (
                      <li key={city.slug}>
                        <Link
                          href={`/comprar/imovel/${city.slug}`}
                          className="text-gray-700 hover:text-[#1b4332] hover:underline transition-colors"
                        >
                          Imóveis em {city.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
