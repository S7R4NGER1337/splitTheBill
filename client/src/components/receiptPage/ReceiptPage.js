import styles from './receiptPage.module.css'
import ReceiptClients from './ReceiptClients'
import { receipt } from '../../api/staticData'
import { useState } from 'react'
import ReceiptItem from './ReceiptItem'

export default function ReceiptPage() {
    const [receiptData, setReceiptData] = useState(receipt)
    
    return (
        <div className={styles.receiptPageContainer}>
            <ReceiptClients receiptData={receiptData} setReceiptData={setReceiptData}/>
            <div className={styles.receiptItemsContainer}>
                {receiptData.orderItems.map((item, index) => <ReceiptItem itemData={item} receiptData={receiptData} key={index}/>)}
            </div>
        </div>
    )
}