import styles from './receiptPage.module.css'
import ReceiptClients from './ReceiptClients'
import { receipt } from '../../api/staticData'
import { useState } from 'react'

export default function ReceiptPage() {
    const [receiptData, setReceiptData] = useState(receipt)
    
    return (
        <div className={styles.receiptPageContainer}>
            <ReceiptClients receiptData={receiptData} setReceiptData={setReceiptData}/>
        </div>
    )
}