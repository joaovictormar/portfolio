import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from "../../components/Container";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import styles from "./Home.module.css";
import { Link } from "react-router-dom"

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
            <Header/>
            <Container>
            <section className={styles.home}>
            <div className={styles.apresentacao}>
                <h1 className={styles.texto}>Olá, eu sou o João!</h1>
                <h1>
                    <span className={styles.textoDinamico}>{text}</span>
                    <span className={styles.cursor}>|</span>
                </h1>
                <Link to="/sobre" className={styles.botao}>Saiba mais sobre mim!</Link>
            </div>
            <figure>
                <img src="./developer.svg" alt="Imagem de desenvolvedor" />
            </figure>
            </section>
            </Container>
            <Footer/>
        </>
    )

};

export default Home;