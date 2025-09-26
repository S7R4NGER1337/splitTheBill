import { useState } from "react";
import ReceiptClientPhoto from "./ReceiptClientPhoto";
import styles from "./receiptClients.module.css";
import { setNewName } from '../../api/image'

export default function ReceiptClients({ receiptData, setReceiptData }) {
  const [clientInputStatus, setCientInputStatus] = useState("hidden");  
  const [newClient, setNewClient] = useState('')
  const letters = receiptData.clients.map((client) => client[0]);

  async function addNewClient() {
    setReceiptData((prev) => ({
      ...prev,
      clients: [...prev.clients, newClient],
    }));
    await setNewName(receiptData._id, newClient)
    setCientInputStatus('hidden')
  }

  return (
    <div className={styles.receiptClientContainer}>
      <h1 className={styles.receiptClientTitle}>Receipt Clients</h1>
      {clientInputStatus === "shown" ? (
        <div className={styles.newNameContainer}>
          <input
            className={styles.newClientInput}
            type="text"
            placeholder="Enter new name"
            value={newClient}
            onChange={(e) => setNewClient(e.target.value)}
          />
          <button className={styles.newNameBtn} onClick={addNewClient}>Create</button>
        </div>
      ) : (
        <div className={styles.receptClinetPhotos}>
          {letters.map((letter, index) => (
            <ReceiptClientPhoto key={index} letter={letter} />
          ))}
          <button className={styles.receiptClientButton} onClick={() => setCientInputStatus('shown')}>
            +
          </button>
        </div>
      )}
    </div>
  );
}
