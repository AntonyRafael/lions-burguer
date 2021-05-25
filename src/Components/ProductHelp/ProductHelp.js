import React from 'react'
import HelpItem from './HelpItem'
import styles from './ProductHelp.module.scss'

const ProductHelp = () => {
    return (
        <section className={styles.ProductHelp}>
            <HelpItem image="assets/up.svg" alt="Scroll Up" />
            <HelpItem image="assets/cart.svg" alt="Carrinho"/>
        </section>
    )
}

export default ProductHelp
