import styles from './LinksRedesSociais.module.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function Links() {
    return  (
        <div className={styles.icons}>
            {/* Desenvolvido por Gideon 2023. */}
            <a href="https://github.com/gideonalves" target="_blank" rel="noreferrer">
                    <AiFillGithub className={styles.iconsSvg} /> 
            </a>

            <a href="https://www.linkedin.com/in/gideon-alves/" target="_blank" rel="noreferrer">
                    <AiFillLinkedin className={styles.iconsSvg} />
            </a>
        </div>
    )
}

export default Links
