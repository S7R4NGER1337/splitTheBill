import styles from './receiptClient.module.css'

export default function ReceiptClients({receiptData}) {
    const letters = receiptData.clients.map(client => client[0])

    return <div className={styles.receiptClientContainer}>
        <h1>Receipt Clients</h1>
        <div className={styles.receptClinetPhotos}>
            {letters.map(letter => <p>{letter}</p>)}
        </div>
    </div>
}