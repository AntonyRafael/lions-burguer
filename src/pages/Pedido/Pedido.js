import React from "react";
import { GlobalContext } from "../../CartContext";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import TextArea from "../../Components/TextArea/TextArea";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import { PEDIDO_POST } from "../../Api/api";

import styles from "./Pedido.module.scss";
import Page404 from "../NotFound/Page404";
import Error from "../../Components/Error/Erro";

const Pedido = () => {
  const { cartContext /*setCartContext*/ } = React.useContext(GlobalContext);

  const [radio, setRadio] = React.useState("cartao");

  const [tipoCartao, setTipoCartao] = React.useState("debito");

  const [totalCart, setTotalCart] = React.useState(0);
  const [troco, setTroco] = React.useState(0);

  const dinheiroPagamento = useForm();
  const observacoesPedido = useForm();
  let trocoPayment = React.useRef();

  let numeroPedido;

  // Dados do endereço
  const rua = useForm();
  const bairro = useForm();
  const numero = useForm();
  const estado = useForm();
  const municipio = useForm();
  const complemento = useForm();

  // dados Cliente
  const cx = React.useContext(UserContext);
  let nomeUsuario = null;
  if (cx.data) {
    nomeUsuario = cx.data.nome;
    //console.log(nomeUsuario, "nome de usuario");
  }
 
  let allItens = cartContext.map((item) => item.title)
  console.log(allItens.toString(), 'all')  
  //
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    let totalCart = cartContext
      .map((item) => item.price.replace(",", "."))
      .map((val) => Number(val))
      .reduce((total, numero) => total + numero, 0)
      .toFixed(2);
    setTotalCart(totalCart);
  }, [totalCart, cartContext]);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    trocoPayment = Number(dinheiroPagamento.value) - (Number(totalCart) + 4);
    setTroco(trocoPayment.toFixed(2));
  }, [dinheiroPagamento]);

  function handleChange({ target }) {
    setRadio(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("nome", nomeUsuario);
    formData.append("numPedido", numeroPedido);
    formData.append("itens", allItens.toString());
    formData.append("qtdItens", cartContext.length);
    formData.append("subTotal", totalCart);
    formData.append("frete", 4);
    formData.append("precoTotal", +totalCart + 4);
    formData.append("formaPagamento", radio);
    formData.append("rua", rua.value);
    formData.append("numero", numero.value);
    formData.append("bairro", bairro.value);
    formData.append("estado", estado.value);
    formData.append("complemento", complemento.value);
    
    const { url, options } = PEDIDO_POST(
      formData,
      window.localStorage.getItem("token")
    );
    request(url, options);
  }

  function randomNumber() {
    return (Math.random() * 1000).toFixed();
  }

  numeroPedido = randomNumber();

  if (nomeUsuario === null)
    return (
      <>
        <Page404>
          <h1>Faça login para realizar um pedido !</h1>
        </Page404>
      </>
    );

  if (nomeUsuario !== null)
    return (
      <>
        <Header />;
        <div className={styles.pedidoContainer + " container animeLeft"}>
          <div className={styles.orderPayment}>
            <div className={styles.payment}>
              <h2>Escolha a forma de pagamento: </h2>
              <form>
                <label
                  className={
                    styles.typePayment +
                    " " +
                    (radio === "dinheiro" ? styles.activePayment : "")
                  }
                >
                  <input
                    type="radio"
                    value="dinheiro"
                    checked={radio === "dinheiro"}
                    onChange={handleChange}
                  />
                  Dinheiro
                </label>

                <label
                  className={
                    styles.typePayment +
                    " " +
                    (radio === "cartao" ? styles.activePayment : "")
                  }
                >
                  <input
                    type="radio"
                    value="cartao"
                    checked={radio === "cartao"}
                    onChange={handleChange}
                  />
                  Cartão
                </label>
              </form>

              {radio && radio === "dinheiro" ? (
                <div className={styles.moneyMethod}>
                  <Input
                    label="Dinheiro a ser dado: "
                    type="number"
                    name="dinheiro"
                    placeholder="Insira um valor"
                    {...dinheiroPagamento}
                  />

                  <label htmlFor="troco" className={styles.label}>
                    Seu troco
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    id="troco"
                    name="troco"
                    value={troco}
                    disabled="true"
                  />

                  {troco < 0 && (
                    <span>
                      Dinheiro a ser dado deve ser maior que o valor da compra.
                    </span>
                  )}
                </div>
              ) : (
                <div className={styles.cardMethod}>
                  <form>
                    <h2>Tipo do cartão</h2>
                    <label
                      className={
                        styles.tipoCartao +
                        " " +
                        (tipoCartao === "debito" ? styles.cartaoAtivo : "")
                      }
                    >
                      <input
                        type="radio"
                        value="debito"
                        checked={tipoCartao === "debito"}
                        onChange={({ target }) => setTipoCartao(target.value)}
                      />
                      Débito
                    </label>
                    <label
                      className={
                        styles.tipoCartao +
                        " " +
                        (tipoCartao === "credito" ? styles.cartaoAtivo : "")
                      }
                    >
                      <input
                        type="radio"
                        value="credito"
                        checked={tipoCartao === "credito"}
                        onChange={({ target }) => setTipoCartao(target.value)}
                      />
                      Crédito
                    </label>
                  </form>
                </div>
              )}
            </div>

            <div className={styles.orderAddress}>
              <Input label="Rua" type="text" name="rua" {...rua} />
              <Input label="Bairro" type="text" name="bairro" {...bairro} />
              <div className={styles.wrapper}>
                <Input label="Número" type="number" name="numero" {...numero} />
                <Input label="Estado" type="text" name="estado" {...estado} />
              </div>
              <Input
                label="Município"
                type="text"
                name="municipio"
                {...municipio}
              />
              <Input
                label="Complemento"
                type="text"
                name="complemento"
                {...complemento}
              />
            </div>

            <div className={styles.orderObs}>
              <TextArea
                label="Observações do pedido "
                type="text"
                name="dinheiro"
                placeholder="sem tomate..."
                maxlength="150"
                {...observacoesPedido}
              />
            </div>
          </div>

          <div className={styles.orderSummary}>
            <form onSubmit={handleSubmit}>
              <div>
                <div className={styles.orderHeader}>
                  <p>Pedido - # {numeroPedido}</p>
                  <img src="assets/LionIco.png" alt="Icone lion" />
                </div>
                <div className={styles.orderDetails}>
                  <p>Resumo do pedido: </p>
                  <ul>
                    {cartContext.map((item, index) => (
                      <li key={index}>
                        - {item.title}
                      </li>
                    ))}
                  </ul>
                  {observacoesPedido.value && (
                    <>
                      <p>Observações: </p>
                      <span
                        style={{ maxWidth: "20rem", wordBreak: " break-word" }}
                      >
                        {observacoesPedido.value}
                      </span>
                    </>
                  )}

                  <p>Pagamento: </p>
                  <ul>
                    {cartContext && (
                      <>
                        <li>Subtotal: R$ {totalCart}</li>
                        <li>Frete: R$ 4,00</li>
                        <li>Total: R$ {+totalCart + 4}</li>
                      </>
                    )}
                    <li>Forma de pagamento: {radio}</li>
                    {radio === "dinheiro" && <li>Troco: R$ {troco}</li>}
                  </ul>
                </div>

                <div className={styles.orderDelivery}>
                  <p>Entrega: </p>
                  <ul>
                    <li>- Comprador: {nomeUsuario} </li>
                    <li>- Entrega: 30 a 60 min</li>
                    <li>
                      - {rua.value ? rua.value : "Rua Logo ali"},
                      {numero.value ? "nº " + numero.value : "nº 654"} Bairro:{" "}
                      {bairro.value ? bairro.value : "já ta chegando"}
                    </li>
                    <li>
                      - {municipio.value ? municipio.value : "Contagem"} -{" "}
                      {estado.value ? estado.value : "MG"}{" "}
                    </li>
                    <li>
                      -{" "}
                      {complemento.value
                        ? complemento.value
                        : "Casa dos fundos"}
                    </li>
                  </ul>
                </div>
              </div>
              {loading ? (
            <Button text="Realizando pedido" disabled />
          ) : (
          <Button text="Confirmar" />
          )}
          <Error error={error} />
            </form>
          </div>
        </div>
      </>
    );
};

export default Pedido;
