import styles from "./receiptItem.module.css";
import ReceiptClientPhoto from "../receiptClient/ReceiptClientPhoto";
import { useEffect, useState } from "react";
import {
  editReceiptOrderedBy,
  deleteReceiptItem,
  editReceiptItem,
} from "../../../api/image";

export default function ReceiptItem({
  staticitemData,
  receiptData,
  setReceiptData,
}) {
  const [orderedBy, setOrderedBy] = useState([]);
  const [itemStatus, setItemStatus] = useState(true);
  const [itemData, setItemData] = useState(staticitemData);

  useEffect(() => {
    setOrderedBy(itemData.orderedBy);
  }, []);

  useEffect(() => {
    editReceiptOrderedBy(orderedBy, itemData._id, receiptData._id);

    setReceiptData((prev) => ({
      ...prev,
      orderItems: prev.orderItems.map((item) =>
        item._id === itemData._id ? { ...item, orderedBy } : item
      ),
    }));
  }, [orderedBy]);

  function deleteItem() {
    setReceiptData((prev) => ({
      ...prev,
      orderItems: prev["orderItems"].filter(
        (item) => item._id !== itemData._id
      ),
    }));

    deleteReceiptItem(itemData._id, receiptData._id);
  }

  function editItem() {
    setItemStatus("shown");
    editReceiptItem(itemData, receiptData._id);

    setReceiptData((prev) => ({
      ...prev,
      orderItems: prev.orderItems.map((item) =>
        item._id === itemData._id ? itemData : item
      ),
    }));
  }

  return (
    <div className={styles.receiptItemContainer}>
      <div className={styles.receiptItemData}>
        {itemStatus ? (
          <section className={styles.receiptItemInfo}>
            <h1 className={styles.receiptItemName}>{itemData.name}</h1>
            <p className={styles.receiptItemPrice}>${itemData.price}</p>
          </section>
        ) : (
          <section className={styles.receiptItemInfo}>
            <input
              className={styles.receiptItemName}
              value={itemData.name}
              onChange={(e) =>
                setItemData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <input
              className={styles.receiptItemPrice}
              type="number"
              value={itemData.price}
              onChange={(e) =>
                setItemData((prev) => ({ ...prev, price: Number(e.target.value) }))
              }
            />
            <button onClick={editItem}>Continue</button>
          </section>
        )}

        <div className={styles.receiptItemActions}>
          <img
            className={styles.receiptAction}
            src="/pencil-solid-full.svg"
            alt="edit"
            onClick={() => setItemStatus(prev => !prev)}
          />
          <img
            className={styles.receiptAction}
            src="/trash-solid-full.svg"
            alt="edit"
            onClick={deleteItem}
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
