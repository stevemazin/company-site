import React from "react";
import styles from "../../styles/IntroText.module.css";
import Image from "next/image";
import { textData } from "./IntroTextData";

const IntroText = () => {
  return (
    <div id="services" className={styles.container}>
      <h1 className={styles.headerMain}>What We Do</h1>
      {textData.map((service, index) => {
        return (
          <div key={index} className={styles.infoTxtWrapper}>
            <div className={styles.imgWrapper}>
              <Image
                className={styles.img}
                width={service.width}
                height={service.height}
                src={service.src}
                alt={service.alt}
              />
            </div>
            <div className={styles.serviceTxt}>
              <h3 className={styles.headerSecondary}>{service.title}</h3>
              <p className={styles.paragraph}>{service.paragraphTxt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IntroText;
