import styles from './receiptItem.module.css'

export default function ReceiptItem({itemData}) {
    return(
        <div className={styles.receiptItemContainer}>
            <h1>{itemData.name}</h1>

        </div>
    )
}