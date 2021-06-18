import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import styles from "./Login.module.scss";
import useForm from "../../Hooks/useForm";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Error from "../../Components/Error/Erro";

const Login = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);
 // console.log(userLogin, error, loading);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <>
      <Header />
      <div className={"container animeLeft " + styles.login}>
        <div>
          <h1>
            Faça seu <span>login</span>
          </h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="username" {...username} />
            <Input
              label="Senha"
              type="password"
              name="password"
              {...password}
            />
            {loading ? (
              <Button disabled text="Carregando..." />
            ) : (
              <Button text="Entrar" />
            )}
            <Error error={error && "Usuário ou senha incorretos"} />
          </form>
          <div className={styles.wrapper}>
            <Link to={"/cadastro"}>
              <span>Cadastre-se agora</span>
            </Link>
            <Link to={"/cadastro"}>
              <span>Esqueceu sua senha ?</span>
            </Link>
          </div>
        </div>

        <img src="assets/hamburguer.jpg" alt="Hamburguer" />
      </div>
      <Footer />
    </>
  );
};

export default Login;
