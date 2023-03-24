import React from "react";
import { ProductItem } from "./ProductItem/ProductItem";
import styles from './Products.module.css'

const Products = ({ products, }) => {

  return (
    <section className={styles.section}>

      <h1 className={styles.h1}>All Products</h1>
      <div>

        {products.map(x =>
          <ProductItem key={x._id} {...x} />
        )}

        {products.length === 0 && (<h3>No articles yet</h3>)}
      </div>
    </section>
  )
}
  // if (products) {

  //   return products.map(x => {
  //     return (
  //       <div className="row product">
  //         <div className="col-md-2">
  //           <img src={x.imageUrl} height="150" />
  //         </div>
  //         <div className="col-md-8 product-detail">
  //           <h4>{x.name}</h4>
  //           <p>{x.description}</p>
  //         </div>
  //           <div className="col-md-2 product-price">
  //            ${x.price}
  //           </div>
  //       </div>
  //     )
  //   })
  // }else{
  //   return (
  //     <div>
  //       <h2>No products yet</h2>
  //     </div>
  //   )
  // }


export default Products;

