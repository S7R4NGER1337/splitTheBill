import ReceiptItem from "./ReceiptItem";
import styles from "./receiptItems.module.css";

export default function ReceiptItems({ receiptData, setReceiptData }) {
  return (
    <div className={styles.receiptItemsContainer}>
      {receiptData.orderItems.map((item, index) => (
        <ReceiptItem staticitemData={item} receiptData={receiptData} setReceiptData={setReceiptData} key={index} />
      ))}
    </div>
  );
}
