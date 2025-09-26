import styles from "./receiptPage.module.css";
import ReceiptClients from "./ReceiptClients";
import { useEffect, useState } from "react";
import ReceiptItem from "./ReceiptItem";
import { useLocation } from "react-router-dom";
import { GetReceiptById } from "../../api/image";
import Loader from "../Loader";

export default function ReceiptPage() {
  const [receiptData, setReceiptData] = useState(null);
  const location = useLocation();

  const receiptId = location.pathname.split("/")[2];
  useEffect(() => {
    if (location.state !== null) {
      setReceiptData(location.state.receiptData);
    } else {
      GetReceiptById(receiptId, setReceiptData);
    }
  }, []);

  return receiptData !== null ? (
    <div className={styles.receiptPageContainer}>
      <ReceiptClients
        receiptData={receiptData}
        setReceiptData={setReceiptData}
      />
      <div className={styles.receiptItemsContainer}>
        {receiptData.orderItems.map((item, index) => (
          <ReceiptItem itemData={item} receiptData={receiptData} key={index} />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
}
