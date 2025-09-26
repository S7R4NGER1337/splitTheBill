import styles from "./label.module.css";
import { handleChange } from '../../utils/image'

export default function Label({ type, children, setStatus }) {

  return (
    <label className={`${styles.photoLabel} ${type === 'photo' ? styles.takePhotoWrap: styles.selectPhotoWrap}`}>
      <input
        className={styles.takePhotoInput}
        type="file"
        placeholder="Take Photo"
        accept="image/*"
        capture="environment"
        onChange={(e) => handleChange(e, setStatus)}
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
