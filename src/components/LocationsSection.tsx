"use client";

export default function LocationsSection() {
  const locations = [
    {
      state: "Rio de Janeiro",
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
      state: "São Paulo",
      cities: [
        { name: "São Paulo", slug: "sao-paulo" },
        { name: "Guarulhos", slug: "guarulhos" },
        { name: "Campinas", slug: "campinas" },
        { name: "São Bernardo do Campo", slug: "sao-bernardo-do-campo" },
      ],
    },
    {
      state: "Paraná",
      cities: [
        { name: "Curitiba", slug: "curitiba" },
        { name: "Londrina", slug: "londrina" },
        { name: "Maringá", slug: "maringa" },
      ],
    },
    {
      state: "Santa Catarina",
      cities: [
        { name: "Florianópolis", slug: "florianopolis" },
        { name: "Joinville", slug: "joinville" },
        { name: "Blumenau", slug: "blumenau" },
      ],
    },
  ];

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Onde você quiser, tem uma Siena
        </h2>

        {/* States Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {location.state}
              </h3>
              <ul className="space-y-3">
                {location.cities.map((city, cityIndex) => (
                  <li key={cityIndex}>
                    <a
                      href={`/comprar/imovel/${city.slug}`}
                      className="text-gray-600 hover:text-[#1b4332] transition-colors"
                    >
                      Imóveis em {city.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
