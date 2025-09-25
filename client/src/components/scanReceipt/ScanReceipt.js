import Label from "./Label";
import styles from "./scanReceipt.module.css";
import { handleChange } from "../../utils/image";

export default function ScanReceipt() {
  return (
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
        <Label type={"photo"} handleChange={handleChange}>
          Take Photo
        </Label>
        <Label type={"library"} handleChange={handleChange}>
          Select from Library
        </Label>
      </div>
    </div>
  );
}
