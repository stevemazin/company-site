import React from "react";
import styles from "../../styles/IntroText.module.css";
import Image from "next/image";

const IntroText = () => {
  return (
    <div className={styles.container}>
      <h1>What we do</h1>
      <div className={styles.infoTxtWrapper}>
        <Image width="300" height="300" src="/calculator.svg" alt="" />
        <p className={styles.paragraph}>
          Well, CapsLock Enterprises is here to help. We will do the hard work,
          so you can get time to focus on more important things.
        </p>
      </div>
    </div>
  );
};

export default IntroText;
