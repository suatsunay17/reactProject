import React, { useState, useEffect } from 'react';
import styles from './LatestProducts.module.css'

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const baseUrl = 'http://localhost:3030/data/products'


  useEffect(() => {
    // fetch latest products data from server
    fetch(`${baseUrl}?sortBy=_createdOn%20desc`)
      .then(response => response.json())
      .then(data => setProducts(data.slice(0, 3)))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles.latestProductsContainer}>
      <h2 className={styles.latestProductsTitle}>Latest Products</h2>
      <ul className={styles.latestProductsList}>
        {products.map(product => (
          <li key={product._id} className={styles.latestProductsItem}>
            <h3 className={styles.h3}>{product.name}</h3>
            <img src={product.imageUrl} className={styles.img} />
          </li>
        )
        )}
      </ul>
      {products.length === 0 && (
        <>
          <h3 className={styles.noContent}>No products yet.</h3>
        </>
      )}
    </div>
  );
};

export default LatestProducts;
