import React from 'react'
import styles from "./Perfil.module.scss";

const PerfilItem = ({item}) => {
    return (
        <div className={styles.orderItem}>
            <p>Cliente: {item.author}</p>
            <p>Pedido: {item.numPedido}</p>
            <p>Itens: {item.itens}</p>
            <p>Quantidade: {item.qtdItens}</p>
            <p>Data: {item.date}</p>
            <p>Valor itens: R$ {item.subTotal}</p>
            <p>Frete: R$ {item.frete}.00</p>
            <p>Valor total: R$ {item.precoTotal}</p>
            <p>Forma pagamento: {item.formaPagamento}</p>
            <p>Rua: {item.rua}</p>
            <p>Bairro: {item.bairro}</p>
            <p>Nº: {item.numero} | Estado: {item.estado}</p>
            <p>Complemento: {item.complemento}</p>
            
        </div>
    )
}

export default PerfilItem
