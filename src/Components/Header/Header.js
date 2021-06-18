import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Button from "../Button/Button";
import styles from "./Header.module.scss";

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <header>
      <div className={`container ${styles.headerContainer}`}>
        <Link to={"/"}>
          <img src="assets/LogoLion.svg" alt="Logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            {data ? (
              <>
                <li>
                  <Link to="/perfil" className={styles.login}>
                    {data.nome}
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={userLogout}>{"Sair"}</Link>
                </li>
              </>
            ) : (
              <li>
                {" "}
                <Link to="/login" className={styles.login}>
                  Login / Criar
                </Link>{" "}
              </li>
            )}

            <Link to={"/produtos"}>
              {" "}
              <Button text="Faça seu pedido" />
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
