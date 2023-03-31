import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import styles from './Checkout.module.css'
import { FaTrashAlt } from 'react-icons/fa'
export const Checkout = () => {

    const { items, removeFromCart, index } = useContext(CartContext);
    const total = items.reduce((acc, item) => acc + Number(item.price), 0);

    const handleRemoveClick = (index) => {
        removeFromCart(index);
    };

    const groups = items.reduce((acc, item) => {
        if (acc[item.id]) {
            acc[item.id].count++;
        } else {
            acc[item.id] = { ...item, count: 1 };
        }
        return acc;
    }, {});

    return (
        <div>
            <h2>Checkout</h2>
            {items.length === 0 ? (
                <h2>Your cart is empty</h2>
            ) : <div>
                <h2>Total: ${total.toFixed(2)}</h2>
                <div className='shopping-bag'>
                    {items.map((item) => (
                        <div className={styles.productItem} key={item.name + Math.random()}>
                            <div className={styles.gallery}>
                                <div className={styles.content}>
                                    <h3>{item.name}</h3>
                                    <img src={item.imageUrl} alt={item.name} />
                                    <h6>${item.price}</h6>
                                    <FaTrashAlt className={styles.removeBtn} onClick={() => handleRemoveClick(index)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            }
        </div>
    )
}
