import { Link } from "react-router-dom";
import styles from "./Header.module.css"

function Header () {

    return (
        <header className={styles.header}>
            <Link className={styles.linkDev} to="/">
                <span>joaoMarques.dev</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/resumo">Resumo</Link>
            </nav>
        </header>
    )
};

export default Header;