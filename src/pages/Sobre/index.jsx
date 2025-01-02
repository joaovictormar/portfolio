import styles from "./Sobre.module.css"

import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiSqlite } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { AiOutlineLinux } from "react-icons/ai";

import GitHub from "../../components/Outros/GitHub";

function Sobre () {

    return (
        <>
            <section className={styles.sobre}>
                <div className={styles.textoSobreMim}>
                    <div className={styles.textoSuperior}>
                        <h1 className={styles.textoPrincipal}>SAIBA QUEM SOU</h1>
                        <h3 className={styles.textoSecundario}>Olá, me chamo <strong>João Victor Marques</strong> e sou do <strong>Rio de Janeiro, Brasil</strong>!</h3>
                        <h3 className={styles.textoSecundario}>Trabalho com <strong>suporte de TI na NASIT.</strong></h3>
                        <h3 className={styles.textoSecundario}> Curso <strong>Análise e desenvolvimento de sistemas</strong> na Universidade Veiga de Almeida (UVA).</h3>
                        <h3 className={styles.textoSecundario}>Faço cursos complementares voltados para desenvolvimento web na <strong>Alura!</strong></h3>   
                    </div>
                    <div className={styles.textoInferior}>
                        <h2 className={styles.textoPrincipal}>ALÉM DE CODAR, GOSTO DE...</h2>
                        <ul className={styles.lista}>
                            <li>
                                <h3 className={styles.textoSecundario}>Esportes</h3>
                            </li>
                        
                            <li>
                                <h3 className={styles.textoSecundario}>Viajar</h3>
                            </li>
                            <li>
                                <h3 className={styles.textoSecundario}>Jogar videogames</h3>
                            </li>
                        </ul>               
                    </div>
                </div>
                <figure>
                    <img src="./programming.svg" alt="Imagem de desenvolvedor escrevendo código"/>
                </figure>
            </section>
            <section className={styles.skills}>
                <h1 className={styles.textoPrincipal}>HABILIDADES PROFISSIONAIS</h1>
                <div className={styles.icones}>
                    <div className={styles.iconeContainer}>
                        <FaReact className={styles.icone} />
                        <span className={styles.iconeDescricao}>React</span>
                    </div>
                    <div className={styles.iconeContainer}>
                        <SiDotnet className={styles.icone} />
                        <span className={styles.iconeDescricao}>.NET</span>
                    </div>
                    <div className={styles.iconeContainer}>
                        <IoLogoJavascript className={styles.icone} />
                        <span className={styles.iconeDescricao}>JavaScript</span>
                    </div>
                    <div className={styles.iconeContainer}>
                        <FaNode className={styles.icone} />
                        <span className={styles.iconeDescricao}>Node.js</span>
                    </div>
                    <div className={styles.iconeContainer}>
                        <TbBrandCSharp className={styles.icone} />
                        <span className={styles.iconeDescricao}>C#</span>
                    </div>
                    <div className={styles.iconeContainer}>
                        <SiSqlite className={styles.icone} />
                        <span className={styles.iconeDescricao}>SQLite</span>
                    </div>
                    <div className={styles.iconeContainer}>
                        <FaHtml5 className={styles.icone} />
                        <span className={styles.iconeDescricao}>HTML5</span>
                    </div>
                    <div className={styles.iconeContainer}>
                        <SiNestjs className={styles.icone} />
                        <span className={styles.iconeDescricao}>NestJS</span>
                    </div>
                    <div className={styles.iconeContainer}>
                        <SiMongodb className={styles.icone} />
                        <span className={styles.iconeDescricao}>MongoDB</span>
                    </div>        
                    <div className={styles.iconeContainer}>
                        <FaCss3Alt className={styles.icone} />
                        <span className={styles.iconeDescricao}>CSS3</span>
                    </div>                   
                </div>
                <h1 className={styles.textoPrincipal}>FERRAMENTAS QUE EU UTILIZO</h1>
                <div className={styles.icones}>
                    <div className={styles.iconeContainer}>
                        <FaGitAlt className={styles.icone} />
                        <span className={styles.iconeDescricao}>Git</span>
                    </div>
                    <div className={styles.iconeContainer}>
                        <VscVscode className={styles.icone} />
                        <span className={styles.iconeDescricao}>VS Code</span>
                    </div>
                    <div className={styles.iconeContainer}>
                        <SiPostman className={styles.icone} />
                        <span className={styles.iconeDescricao}>Postman</span>
                    </div>
                    <div className={styles.iconeContainer}>
                        <AiOutlineLinux className={styles.icone} />
                        <span className={styles.iconeDescricao}>Linux</span>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Sobre;