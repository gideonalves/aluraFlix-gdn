import { Link, NavLink } from 'react-router-dom'
import Logo from '../Logo'
import styles from './Cabecalho.module.css'
// import Button from 'components/Button'

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <Logo />
            </Link>
            <nav>
                {/* <Button texto="Novo vídeo" /> */}
                <NavLink to="./novoVideo" className='botaoCabecalho'>
                    Novo vídeo
                </NavLink>

            </nav>
        </header>
    )
}

export default Cabecalho

