export default function PopularSearches() {
  const searches = [
    {
      text: "Apartamentos no Rio de Janeiro",
      href: "/comprar?estado=RJ&categoria=1",
    },
    {
      text: "Casas no Rio de Janeiro",
      href: "/comprar?estado=RJ&categoria=6",
    },
    {
      text: "Terrenos no Rio de Janeiro",
      href: "/comprar?estado=RJ&categoria=32",
    },
    {
      text: "Galpões no Rio de Janeiro",
      href: "/comprar?estado=RJ&categoria=16",
    },
    {
      text: "Apartamentos em São Paulo",
      href: "/comprar?estado=SP&categoria=1",
    },
    {
      text: "Casas em São Paulo",
      href: "/comprar?estado=SP&categoria=6",
    },
    {
      text: "Apartamentos no Paraná",
      href: "/comprar?estado=PR&categoria=1",
    },
    {
      text: "Casas em Santa Catarina",
      href: "/comprar?estado=SC&categoria=6",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-[12px] border-[#d4dbd2] bg-white p-8 lg:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Buscas mais populares
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
            {searches.map((search, index) => (
              <a
                key={index}
                href={search.href}
                className="text-gray-700 hover:text-[#1b4332] transition-colors"
              >
                {search.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
