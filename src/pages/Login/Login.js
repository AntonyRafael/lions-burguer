import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import styles from "./Login.module.scss";
import useForm from "../../Hooks/useForm"
import Button from "../../Components/Button/Button";

const Login = () => {
  
    const username = useForm();
    const password = useForm();

  return (
    <>
      <Header />
      <div className={styles.login + " container"}>
        <div>
        <h1>Faça seu <span>login</span></h1>
          <Input label="Usuário" type="text" name="username" {...username} />
          <Input label="Senha" type="password" name="password" {...password} />
          <Button text="Login"/>
          <span>Ainda não se cadastrou ?</span>
          <span>Cadastre-se agora</span>
        </div>

        <img src="assets/hamburguer.jpg" alt="Hamburguer"/>
      
      </div>
      <Footer />
    </>
  );
};

export default Login;
