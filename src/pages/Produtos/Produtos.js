import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ProdutoItem from "./ProdutoItem";

import { produtos } from "../../db.json";
import styles from "./Produtos.module.scss";
import ProductHelp from "../../Components/ProductHelp/ProductHelp";

const Produtos = () => {
  return (
    <>
      <Header />
      <div className={"container animeLeft " + styles.produtos}>
        <ul>
          <ProdutoItem array={produtos} />
        </ul>
      </div>
      <ProductHelp />
      <Footer />
    </>
  );
};

export default Produtos;
