import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import styles from "./Container.module.css";

function Container() {
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
    <section className={styles.container}>
      <div className={styles.apresentacao}>
        <h1 className={styles.texto}>Olá, eu sou o João!</h1>
        <h1>
          <span className={styles.textoDinamico}>{text}</span>
          <span className={styles.cursor}>|</span>
        </h1>
        <button className={styles.botao}>Saiba mais sobre mim!</button>
      </div>
      <figure>
        <img src="./developer.svg" alt="Imagem de desenvolvedor" />
      </figure>
    </section>
  );
}

export default Container;
