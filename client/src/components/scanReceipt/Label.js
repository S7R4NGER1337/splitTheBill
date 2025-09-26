import styles from "./label.module.css";
import { handleChange } from '../../utils/image'
import { useNavigate } from 'react-router-dom'

export default function Label({ type, children, setStatus }) {
  const navigate = useNavigate()

  function redirectTo(path, receiptData) {
    navigate(path, { state: {receiptData: receiptData}})
  }
  return (
    <label className={`${styles.photoLabel} ${type === 'photo' ? styles.takePhotoWrap: styles.selectPhotoWrap}`}>
      <input
        className={styles.takePhotoInput}
        type="file"
        placeholder="Take Photo"
        accept="image/*"
        capture="environment"
        onChange={(e) => handleChange(e, setStatus, redirectTo)}
      />
      <img
        className={styles.takePhotoIcon}
        src={type === 'photo' ? "/camera-regular-full.svg": "/images-regular-full.svg"}
        alt="cameraIcon"
      />

      {children}
    </label>
  );
}
