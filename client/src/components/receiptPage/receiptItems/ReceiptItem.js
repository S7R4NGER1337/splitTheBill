import styles from "./receiptItem.module.css";
import ReceiptClientPhoto from "../receiptClient/ReceiptClientPhoto";
import { useEffect, useState } from "react";
import { editReceipt, deleteReceiptItem } from "../../../api/image";

export default function ReceiptItem({ itemData, receiptData, setReceiptData }) {
  const [orderedBy, setOrderedBy] = useState([]);

  useEffect(() => {
    setOrderedBy(itemData.orderedBy);
  }, []);

  useEffect(() => {
    editReceipt(orderedBy, itemData._id, receiptData._id);

    setReceiptData((prev) => ({
      ...prev,
      orderItems: prev.orderItems.map((item) =>
        item._id === itemData._id ? { ...item, orderedBy } : item
      ),
    }));
  }, [orderedBy]);

  return (
    <div className={styles.receiptItemContainer}>
      <div className={styles.receiptItemData}>
        <section className={styles.receiptItemInfo}>
          <h1 className={styles.receiptItemName}>{itemData.name}</h1>
          <p className={styles.receiptItemPrice}>
            ${itemData.price} x{itemData.qty}
          </p>
        </section>
        <div className={styles.receiptItemActions}>
          <img
            className={styles.receiptAction}
            src="/pencil-solid-full.svg"
            alt="edit"
          />
          <img
            className={styles.receiptAction}
            src="/trash-solid-full.svg"
            alt="edit"
            onClick={() => deleteReceiptItem(itemData._id, receiptData._id)}
          />
        </div>
      </div>
      <div className={styles.clientsSelectContainer}>
        {receiptData.clients.map((name, index) => (
          <ReceiptClientPhoto
            photoType={"Button"}
            key={index}
            name={name}
            type={"secondary"}
            orderedBy={orderedBy}
            setOrderedBy={setOrderedBy}
          />
        ))}
      </div>
    </div>
  );
}
