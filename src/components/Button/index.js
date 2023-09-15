import styles from './ButtonFlix.module.css'

function ButtonFlix(props) {
    return  (
        <button 
            style={{
                    backgroundColor: `${props.cor?? '#2A7AE4'}`,
                    fontSize:  `${props.tamanho}`
                }} 
                className={styles.botao}>
            {props.texto}
        </button>
    )
}

export default ButtonFlix



