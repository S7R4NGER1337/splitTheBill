import styles from './summary.module.css'

export default function Summary({receiptData}) {
    return(
        <div className={styles.summaryContainer}>
        <h1 className={styles.summaryContainerTitle}>Summary</h1>
        <div className={styles.clientsSummary}>
          {receiptData.clients.map((client) => (
            <div className={styles.clientSummary} key={client.name}>
              <section className={styles.clientData}>
                <div>
                  <p className={styles.clientName}>{client}</p>
                  <p>x2 items</p>
                </div>
                <p className={styles.clientPrice}>$10.60</p>                
              </section>
              <div className={styles.line}></div>
              <div className={styles.orderedItems}>
                <p>1 Salad ($8.40)</p>
                <p>1 Soda ($3.00)</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}