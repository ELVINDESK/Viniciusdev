export default function Navbar() {
  return (
    <header className="fixed top-0 w-full backdrop-blur bg-black/30 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-white">
        <h1 className="font-bold text-lg tracking-wider">
          Vinícius<span className="text-blue-900">Dev</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
          <a href="#about" className="relative group text-white">Sobre
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#projects" className="relative group text-white">Projetos
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="relative group text-white">Contatos
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
      </div>
    </header>
  )
}