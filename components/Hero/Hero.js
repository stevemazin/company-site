import React from "react";
import styles from "../../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroTxt}>
          <div className={styles.heroTxt}>
            <h1 className={styles.header}>GumTree Enterprises</h1>
            <p>Redefining Property Management</p>
          </div>
          <button className={styles.btn}>Discover More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
