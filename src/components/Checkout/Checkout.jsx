import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import styles from './Checkout.module.css'

export const Checkout = () => {

    const {items} = useContext(CartContext);

    return (
        <div>
            <h2>Checkout</h2>
            <div className='shopping-bag'>
                {items.map((item) => (
                     <div className={styles.productItem} key={item.name}>
            <div className={styles.gallery}>
                <div className={styles.content}>
                    <h3>{item.name}</h3>
                    <img src={item.imageUrl} alt={item.name} />
                    <h6>${item.price}</h6>
                </div>

            </div>
        </div>
                ))}
            </div>
        </div>
    )
}