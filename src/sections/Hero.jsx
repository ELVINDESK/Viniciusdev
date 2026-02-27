export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-zinc-900 text-white px-6">
      
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Vinicius <span className="text-blue-900">Dev</span>
        <span className="block text-blue-900">
          Desenvolvedor
        </span>
      </h1>

      <p className="mt-6 text-zinc-400 max-w-xl">
        Criando interfaces de sistemas e sites modernas, rápidas e responsivas
      </p>

      <a 
        href="#projects"
        className="mt-8 px-8 py-3 bg-blue-600 rounded-full hover:scale-105 transition duration-300"
      >
        Ver Projetos
      </a>

    </section>
  )
}