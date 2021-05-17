import React from "react";
import styles from "./ProdutoItem.module.scss";

const ProdutoItem = ({ array }) => {
  console.log(array);
  return (
    <>
      {array.map((item, index) => (
        <li key={index}>
          <div className={styles.produtoItem}>
            <h1>{item.title}</h1>
            <div className={styles.imageItem}>
              <img src={item.image} alt={item.title} />
            <div className={styles.moreDetails}>
              <img src="assets/up.svg" alt="ver mais" />
            </div>
            </div>
            <button>Adiconar ao carrinho</button>
          </div>
        </li>
      ))}
    </>
  );
};

export default ProdutoItem;
