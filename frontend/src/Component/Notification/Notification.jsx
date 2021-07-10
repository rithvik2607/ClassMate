import styles from "./Notification.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

export const AlertTemplate = ({ style, options, message, close }) => (
  <div style={style}>
    {options.type === "info" && (
      <div className={`${styles.data_container} ${styles.info}`}>
        <div className={styles.message}>{message}</div>
        <div className={styles.close_container} onClick={close}>
          <AiFillCloseCircle className={styles.close_btn} />
        </div>
      </div>
    )}
    {options.type === "success" && (
      <div className={`${styles.data_container} ${styles.success}`}>
        <div className={styles.message}>{message}</div>
        <div className={styles.close_container}>
          <AiFillCloseCircle onClick={close} className={styles.close_btn} />
        </div>
      </div>
    )}
    {options.type === "error" && (
      <div className={`${styles.data_container} ${styles.error}`}>
        <div className={styles.message}>{message}</div>
        <div className={styles.close_container} onClick={close}>
          <AiFillCloseCircle className={styles.close_btn} />
        </div>
      </div>
    )}
    {options.type === "warning" && (
      <div className={`${styles.data_container} ${styles.warning}`}>
        <div className={styles.message}>{message}</div>
        <div className={styles.close_container} onClick={close}>
          <AiFillCloseCircle className={styles.close_btn} />
        </div>
      </div>
    )}
  </div>
);
