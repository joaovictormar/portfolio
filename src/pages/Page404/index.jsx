import { Link } from "react-router-dom"
import styles from "./Page404.module.css"

function Page404 () {

    return (
        <>
            <div className={styles.textoGeral}>
                <h1 className={styles.textoPrincipal}>404 :(</h1>
                <strong className={styles.textoSecundario}>Página não encontrada!</strong>
            </div>
            <Link className={styles.botaoRetornar} to="/">Retornar ao menu!</Link>
        </>
    )

}

export default Page404;