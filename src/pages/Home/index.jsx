import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import styles from "./Home.module.css";

import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function Home() {
    const [text] = useTypewriter({
        words: ['Desenvolvedor de Software', 'Full Stack', 'Freelancer'],
        loop: true,
        typeSpeed: 150,
        deleteSpeed: 90,
        delaySpeed: 1500,
        cursor: true,
        cursorStyle: '|',
    });
    return (
        <>
            <section className={styles.home}>
                <motion.div

                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    className={styles.principal}>
                    <h1 className={styles.textoPrincipal}>Oi! 👋</h1>
                    <h1 className={styles.textoPrincipal}>Eu sou o <strong>João!</strong></h1>
                    <h1>
                        <span className={styles.textoDinamico}>{text}</span>
                        <span className={styles.cursor}>|</span>
                    </h1>
                </motion.div>
                <motion.figure

                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}>

                    <img src="./developer.svg" alt="Imagem de desenvolvedor escutando música e escrevendo código" />
                </motion.figure>
            </section>
            <section className={styles.homeApresentacao}>
                <div className={styles.secundario}>
                    <div className={styles.apresentacao}>
                        <motion.h1

                            variants={fadeIn("down", 0.2)}
                            initial="trembling"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}

                            className={styles.textoApresentacao}>DEIXE EU ME APRESENTAR
                        </motion.h1>
                        <motion.h3

                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}>
                            
                            Domino linguagens mais atuais como <strong>JavaScript e C#</strong>
                        </motion.h3>
                        <motion.h3

                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}>
                                
                            Minha área de maior interesse é o <strong>desenvolvimento fullstack web</strong>
                        </motion.h3>
                        <motion.h3

                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}>
                                
                            Utilizo minha paixão por desenvolvimento com <strong>Node.js e C#</strong>. Utilizando principalmente frameworks de JavaScript moderno como <strong>React.js e Nest.js</strong> e frameworks rápidos e robustos como <strong>.NET</strong>
                        </motion.h3>
                    </div>
                    <motion.figure

                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}>

                        <img src="./developerInspection.svg" alt="Imagem de desenvolvedor em pé analisando o código" />
                    </motion.figure>
                </div>
                <div className={styles.conexao}>
                    <h1 className={styles.textoConexao}>ME ENCONTRE NO</h1>
                    <h3 className={styles.textoConexaoInferior}>Fique a vontade para <strong>se conectar</strong> comigo!</h3>
                    <div className={styles.icones}>
                        <a href="https://www.linkedin.com/in/joaovictormar" className={styles.linkIcone}>
                            <FaLinkedinIn className={styles.icone} />
                        </a>
                        <a href="https://github.com/joaovictormar" className={styles.linkIcone}>
                            <FaGithub className={styles.icone} />
                        </a>
                        <a href="mailto:joaomarquesvictor22@hotmail.com" className={styles.linkIcone}>
                            <IoIosMail className={styles.icone} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )

};

export default Home;