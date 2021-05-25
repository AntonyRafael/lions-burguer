import React from 'react'
import styles from './ModalProduto.module.scss'

const ModalProduto = ({photo, setModalPhoto}) => {
    console.log("setModalPhoto", setModalPhoto)
    console.log("photo", photo)

    function hadnleOutsideClick({ target, currentTarget}) {
        console.log("targert",target)
        console.log("currentTarget",currentTarget)
        if (target === currentTarget) setModalPhoto(null);
    }

    return (
        <div className={styles.modalPhoto} >
            <div className={styles.modalImage}>
                <img src={photo.image} alt={photo.title} />
            </div>

            <div className={styles.modalDetails}>
                <div className={styles.close} onClick={hadnleOutsideClick}></div>
                <h1>{photo.title}</h1>
                <p>{photo.description}</p>
                <span>R$ {photo.price}</span>
            </div>
        </div>
    )
}

export default ModalProduto
