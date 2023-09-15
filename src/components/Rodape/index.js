import Link  from '../LinksRedesSociais'
import Logo from '../Logo'
import styles from './Rodape.module.css'


function Rodape() {
    return  (
        <footer className={styles.rodape}>    
            <Logo />
                 Desenvolvido por Gideon 2023.
            <Link />                  
        </footer>
    )
}

export default Rodape

