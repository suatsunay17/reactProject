import styles from './ProductItem.module.css'
import { Link } from "react-router-dom";

export const ProductItem = ({
    _id, name, imageUrl, category, price, description
}) => {
    return (
        <div className={styles.productItem}>
            <div className={styles.gallery}>
                <div className={styles.content}>
                    <h3>{name}</h3>
                    <img src={imageUrl} alt={name} />
                    <p>{description}</p>
                    <h6>${price}</h6>
                    <button className={styles.buy}>Buy</button>
                    <Link to={`/catalog/${_id}`}>
                        <button className={styles.buy}>Details</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}


        // <section className={styles.products}>
        //     <div className={styles.productCard}>
        //         <div className={styles.productImage}>
        //             <img src={imageUrl} alt={name} />
        //         </div>
        //         <div className={styles.productInfo}>
        //             <h5>{name}</h5>
        //             <h6>Price: ${price}</h6>
        //             <button className={styles.buyButton}>Buy Now</button>

        //         </div>
        //     </div>
        // </section>
