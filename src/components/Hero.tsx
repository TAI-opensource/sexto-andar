"use client";

import { useState } from "react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"alugar" | "comprar">("alugar");
  const [activeSection, setActiveSection] = useState<"buscar" | "anunciar">("buscar");

  return (
    <section className="bg-white">
      {/* Hero Image */}
      <div className="w-full h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=800&fit=crop"
          alt="Família em casa"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mt-8 mb-8">
        <button
          onClick={() => setActiveSection("buscar")}
          className={`px-8 py-3 rounded-full font-medium transition-all ${
            activeSection === "buscar"
              ? "border-2 border-foreground text-foreground"
              : "border-2 border-gray-300 text-gray-600 hover:border-gray-400"
          }`}
        >
          Buscar Imóveis
        </button>
        <button
          onClick={() => setActiveSection("anunciar")}
          className={`px-8 py-3 rounded-full font-medium transition-all ${
            activeSection === "anunciar"
              ? "border-2 border-foreground text-foreground"
              : "border-2 border-gray-300 text-gray-600 hover:border-gray-400"
          }`}
        >
          Anunciar Imóveis
        </button>
      </div>

      {/* Search Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="border border-gray-200 p-6 md:p-8">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Alugue um lar
            <br />
            para chamar de seu
          </h2>

          {/* Tabs */}
          <div className="flex gap-6 mb-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("alugar")}
              className={`pb-3 font-medium transition-all relative ${
                activeTab === "alugar"
                  ? "text-primary"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Alugar
              {activeTab === "alugar" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("comprar")}
              className={`pb-3 font-medium transition-all relative ${
                activeTab === "comprar"
                  ? "text-primary"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Comprar
              {activeTab === "comprar" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          </div>

          {/* Search Fields */}
          <div className="space-y-4">
            {/* Cidade */}
            <div className="flex items-center gap-3 border border-gray-300 p-4">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <div className="text-sm font-medium text-foreground">Cidade</div>
                <div className="text-sm text-gray-500">Busque por cidade</div>
              </div>
            </div>

            {/* Bairro */}
            <div className="flex items-center gap-3 border border-gray-300 p-4">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <div>
                <div className="text-sm font-medium text-foreground">Bairro</div>
                <div className="text-sm text-gray-500">Busque por bairro</div>
              </div>
            </div>

            {/* Valor e Quartos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-between border border-gray-300 p-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="text-sm font-medium text-foreground">Valor total até</div>
                    <div className="text-sm text-gray-500">Escolha o valor</div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div className="flex items-center justify-between border border-gray-300 p-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <div>
                    <div className="text-sm font-medium text-foreground">Quartos</div>
                    <div className="text-sm text-gray-500">Nº de quartos</div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-6">
            <button className="w-full bg-primary text-white py-4 px-8 font-semibold text-lg hover:bg-primary-dark transition-colors">
              Buscar imóveis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
