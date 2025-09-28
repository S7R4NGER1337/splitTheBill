import ReceiptItem from "./ReceiptItem";
import styles from "./receiptItems.module.css";

export default function ReceiptItems({ receiptData }) {
  return (
    <div className={styles.receiptItemsContainer}>
      {receiptData.orderItems.map((item, index) => (
        <ReceiptItem itemData={item} receiptData={receiptData} key={index} />
      ))}
    </div>
  );
}
