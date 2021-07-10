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
        <li>Login</li>
        <li>Sign Out</li>
      </ul>
    </div>
  );
}
