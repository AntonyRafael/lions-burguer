import React from "react";
import { GlobalContext } from "../../CartContext";
import Header from "../../Components/Header/Header";

const Pedido = () => {
  const { cartContext, /*setCartContext*/ } = React.useContext(GlobalContext);

  return (
    <>
      <Header />;
      {cartContext.map((item) => (
          <p>{item.title}</p>
      ))}
    </>
  );
};

export default Pedido;
