import styles from './TituloCategoria.module.css'

function TituloCategoria(props) {
    return  (
        <h1 
            style={{ backgroundColor: `${props.cor?? '#6BD1FF'}`,
                fontSize: `${props.tamanho}`  
            }} 
                className={styles.titulo}>
                {props.texto}
        </h1>
    )
}

export default TituloCategoria



