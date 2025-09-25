import styles from './receiptClientPhoto.module.css'

export default function ReceiptClientPhoto({letter}){
    return <p className={styles.receiptClientPhoto}>{letter}</p>
}