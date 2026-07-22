"use client";

export default function LocationsSection() {
  const locations = [
    {
      state: "Rio de Janeiro",
      stateId: "RJ",
      cities: [
        { name: "Rio de Janeiro" },
        { name: "São Gonçalo" },
        { name: "Nova Iguaçu" },
        { name: "Belford Roxo" },
        { name: "Itaboraí" },
        { name: "Campos dos Goytacazes" },
        { name: "Resende" },
        { name: "Magé" },
      ],
    },
    {
      state: "São Paulo",
      stateId: "SP",
      cities: [
        { name: "São Paulo" },
        { name: "Guarulhos" },
        { name: "Campinas" },
        { name: "São Bernardo do Campo" },
      ],
    },
    {
      state: "Paraná",
      stateId: "PR",
      cities: [
        { name: "Curitiba" },
        { name: "Londrina" },
        { name: "Maringá" },
      ],
    },
    {
      state: "Santa Catarina",
      stateId: "SC",
      cities: [
        { name: "Florianópolis" },
        { name: "Joinville" },
        { name: "Blumenau" },
      ],
    },
  ];

  return (
    <section className="py-10 lg:py-16 bg-[#1b4332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Onde você quiser, tem uma Siena
        </h2>

        {/* States Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-white mb-6">
                {location.state}
              </h3>
              <ul className="space-y-3">
                {location.cities.map((city, cityIndex) => (
                  <li key={cityIndex}>
                    <a
                      href={`/comprar?estado=${location.stateId}`}
                      className="text-green-100 hover:text-white transition-colors"
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
