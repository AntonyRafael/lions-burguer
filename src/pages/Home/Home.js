import React from "react";
import Banner from "../../Components/Banner/Banner";
import Header from "../../Components/Header/Header";
import styles from "./Home.module.scss";

import { produtos } from "../../db.json";
import MapContainer from "../../Components/MapContainer/MapContainer";
import CardInfo from "../../Components/CardInfo/CardInfo";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="container">
        <section className={styles.historia}>
          <img src="assets/frase-mtv.jpg" alt="Frase Historia" />
          <div className={styles.historiaInfo}>
            <h1>Um pouco da nossa história</h1>
            <ul>
              <li>Simbolizamos a importância dos sonhos,sonhos majestosos.</li>
              <li>Sonhos que nos movem a torná-los realidade.</li>
              <li>
                Com analogias dos reinos encantados liderados por leões,
                ousadamente construímos um mundo real.
              </li>
              <li>
                Somos Lions Burguers, dedicados a entregar sabores autênticos.
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.cardapio} id="cardapio">
          <h1>
            Confira nosso <span>saboroso</span> menu
          </h1>
          <div className={styles.cardapioItens}>
            <ul>
              <li>Combo</li>
              <li>Hamburguér</li>
              <li>Adicionais</li>
              <li>Bebidas</li>
              <li>Sobremesas</li>
            </ul>
          </div>

          <div className={styles.cardapioProd}>
            <ul>
              {produtos.map((produtos) => (
                <li>
                  <h1>{produtos.title}</h1>
                  <span>{produtos.description}</span>
                  <span className={styles.price}>R$ {produtos.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <MapContainer />
        <section style={{ display: "flex" }}>
          <CardInfo 
            image="assets/navigator.svg"
            alt="Porta"
            title="Endereço"
            text="Rua XXXXXX, 111, Centro -
            Contagem MG"
          />
          <CardInfo
            image="assets/porta.svg"
            alt="Endereço"
            title="Funcionamento"
            text="Atendimento de Ter à Sex 18:00 às 00:00"
          />
          <CardInfo
             image="assets/call.svg"
             alt="Telefone"
             title="Contato"
             text="(31) 99999-9999
             lionsburguer@gmail.com"
          />
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
