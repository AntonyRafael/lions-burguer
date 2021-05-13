import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={`container ${styles.headerContainer}`}>
        <Link to={"/"}><img src="assets/LogoLion.svg" alt="Logo" /></Link>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li><Link to={"/login"}>Login</Link></li>
            <li><a href="#cardapio">Cardápio</a></li>
            <li><a href="#contato"> Contato</a></li>
            <Button text="Faça seu pedido" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
