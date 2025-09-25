import styles from "./receiptItem.module.css";

export default function ReceiptItem({ itemData }) {

  return (
    <div className={styles.receiptItemContainer}>
      <div className={styles.receiptItemData}>
        <section className={styles.receiptItemInfo}>
          <h1 className={styles.receiptItemName}>{itemData.name}</h1>
          <p className={styles.receiptItemPrice}>${itemData.price} x{itemData.qty}</p>
        </section>
        <div className={styles.receiptItemActions}>
          <img className={styles.receiptAction} src="/pencil-solid-full.svg" alt="edit" />
          <img className={styles.receiptAction} src="/trash-solid-full.svg" alt="edit" />
        </div>
      </div>

    </div>
  );
}
