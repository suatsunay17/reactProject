import React from "react";
import { useProductContext } from "../../contexts/productContext";
import { ProductItem } from "./ProductItem/ProductItem";
import styles from './Products.module.css'

const Products = () => {

  const { products } = useProductContext()
  return (
    <section className={styles.section}>

      <h1 className={styles.h1}>All Products</h1>
      <div>

        {products.map(x =>
          <ProductItem key={x._id} {...x} />
        )}

        {products.length === 0 && (
          <>
            <h3>No articles yet.</h3>
          </>
        )}
      </div>
    </section>
  )
}

export default Products;

