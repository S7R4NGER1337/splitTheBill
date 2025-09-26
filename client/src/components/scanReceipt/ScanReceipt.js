import Label from "./Label";
import styles from "./scanReceipt.module.css";
import { useState } from "react";

export default function ScanReceipt() {
  const [status, setStatus] = useState('loadin')
  return (
    status === 'loading' ? <h1>Loading...</h1>:
    <div className={styles.scanReceiptContainer}>
      <section className={styles.scanReceiptData}>
        <img
          className={styles.scanReceiptIcon}
          src="/receipt-regular-full.svg"
          alt="receiptIcon"
        />
        <h1 className={styles.scanReceiptTitle}>Scan your receipt</h1>
        <p className={styles.scanReceiptSubtitle}>
          Position your receipt within the frame. We'll handle the rest.
        </p>
      </section>
      <div className={styles.scanReceiptButtonsContaienr}>
        <Label type={"photo"} setStatus={setStatus}>
          Take Photo
        </Label>
        <Label type={"library"} setStatus={setStatus}>
          Select from Library
        </Label>
      </div>
    </div>
  );
}
