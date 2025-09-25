import styles from './receipt.module.css'
import ReceiptClients from './ReceiptClients'

export default function ReceiptPage() {
    return (
        <div className={styles.receiptPageContainer}>
            <ReceiptClients />
        </div>
    )
}