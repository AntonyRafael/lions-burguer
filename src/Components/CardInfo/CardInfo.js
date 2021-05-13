import React from "react";
import styles from "./CardInfo.module.scss";

const CardInfo = ({image,alt, title, text}) => {
  return (
    <div className={styles.cardInfo}>
      <div className={styles.img}>
        <img src={image} alt={alt}/>
      </div>
      <div className={styles.infos}>
        <p>{title}</p>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default CardInfo;
