import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section>
      <div className={styles.banner + " animeLeft"}>
        <div className={styles.infoBanner + " container"}>
          <h1>Para matar sua fome de leão !</h1>
          <p>Venha experimentar o sabor que só a Lions pode te oferecer</p>
          <Link to={"/produtos"}> <Button text="Faça seu pedido" /></Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
