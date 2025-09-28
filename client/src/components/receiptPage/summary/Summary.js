import ClientSummary from "./ClientSummary";
import styles from "./summary.module.css";

export default function Summary({ receiptData }) {
  return (
    <div className={styles.summaryContainer}>
      <h1 className={styles.summaryContainerTitle}>Summary</h1>
      <div className={styles.clientsSummary}>
        {receiptData.clients.map((client) => (
          <ClientSummary client={client} />
        ))}
      </div>
    </div>
  );
}
