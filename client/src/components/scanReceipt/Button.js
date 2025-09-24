import styles from './button.module.css'

export default function Button({type, children}) {
    return(
        <button className={type === 'primary' ? styles.primary : styles.secondary}>
            {children}
        </button>
    )
}