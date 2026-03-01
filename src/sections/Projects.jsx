import { motion } from "framer-motion";
export default function Projects() {
    return (
        <section id="projects" className=" min-h-screen grid place-items-center py-32 bg-zinc-950 text-white px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="rounded-2xl p-10 shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Projetos
                    </h2>

                    <div className="max-w-6x grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">

                        <div className="hover:border-yellow-500 hh-110 border-1 py-10 text-center bg-zinc-900 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10 transition duration-300">
                            <h3 className="text-xl font-semibold">
                                Site Restaurante <span className="text-yellow-400 block">Villa D'Oro</span>
                                <hr className="text-yellow-500" />
                            </h3>
                            <p className="text-white-400 mt-4 p-2">
                                "Site de restaurante feito totalmente funcional
                                Feito para atrais clientes fazer chamados online
                                e conhcer o lugar, assim tendo mais confiaça 
                                no lugar e trazendo clientes com seu charme de restaurante moderno
                                e chamativo com sua modernidade."<br />
                                <div className="mt-10">
                                    <a href="#" className="hover:bg-yellow-500 border-yellow-500 border-1 rounded-2xl p-1">Clique aqui</a>
                                </div>
                            </p>
                        </div>

                        <div className="hover:border-blue-500 hh-110 border-1 py-10 text-center  bg-zinc-900 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition duration-300">
                            <h3 className="text-xl font-semibold">
                                Site Barbearia <span className="text-blue-500 block">Tapuió Barbearia</span>
                                <hr className="text-blue-500" />
                            </h3>
                            <p className="text-white-400 mt-6">
                                Site de barbearia, a famoça landinge page
                                mostrando detalhadamnete a sua barbearia
                                e trazendo um charme mais moderno e robusto
                                com cores que faz a cara da barbearia, tendo link direto para agendamentos online
                                para seus clientes novos na sua barbearia.<br/>
                                <div className="mt-10">
                                    <a href="#" className="hover:bg-blue-500 border-blue-500 border-1 rounded-2xl p-1">Clique aqui</a>
                                </div>
                            </p>
                        </div>

                        <div className="hover:border-red-900 hh-110 border-1 py-10 text-center bg-zinc-900 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10 transition duration-300">
                            <h3 className="text-xl font-bold">
                                Sistema de <span className="text-red-500 block">agendamentos</span>
                                <hr className="text-red-900" />
                            </h3>
                            <p className="white-400 mt-5">
                                Sistema de agendamento online para empresas
                                que buscam algo mais pratico e simples para seus clientes
                                com este sistema seu cliente podera fazer um agendamento
                                ou uma visita pressencial na sua empresa, assim melhorando o atendimento do lugar.<br />
                                <div className="mt-10">
                                    <a href="#" className="text-center hover:bg-red-500 border-red-900 border-1 rounded-2xl p-1">Clique aqui</a>
                                </div>
                            </p>
                        </div>


                    </div>
                </motion.div>
            </div>
        </section>

    )
}