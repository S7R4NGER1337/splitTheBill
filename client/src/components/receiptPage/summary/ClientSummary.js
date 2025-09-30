import SummaryOrderedItems from "./SummaryOrderedItems";
import styles from "./clientSummary.module.css";

function calculateTotal(orderedItems) {
  let sum = 0;

  orderedItems.forEach((order) => {
    sum += order.price;
  });

  return sum.toFixed(2);
}

export default function ClientSummary({ client, receiptData }) {
  const orderedItems = receiptData.orderItems
    .filter((item) => item.orderedBy.includes(client))
    .map((item) => {
      if (item.orderedBy.length > 1) {
        return { ...item, price: item.price / item.orderedBy.length };
      }
      return item;
    });

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
      <SummaryOrderedItems orderedItems={orderedItems} />
    </div>
  );
}
