import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={`container ${styles.headerContainer}`}>
        <img src="assets/LogoLion.svg" />
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li><Link to={"/"}>Sobre</Link></li>
            <li><Link to={"/"}>Cardápio</Link></li>
            <li><Link to={"/"}>Contato</Link></li>
            <Button text="Faça seu pedido" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
