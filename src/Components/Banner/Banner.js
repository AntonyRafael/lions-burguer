import React from "react";
import Button from "../Button/Button";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section>
      <div className={styles.banner}>
        <div className={styles.infoBanner + " container"}>
          <h1>Para matar sua fome de leão !</h1>
          <p>Venha experimentar o sabor que só a Lions pode te oferecer</p>
          <Button text="faça seu pedido" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
