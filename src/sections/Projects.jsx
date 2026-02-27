import { motion } from "framer-motion";
export default function Projects() {
    return (
        <section id="projects" className=" min-h-screen grid place-items-center py-32 bg-zinc-950 text-white px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Meus Projetos
                        <hr />
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="bg-zinc-900 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition duration-300">
                            <h3 className="text-xl font-semibold">
                                Clone Pinterest
                            </h3>
                            <p className="text-zinc-400 mt-3">
                                Aplicação inspirada no Pinterest usando React.
                            </p>
                        </div>

                        <div className="bg-zinc-900 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition duration-300">
                            <h3 className="text-xl font-semibold">
                                Clone Pinterest
                            </h3>
                            <p className="text-zinc-400 mt-3">
                                Aplicação inspirada no Pinterest usando React.
                            </p>
                        </div>


                    </div>
                </motion.div>
            </div>
        </section>

    )
}