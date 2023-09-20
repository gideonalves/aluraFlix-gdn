import styles from './Button.module.css'

function Button({ children, bgcolor, onClick }) {
    return  (
        <div>
        <button
          onClick={onClick}
          className={`${styles.button} ${styles[bgcolor]}`}
        >
          {children}
        </button>
      </div>
    )
}

export default Button



