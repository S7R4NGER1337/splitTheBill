import SummaryOrderedItems from "./SummaryOrderedItems";
import styles from "./clientSummary.module.css";

export default function ClientSummary({ client, receiptData }) {
  return (
    <div className={styles.clientSummary}>
      <section className={styles.clientData}>
        <div>
          <p className={styles.clientName}>{client}</p>
          <p>x2 items</p>
        </div>
        <p className={styles.clientPrice}>$10.60</p>
      </section>
      <div className={styles.line}></div>
      <SummaryOrderedItems />
    </div>
  );
}
