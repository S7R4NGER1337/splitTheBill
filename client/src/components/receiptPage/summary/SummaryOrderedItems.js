import styles from './summaryOrderedItems.module.css'

export default function SummaryOrderedItems() {
  return (
    <div className={styles.orderedItems}>
      <p className={styles.orderdItem}>1 Salad ($8.40)</p>
      <p className={styles.orderdItem}>1 Soda ($3.00)</p>
    </div>
  );
}
