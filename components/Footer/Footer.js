import React from "react";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInfo}>
          <div>Copyright 2021</div>
          <div>Developed by Stevie Designs</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
