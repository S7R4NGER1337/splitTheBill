import ReceiptClientPhoto from "./ReceiptClientPhoto";
import styles from "./receiptClients.module.css";

export default function ReceiptClients({ receiptData, setReceiptData }) {
  const letters = receiptData.clients.map((client) => client[0]);
  const newClient = 'Alex'

  function addNewClient() {
    setReceiptData(prev => ({...prev, clients: [...prev.clients, newClient]}))  
  }

  return (
    <div className={styles.receiptClientContainer}>
      <h1 className={styles.receiptClientTitle}>Receipt Clients</h1>
      <div className={styles.receptClinetPhotos}>
        {letters.map((letter, index) => (
          <ReceiptClientPhoto key={index} letter={letter} />
        ))}
        <button className={styles.receiptClientButton} onClick={addNewClient}>+</button>
      </div>
    </div>
  );
}
