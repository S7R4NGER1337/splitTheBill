import styles from "./home.module.css";
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className={styles.homeContainer}>
      <section className={styles.homeData}>
        <h1 className={styles.homeDataTitle}>Welcome to SplitTheBill</h1>
        <p className={styles.homeDataSubtitle}>
          Easily split bills with friends and family. Get started by scanning
          your receipt.
        </p>
      </section>
      <button className={styles.homeButton} onClick={() => navigate('/scanReceipt')}>
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
