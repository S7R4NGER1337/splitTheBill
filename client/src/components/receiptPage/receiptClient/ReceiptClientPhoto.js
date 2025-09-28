import styles from "./receiptClientPhoto.module.css";
import { useState, useEffect } from "react";

export default function ReceiptClientPhoto({
  name,
  type,
  orderedBy,
  setOrderedBy,
  photoType,
}) {
  const [nameType, setNameType] = useState(type);

  useEffect(() => {
    if (Array.isArray(orderedBy)) {
      if (orderedBy.includes(name)) {
        setNameType("main");
      } else {
        setNameType("secondary");
      }
    }
  }, [orderedBy, name]);

  function nameOnClick(e) {
    const targetName = e.target.textContent;

    setOrderedBy((prev) => {
      const isAlreadySelected = prev.includes(targetName);

      if (isAlreadySelected) {
        const selected = prev.filter((n) => n !== targetName);
        return selected;
      } else {
        return [...prev, targetName];
      }
    });
  }

  return photoType === "Button" ? (
    <p
      onClick={(e) => nameOnClick(e)}
      className={`${styles.receiptClientPhoto} ${
        nameType === "main" ? styles.main : styles.secondary
      }`}
    >
      {name}
    </p>
  ) : (
    <p
      className={`${styles.receiptClientPhoto} ${
        nameType === "main" ? styles.main : styles.secondary
      }`}
    >
      {name}
    </p>
  );
}
