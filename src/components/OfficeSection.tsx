"use client";

export default function OfficeSection() {
  const address = "R. Athaide Pimenta de Morais, 211 - SL. 402 - Centro, Nova Iguaçu - RJ, 26210-190";
  const mapsEmbedUrl =
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=R.+Athaide+Pimenta+de+Morais,+211+-+Centro,+Nova+Igua%C3%A7u+-+RJ,+26210-190&zoom=16&language=pt-BR";

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1b4332] mb-4">
            Onde estamos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visite nosso escritório ou entre em contato. Estamos prontos para
            ajudá-lo a encontrar o imóvel ideal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1b4332] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Escritório</h3>
                  <p className="text-sm text-gray-600">{address}</p>
                </div>
              </div>
            </div>

            <a
              href="/fale-conosco"
              className="block bg-[#1b4332] text-white text-center py-4 px-6 rounded-xl font-bold text-lg hover:bg-[#2d6a4f] transition-colors shadow-md"
            >
              Fale Conosco
            </a>
          </div>

          <div className="lg:col-span-2 rounded-xl overflow-hidden border border-gray-200 h-[400px]">
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Siena Gestão & Imobiliária"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
