import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../Assets/Logo.jpg";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div>
        <img src={logo} alt="LAHI Logo" className={styles.logo} />
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>Login</li>
        <li className={styles.listItem}>Sign Out</li>
      </ul>
    </div>
  );
}
