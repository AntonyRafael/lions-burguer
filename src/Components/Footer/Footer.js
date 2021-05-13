import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <img src="assets/LogoLion.svg" alt="Logo" className={styles.logo} />
        <div className={styles.footer}>
          <div  className={styles.footerInfo}>
            <ul>
              <li>
                <img src="assets/navigator.svg" alt="Navigator" />
                <span>Rua Logo Ali, 125 Contagem - MG</span>
              </li>
              <li>
                <img src="assets/call.svg" alt="Navigator" />
                <span>(31) 97548 - 3245</span>
              </li>
            </ul>
          </div>
          <div  className={styles.socialMedia}>
            <h3>Nos siga nas redes sociais !</h3>
            <ul>
              <li>
                <img src="assets/facebook.svg" alt="Navigator" />
              </li>
              <li>
                <img src="assets/instagram.svg" alt="Navigator" />
              </li>
              <li>
                <img src="assets/whatsapp.svg" alt="Navigator" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
