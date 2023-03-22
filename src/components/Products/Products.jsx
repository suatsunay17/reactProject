import React from "react";
import { ProductItem } from "./ProductItem/ProductItem";

const Products = ({ products }) => {

  return(
    <section id="catalog-page">
      <h1>All products</h1>

      {products.map(x=>
        <ProductItem key={x._id} {...x} />
        )}

        {products.length === 0 && (<h3 className="no-articles">No articles yet</h3>)}
    </section>
  )
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
}


export default Products;

