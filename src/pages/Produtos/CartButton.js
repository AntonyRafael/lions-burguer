import React from 'react'
import styles from './CartButton.module.scss'

const CartButton = ({quantityItens,children}) => {
    return (
        <button className={styles.btnProduct + " animeLeft"}>
            {children}
            <span>{quantityItens}</span>
        </button>
    )
}

export default CartButton
