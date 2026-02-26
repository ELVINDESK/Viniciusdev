import React from "react";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function AboutMe() {
    return (
        <section className="bg-gray-900 py-12 px-6 md:px-12">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">

                {/* Área de texto */}
                <div className=" hover:-translate-y-2 hover:shadow-2xl hovershadow-blue-900 transition duration-300 bg-black pe-5 ps-5 py-15 rounded-2xl">
                    <h2 className="text-center text-2xl font-bold text-white mb-4">Sobre mim</h2>
                    <p className="text-justify text-white leading-relaxed mb-4">
                        Sou desenvolvedor web apaixonado por criar interfaces modernas e
                        responsivas. Trabalho principalmente com <span className="font-semibold">React</span> e
                        estilização utilizando <span className="font-semibold">TailwindCSS</span>, buscando sempre
                        entregar experiências rápidas, acessíveis e visualmente atraentes.
                    </p>
                </div>

                {/* Área para fotos */}
                <div className="flex justify-center gap-6 text-4xl text-blue-600">
                    <FaReact title="React" className="hover:text-blue-400 transition" />
                    <SiTailwindcss title="TailwindCSS" className="hover:text-teal-400 transition" />
                    <FaCss3Alt title="CSS3" className="hover:text-blue-500 transition" />
                    <FaHtml5 title="HTML5" className="hover:text-orange-500 transition" />
                </div>
            </div>
        </section>
    );
}
