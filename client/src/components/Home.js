import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.homeData}>
        <h1 className={styles.homeDataTitle}>Welcome to SplitTheBill</h1>
        <p className={styles.homeDataSubtitle}>
          Easily split bills with friends and family. Get started by scanning
          your receipt.
        </p>
      </section>
      <button className={styles.homeButton}>
        <img
          className={styles.homeButtonIcon}
          src="/camera-regular-full.svg"
          alt="cameraIcon"
        />
        Scan Receipt
      </button>
    </div>
  );
}
