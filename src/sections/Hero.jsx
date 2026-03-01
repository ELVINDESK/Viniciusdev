import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col bg-blue-900 justify-center items-center text-center">

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold"
      >
        <h1 className="text-white text-4xl">Olá, Bem-vindo(a)</h1><span className="block text-blue-500 text-4xl">Eu sou Vinícius</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-gray-400"
      >
        <p className="text-1xl">Desenvolvedor Web - <strong>Tranformando sua imaginação em - Realidade</strong></p>
      </motion.p>

    </section>
  )
}