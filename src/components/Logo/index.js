import styles from './Logo.module.css'
import aluraflix from '../Logo/aluraflix.svg' 


function Logo() {
    return (
        <img 
            className={styles.logo}
            src={aluraflix} 
            alt='Logo Aluraflix'
        />
    )
}

export default Logo