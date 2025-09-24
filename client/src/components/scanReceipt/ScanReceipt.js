import styles from "./scanReceipt.module.css";

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
         <label className={`${styles.photoLabel} ${styles.takePhotoWrap}`}>
          <input
            className={styles.takePhotoInput}
            type="file"
            placeholder="Take Photo"
            accept="image/*"
            capture="environment"
          />
          <img className={styles.takePhotoIcon} src="/camera-regular-full.svg" alt="cameraIcon" />
          Take Photo
        </label>
        <label className={`${styles.photoLabel} ${styles.selectPhotoWrap}`}>
          <input
            className={styles.takePhotoInput}
            type="file"
            placeholder="Take Photo"
            accept="image/*"
            capture="environment"
          />
          <img className={styles.takePhotoIcon} src="/camera-regular-full.svg" alt="cameraIcon" />
          Select from Library
        </label>
      </div>
    </div>
  );
}
