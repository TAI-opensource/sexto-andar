"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FaleConoscoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <div className="bg-[#f0f0f2] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Fale Conosco</h1>
            <p className="text-xl text-gray-600">
              Estamos prontos para ajudá-lo. Entre em contato diretamente com nossos especialistas.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Specialists */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nossos Especialistas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Evair */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Evair F de Oliveira</h3>
                    <p className="text-sm text-gray-500">Consultor de Imóveis</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <a href="tel:21965373111" className="flex items-center gap-2 hover:text-[#34af6e] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (21) 96537-3111
                  </a>
                  <a href="mailto:sienapatrimonial@gmail.com" className="flex items-center gap-2 hover:text-[#34af6e] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    sienapatrimonial@gmail.com
                  </a>
                </div>
                <a
                  href="https://wa.me/5521965373111?text=Ol%C3%A1%20Evair%20F%20de%20Oliveira%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20im%C3%B3veis."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-[#1b4332] text-white py-3 rounded-lg font-semibold hover:bg-[#143526] transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Falar no WhatsApp
                </a>
              </div>

              {/* Edinaldo */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Edinaldo Ramos</h3>
                    <p className="text-sm text-gray-500">Comercial</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <a href="tel:21959322120" className="flex items-center gap-2 hover:text-[#34af6e] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (21) 95932-2120
                  </a>
                  <a href="mailto:sienapatrimonial@gmail.com" className="flex items-center gap-2 hover:text-[#34af6e] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    sienapatrimonial@gmail.com
                  </a>
                </div>
                <a
                  href="https://wa.me/5521959322120?text=Ol%C3%A1%20Edinaldo%20Ramos%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20im%C3%B3veis."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-[#1b4332] text-white py-3 rounded-lg font-semibold hover:bg-[#143526] transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* Contact Info */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Outros Canais
            </h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                  <a href="tel:21965373111" className="text-sm text-gray-600 hover:text-[#34af6e]">(21) 96537-3111</a>
                  <br />
                  <a href="tel:21959322120" className="text-sm text-gray-600 hover:text-[#34af6e]">(21) 95932-2120</a>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">E-mail</h3>
                  <a href="mailto:sienapatrimonial@gmail.com" className="text-sm text-gray-600 hover:text-[#34af6e]">sienapatrimonial@gmail.com</a>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Instagram</h3>
                  <a href="https://www.instagram.com/sienagestaoimobiliaria/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#34af6e]">@sienagestaoimobiliaria</a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-[#1b4332] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              Dúvidas frequentes
            </h2>
            <div className="space-y-3">
              <details className="bg-white/10 border border-white/20 rounded-lg overflow-hidden">
                <summary className="p-4 cursor-pointer font-semibold text-white hover:bg-white/5 transition-colors">
                  Como comprar um imóvel?
                </summary>
                <div className="px-4 pb-4 text-white/80">
                  Encontre o imóvel desejado, clique em &quot;Tenho interesse&quot; e entre em contato com nossos especialistas. Eles irão acompanhar todo o processo de compra com segurança e transparência.
                </div>
              </details>

              <details className="bg-white/10 border border-white/20 rounded-lg overflow-hidden">
                <summary className="p-4 cursor-pointer font-semibold text-white hover:bg-white/5 transition-colors">
                  Quais documentos são necessários?
                </summary>
                <div className="px-4 pb-4 text-white/80">
                  RG ou CNH, CPF, comprovante de renda e endereço. Para financiamento, será necessário extrato bancário e declaração de imposto de renda.
                </div>
              </details>

              <details className="bg-white/10 border border-white/20 rounded-lg overflow-hidden">
                <summary className="p-4 cursor-pointer font-semibold text-white hover:bg-white/5 transition-colors">
                  Posso financiar o imóvel?
                </summary>
                <div className="px-4 pb-4 text-white/80">
                  Sim! Trabalhamos com os principais bancos para oferecer as melhores taxas de financiamento. Consulte nossos especialistas.
                </div>
              </details>

              <details className="bg-white/10 border border-white/20 rounded-lg overflow-hidden">
                <summary className="p-4 cursor-pointer font-semibold text-white hover:bg-white/5 transition-colors">
                  Como funciona o processo de compra?
                </summary>
                <div className="px-4 pb-4 text-white/80">
                  O processo de compra envolve: pesquisa do imóvel, visita, negociação, análise de documentação, assinatura do contrato e escritura. Nosso time acompanha cada etapa para garantir sua segurança.
                </div>
              </details>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
