import styles from "./summaryOrderedItems.module.css";

export default function SummaryOrderedItems({ orderedItems }) {
  return (
    <div className={styles.orderedItems}>
      {orderedItems.map((item) => (
        <p className={styles.orderdItem} key={item._id}>{item.name} (${item.price})</p>
      ))}
    </div>
  );
}
