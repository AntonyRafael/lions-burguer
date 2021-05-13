import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import useForm from "../../Hooks/useForm";
import styles from "./Cadastro.module.scss";

const Cadastro = () => {
  const nome = useForm();
  const telefone = useForm();
  const cpf = useForm('cpf');
  const email = useForm('email');
  const rua = useForm();
  const numero = useForm();
  const bairro = useForm();
  const uf = useForm();
  const complemento = useForm();

  return (
    <>
      <Header />
      <div className="container">
        <h1 className={styles.heading}>Cadastre-se</h1>

        <div className={styles.cadastro}>
          <div>
            <div className={styles.formUp}>
              <Input label="Nome" type="text" name="nome" {...nome} />
              <div className={styles.wrapper}>
                <Input
                  label="Telefone"
                  type="text"
                  name="telefone"
                  placeholder="apenas números"
                  {...telefone}
                />
                <Input label="CPF" type="text" name="cpf" {...cpf} />
              </div>
              <Input label="Email" type="text" name="email" {...email} />
              <div className={styles.wrapper}>
                <Input label="Rua" type="text" name="rua" {...rua} />
                <Input label="Número" type="text" name="numero" {...numero} />
              </div>
              <div className={styles.wrapper}>
                <Input label="Bairro" type="text" name="bairro" {...bairro} />
                <Input label="Estado" type="text" name="uf" {...uf} />
              </div>
              <Input
                label="Complemento"
                type="text"
                name="complemento"
                {...complemento}
              />
              <Button text="Cadastrar-se" />
            </div>
            <span>Já possui cadastro ?</span>
            <Link to={"/login"}><span>Faça login</span></Link>
          </div>

          <img src="assets/hamburguer.jpg" alt="Hamburguer" />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Cadastro;
