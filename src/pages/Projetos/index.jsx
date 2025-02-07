import styles from "./Projetos.module.css"
import { FaGithub } from "react-icons/fa";
import nastock from "../../assets/NAStock.png"

function Projetos () {

    return (
            <section className={styles.projetos}>
                <div className={styles.cardProjeto}>
                    <div className={styles.titulos}>
                        <h1 className={styles.titulo}>NAStock</h1>
                        <h2 className={styles.areaDev}>FullStack</h2>
                    </div>
                    <img className={styles.imagem} src={nastock}/>
                    <h3>Projeto desenvolvido com a intenção de controlar o estoque interno de equipamentos e patrimônios da empresa, disponibilizando sobre eles informações do hardware, local onde se encontram e diversas observações. Tudo isso disponibilizado em um ambiente web, onde o usuário deve realizar a autenticação antes de utilizar o sistema e se o mesmo for um usuário permitido, manipular os equipamentos. O projeto foi criado com as tecnologias mais modernas de desenvolvimento como <strong>React, NodeJS, Express</strong> armazenando seus dados em um banco <strong>SQLite</strong>.</h3>
                    <div className={styles.botoes}> 
                        <a className={styles.botao}>Saiba mais</a>
                        <a className={styles.botao} href="https://github.com/joaovictormar/NAStock_front"><FaGithub/></a>
                    </div>
                </div>
            </section>
    )

};

export default Projetos;