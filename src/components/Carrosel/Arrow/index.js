import styles from './Arrow.module.css'

function Arrow(props) {
    return (
        <div className={styles.arrow} style={{...props.style, display: 'block', background: 'red'}} onClick={props.onClick} />           
    )
}

export default Arrow
