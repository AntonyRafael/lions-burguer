import React from "react";
import styles from "./CardInfo.module.scss";

const CardInfo = () => {
  return (
    <div className={styles.cardInfo}>
      <div className={styles.img}>
        <img src="assets/porta.svg" alt="Porta"/>
      </div>
      <div className={styles.infos}>
        <p>Funcionamento</p>
        <span>Atendimento de Ter à Sex 18:00 às 00:00 </span>
      </div>
    </div>
  );
};

export default CardInfo;
