import React from "react";
import CartButton from "./CartButton";
import ModalProduto from "./ModalProduto";
import styles from "./ProdutoItem.module.scss";

const ProdutoItem = ({ array }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [cart, setCart] = React.useState([]);
  const [cartItens, setCartItens] = React.useState(0);
  
  function handleOpen(item) {
    console.log(item)
    if (item)
      setModalPhoto(item)
    
      return (
      <ModalProduto photo={modalPhoto}  setModalPhoto={setModalPhoto} />
    )
  }

  function addCartItem(item) {
    if (cart.length === 0) {
      cart[0] = item
      setCartItens(cartItens+ 1);
    } else {
      setCart([...cart,item])
      setCartItens(cartItens+ 1);
    }
    console.log("cart", cart)
    console.log("item", item)
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
              <div className={styles.moreDetails} onClick={() => handleOpen(item)} >
                <img src="assets/up.svg" alt="ver mais" />
              </div>
            </div>
            <button onClick={() => addCartItem(item)}>Adiconar ao carrinho</button>
          </div>
        </li>
      ))}

      {cartItens > 0 && <CartButton quantityItens={cart.length}>Ver Carrinho</CartButton>}

    </>
  );
};

export default ProdutoItem;
