import Label from "./Label";
import styles from "./scanReceipt.module.css";
import { useState } from "react";

export default function ScanReceipt() {
  const [imageFile, setImageFile] = useState(null); // File object
  const [preview, setPreview] = useState(null); // Preview URL

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

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
        <Label type={"photo"}>Take Photo</Label>
        <Label type={"library"}>Select from Library</Label>
      </div>
    </div>
  );
}
