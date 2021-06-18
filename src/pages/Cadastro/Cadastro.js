import React from "react";
import { Link } from "react-router-dom";
import { USER_POST } from "../../Api/api";
import Button from "../../Components/Button/Button";
import Error from "../../Components/Error/Erro";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import styles from "./Cadastro.module.scss";

const Cadastro = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();
  const telefone = useForm();
  const cpf = useForm("cpf");
  const rua = useForm();
  const numero = useForm();
  const bairro = useForm();
  const uf = useForm();
  const municipio = useForm();
  const complemento = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      password: password.value,
      email: email.value
    });
    const {response} = await request(url, options);
    if (response.ok) userLogin(username.value, password.value)
    console.log(response);
  }

  return (
    <>
      <Header />
      <div className="container animeLeft">
        <h1 className={styles.heading}>Cadastre-se</h1>

        <div className={styles.cadastro}>
          <div>
            <div className={styles.formUp}>
            <form onSubmit={handleSubmit}>
                <Input label="Nome" type="text" name="username" {...username} />
                <Input label="Email" type="text" name="email" {...email} />
                <Input
                  label="Senha"
                  type="password"
                  name="password"
                  {...password}
                />
                {/* <div className={styles.wrapper}>
                  <Input
                    label="Telefone"
                    type="text"
                    name="telefone"
                    placeholder="apenas números"
                    {...telefone}
                  />
                  <Input label="CPF" type="text" name="cpf" {...cpf} />
                </div>
                <Input label="Rua" type="text" name="rua" {...rua} />
                <div className={styles.wrapper}>
                  <Input label="Bairro" type="text" name="bairro" {...bairro} />
                  <Input label="Número" type="text" name="numero" {...numero} />
                  <Input label="Estado" type="text" name="uf" {...uf} />
                  <Input
                    label="Município"
                    type="text"
                    name="municipio"
                    {...municipio}
                  />
                </div>
                <Input
                  label="Complemento"
                  type="text"
                  name="complemento"
                  {...complemento}
                /> */}

                {loading ? (
                  <Button text="Cadastrando..." disabled/>
                ) : (
                  <Button text="Cadastrar-se" />
                )}
                <Error error={error} />
              </form>
            </div>
            <span>Já possui cadastro ?</span>
            <Link to={"/login"}>
              <span>Faça login</span>
            </Link>
          </div>

          <img src="assets/hamburguer.jpg" alt="Hamburguer" />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Cadastro;
