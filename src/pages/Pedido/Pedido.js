import React from "react";
import { GlobalContext } from "../../CartContext";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import TextArea from "../../Components/TextArea/TextArea";
import useForm from "../../Hooks/useForm";
import styles from "./Pedido.module.scss";

const Pedido = () => {
  const { cartContext /*setCartContext*/ } = React.useContext(GlobalContext);

  const [radio, setRadio] = React.useState("cartao");

  const [tipoCartao, setTipoCartao] = React.useState("debito");

  const [totalCart, setTotalCart] = React.useState(0);
  const [troco, setTroco] = React.useState(0);

  const dinheiroPagamento = useForm();
  const observacoesPedido = useForm();
  let trocoPayment = React.useRef();

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

          <div className={styles.orderObs}>
            <TextArea
              label="Observações do pedido "
              type="text"
              name="dinheiro"
              placeholder="sem tomate..."
              {...observacoesPedido}
            />
          </div>
        </div>

        <div className={styles.orderSummary}>
          <div>
            <div className={styles.orderHeader}>
              <p>Pedido - #{cartContext.length}</p>
              <img src="assets/LionIco.png" alt="Icone lion" />
            </div>
            <div className={styles.orderDetails}>
              <p>Resumo do pedido: </p>
              <ul>
                {cartContext.map((item, index) => (
                  <li key={index}>- {item.title}</li>
                ))}
              </ul>
              {observacoesPedido.value && (
                <>
                  <p>Observações: </p>
                  <span style={{ maxWidth: "20rem", wordBreak: " break-word" }}>
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
                <li>- Comprador: Nome do cliente zica</li>
                <li>- Entrega: 30 a 60 min</li>
                <li>- Rua Logo alí, nº 654 Bairro: já ta chegando</li>
                <li>- Contagem - MG</li>
                <li>- Apartamento to morando po Bloco 7</li>
              </ul>
            </div>
          </div>
          <Button text="Confirmar"></Button>
        </div>
      </div>
    </>
  );
};

export default Pedido;
