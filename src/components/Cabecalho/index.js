import { Link, NavLink } from 'react-router-dom'
import Logo from '../Logo'
import styles from './Cabecalho.module.css'

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <Logo />
            </Link>
            <nav>
                <NavLink to="./novoVideo" className={styles.botaoCabecalho}>
                    Novo vídeo
                </NavLink>
            </nav>
        </header>
    )
}

export default Cabecalho

