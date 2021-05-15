import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import styles from './page404.module.scss'

const page404 = () => {
    return (
        <>
            <Header />
            <div className={styles.notFound + " container animeLeft"}>
                <h1>Parece que voce foi além da fronteira !</h1>
                <Link to={"/"}>Voltar para home ←</Link>
                <img src="assets/mufasa-simba.png" alt="Rei leão"/>
            </div>
            <Footer />
        </>
    )
}

export default page404;
