import styles from "./receiptClientPhoto.module.css";
import { useState, useEffect } from "react";

export default function ReceiptClientPhoto({ name, type, selectedClients }) {
  const [nameType, setNameType] = useState(type);

  useEffect(() => {
    if (Array.isArray(selectedClients)) {
      if (selectedClients.includes(name)) {
        setNameType("main");
      } else {
        setNameType("secondary");
      }
    }
  }, [selectedClients, name]);

  return (
    <p
      className={`${styles.receiptClientPhoto} ${
        nameType === "main" ? styles.main : styles.secondary
      }`}
    >
      {name}
    </p>
  );
}
