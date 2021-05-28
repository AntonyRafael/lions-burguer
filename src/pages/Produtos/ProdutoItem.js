import React from "react";
import { GlobalContext } from "../../CartContext";
import CartButton from "./CartButton";
import ModalProduto from "./ModalProduto";
import styles from "./ProdutoItem.module.scss";

const ProdutoItem = ({ array }) => {
  
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [cart, setCart] = React.useState([]);

  const [cartItens, setCartItens] = React.useState(0);

  const { cartContext, setCartContext } = React.useContext(GlobalContext);

  console.log("cartContext", cartContext);

  function handleOpen(item) {
    if (item) setModalPhoto(item);

    return <ModalProduto photo={modalPhoto} setModalPhoto={setModalPhoto} />;
  }

  function addCartItem(item) {
    if (cart.length === 0) {
      cart[0] = item;
      cartContext[0] = item;
      setCartItens(cartItens + 1);
    } else {
      setCart([...cart, item]);
      setCartContext([...cart, item])
      setCartItens(cartItens + 1);
    }
  }

  return (
    <>
      {modalPhoto && (
        <ModalProduto photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}

      {array.map((item, index) => (
        <li key={index}>
          <div className={styles.produtoItem}>
            <h1>{item.title}</h1>
            <div className={styles.imageItem}>
              <img src={item.image} alt={item.title} />
              <div
                className={styles.moreDetails}
                onClick={() => handleOpen(item)}
              >
                <img src="assets/up.svg" alt="ver mais" />
              </div>
            </div>
            <button onClick={() => addCartItem(item)}>
              Adiconar ao carrinho
            </button>
          </div>
        </li>
      ))}

      {cartItens > 0 && (
        <CartButton quantityItens={cart.length} items={cart}>
          Ver Carrinho
        </CartButton>
      )}
    </>
  );
};

export default ProdutoItem;
