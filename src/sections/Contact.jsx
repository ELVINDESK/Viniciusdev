import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default  function Contato() {
  return (
    <section className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      
      <motion.div
        className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Entre em Contato
        </h2>
        
        {/* Ícones sociais */}
        <div className="flex justify-center gap-6 mt-8 text-2xl">
          <FaEnvelope className="hover:text-cyan-400 transition cursor-pointer" />
          <FaWhatsapp className="hover:text-green-400 transition cursor-pointer" />
          <FaLinkedin className="hover:text-blue-400 transition cursor-pointer" />
        </div>

      </motion.div>
    </section>
  );
}