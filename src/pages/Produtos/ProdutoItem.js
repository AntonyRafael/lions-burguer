import React from "react";
import ModalProduto from "./ModalProduto";
import styles from "./ProdutoItem.module.scss";

const ProdutoItem = ({ array }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  function handleOpen(item) {
    console.log(item)
    if (item)
      setModalPhoto(item)
    
      return (
      <ModalProduto photo={modalPhoto}  setModalPhoto={setModalPhoto} />
    )
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
            <button>Adiconar ao carrinho</button>
          </div>
        </li>
      ))}
    </>
  );
};

export default ProdutoItem;
