import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import styles from "./Home.module.css";
import { Link } from "react-router-dom"
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";



function Home () {
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
            <div className={styles.principal}>
                <h1 className={styles.textoPrincipal}>Oi! 👋</h1>
                <h1 className={styles.textoPrincipal}>Eu sou o João!</h1>
                <h1>
                    <span className={styles.textoDinamico}>{text}</span>
                    <span className={styles.cursor}>|</span>
                </h1>
            </div>
            <figure>
                <img src="./developer.svg" alt="Imagem de desenvolvedor codando" />
            </figure>
            </section>
            <section className={styles.homeApresentacao}>
                <div className={styles.secundario}>
                    <div className={styles.apresentacao}>
                        <h1 className={styles.textoApresentacao}>DEIXE EU ME APRESENTAR</h1>
                        <h3>Domino linguagens mais atuais como <strong>JavaScript e C#</strong></h3>
                        <h3>Minha área de maior interesse é o <strong>desenvolvimento fullstack web</strong></h3>
                        <h3>Utilizo minha paixão por desenvolvimento com <strong>Node.js e bibliotecas e frameworks de JavaScript moderno</strong> como <strong>React.js e Nest.js</strong></h3>
                    </div>
                    <figure>
                        <img src="./developerInspection.svg" alt="Imagem de desenvolvedor em pé analisando o código"/>
                    </figure>
                </div>
                <div className={styles.conexao}>
                    <h1 className={styles.textoConexao}>ME ENCONTRE NO</h1>
                    <h3 className={styles.textoConexaoInferior}>Fique a vontade para <strong>se conectar</strong> comigo!</h3>
                    <div className={styles.icones}>
                        <a href="https://www.linkedin.com/in/joaovictormar" className={styles.linkIcone}>
                            <FaLinkedinIn className={styles.icone}/>
                        </a>
                        <a href="https://github.com/joaovictormar" className={styles.linkIcone}>
                            <FaGithub className={styles.icone}/>
                        </a>
                        <a href="mailto:joaomarquesvictor22@hotmail.com" className={styles.linkIcone}>
                            <IoIosMail className={styles.icone}/>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )

};

export default Home;