import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from "../../components/Container";
import { Link } from "react-router-dom"
import styles from "./Page404.module.css"

function Page404 () {

    return (
        <>
        <Header/>
        <Container>
            <div className={styles.textoGeral}>
                <h1 className={styles.textoPrincipal}>404 :(</h1>
                <strong className={styles.textoSecundario}>Página não encontrada!</strong>
            </div>
            <Link className={styles.botaoRetornar} to="/">Retornar ao menu!</Link>
        </Container>
        <Footer/>
        </>
    )

}

export default Page404;