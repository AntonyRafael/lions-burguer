import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartButton.module.scss";

const CartButton = ({ quantityItens, children }) => {
  return (
    <Link to={"/pedido"}  >
      <button className={styles.btnProduct + " animeLeft"}>
        {children}
        <span>{quantityItens}</span>
      </button>
    </Link>
  );
};

export default CartButton;
