import { useEffect, useState } from "react";
import SummaryOrderedItems from "./SummaryOrderedItems";
import styles from "./clientSummary.module.css";

function calculateTotal(orderedItems) {
  let sum = 0

  orderedItems.forEach(order => {
    sum += order.price
  });
  
  return sum
}

export default function ClientSummary({ client, receiptData }) {
  const [orderedItems, setOrderedItems] = useState([])

  useEffect(() => {
    const haveOrdered = receiptData.orderItems.filter(item => item.orderedBy.includes(client))
    setOrderedItems(haveOrdered);
  }, [])

  return (
    <div className={styles.clientSummary}>
      <section className={styles.clientData}>
        <div>
          <p className={styles.clientName}>{client}</p>
          <p>x{orderedItems.length} items</p>
        </div>
        <p className={styles.clientPrice}>${calculateTotal(orderedItems)}</p>
      </section>
      <div className={styles.line}></div>
      <SummaryOrderedItems orderedItems={orderedItems}/>
    </div>
  );
}
