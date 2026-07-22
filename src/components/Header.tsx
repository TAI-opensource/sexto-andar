export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#1b4332] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="min-w-0 flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-xs sm:text-lg md:text-xl font-bold text-white truncate">Siena Gestão & Imobiliária</span>
            </a>
          </div>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-6 flex-shrink-0">
            <a href="/" className="text-white/80 hover:text-white font-medium transition-colors text-sm">
              Início
            </a>
            <a href="/comprar" className="text-white/80 hover:text-white font-medium transition-colors text-sm">
              Comprar
            </a>
            <a href="/fale-conosco" className="text-white/80 hover:text-white font-medium transition-colors text-sm">
              Fale Conosco
            </a>
          </nav>

          {/* Mobile Menu - Hamburger */}
          <div className="md:hidden flex items-center">
            <a href="/comprar" className="text-white/80 hover:text-white font-medium transition-colors text-xs mr-4 whitespace-nowrap">
              Comprar
            </a>
            <a href="/fale-conosco" className="bg-white text-[#1b4332] px-3 py-1.5 rounded-lg font-medium text-xs whitespace-nowrap hover:bg-white/90 transition-colors">
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
