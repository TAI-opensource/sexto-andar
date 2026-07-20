export default function PopularSearches() {
  const searches = [
    {
      text: "Apartamentos no Rio de Janeiro",
      href: "/comprar/imovel/rio-de-janeiro?categoria=Apartamento",
    },
    {
      text: "Casas em São Gonçalo",
      href: "/comprar/imovel/sao-goncalo?categoria=Casa",
    },
    {
      text: "Apartamentos em Nova Iguaçu",
      href: "/comprar/imovel/nova-iguacu?categoria=Apartamento",
    },
    {
      text: "Casas no Rio de Janeiro",
      href: "/comprar/imovel/rio-de-janeiro?categoria=Casa",
    },
    {
      text: "Terrenos em Itaboraí",
      href: "/comprar/imovel/itaborai?categoria=Terreno",
    },
    {
      text: "Galpões em Resende",
      href: "/comprar/imovel/resende?categoria=Galp%C3%A3o",
    },
    {
      text: "Apartamentos em Belford Roxo",
      href: "/comprar/imovel/belford-roxo?categoria=Apartamento",
    },
    {
      text: "Casas em Magé",
      href: "/comprar/imovel/mage?categoria=Casa",
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
