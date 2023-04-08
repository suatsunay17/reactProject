import styles from './ProductItem.module.css'
import { Link } from "react-router-dom";
import { useState, useContext } from 'react'

import { CartContext } from '../../../contexts/CartContext'

export const ProductItem = ({
    _id, name, imageUrl, category, price, description
}) => {

    const { addToCart } = useContext(CartContext);


    return (
        <div className={styles.productItem}>
            <div className={styles.gallery}>
                <div className={styles.content}>
                    <h3>{name}</h3>
                    <img src={imageUrl} alt={name} />
                    <p>{description}</p>
                    <h6>${price}</h6>
                    <button onClick={()=>addToCart(name,price,imageUrl)} className={styles.buy}>Buy</button>
                    <Link to={`/catalog/${_id}`}>
                        <button className={styles.buy}>Details</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}