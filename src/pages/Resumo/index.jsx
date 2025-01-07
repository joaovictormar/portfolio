import styles from "./Resumo.module.css"
import curriculo from "../../assets/curriculo.png"
import curriculoPDF from "../../assets/curriculo.pdf"


function Resumo () {

    return (
            <section className={styles.resumo}>
                <a className={styles.botao} href={curriculoPDF} donwload>Download Currículo</a>
                <img className={styles.curriculo} src={curriculo}/> 
                <a className={styles.botao} href={curriculoPDF} donwload>Download Currículo</a>
            </section>
    )

};

export default Resumo;