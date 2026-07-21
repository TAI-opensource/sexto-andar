"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CrmLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <Link href="/" className="text-xl font-bold text-[#1b4332]">
                Siena CRM
              </Link>
              <nav className="flex items-center gap-4">
                <Link
                  href="/crm"
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                    pathname === "/crm"
                      ? "bg-[#1b4332] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Meus Imóveis
                </Link>
                <Link
                  href="/crm/novo"
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                    pathname === "/crm/novo"
                      ? "bg-[#1b4332] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  + Novo Imóvel
                </Link>
              </nav>
            </div>
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
              ← Voltar ao site
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
