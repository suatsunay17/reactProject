import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../contexts/productContext";
import styles from './EditProduct.module.css'

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { productServiceFactory } from "../../services/productService";

export const EditProduct = () => {
    const { onProductEditSubmit } = useProductContext()
    const { productId } = useParams();
    const productService = useService(productServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        name: '',
        category: '',
        price: '',
        imageUrl: '',
        description: '',
    }, onProductEditSubmit);

    useEffect(() => {
        productService.getOne(productId)
            .then(result => {
                changeValues(result)
            })
    }, [productId])


    return (
        <div>
            <h2 className={styles.h2}>Edit Product</h2>
            <form id="edit" method="POST" onSubmit={onSubmit}>
                <div className={styles.loginForm}>

                    <label >Product name:</label>
                    <input className={styles.Uname}
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={changeHandler}
                    />

                    <label >Category:</label>
                    <input className={styles.Uname}
                        type="text"
                        id="category"
                        name="category"
                        value={values.category}
                        onChange={changeHandler}
                    />

                    <label >Price:</label>
                    <input className={styles.Uname}
                        type="number"
                        id="price"
                        name="price"
                        min="1"
                        value={values.price}
                        onChange={changeHandler}
                    />

                    <label>Image:</label>
                    <input className={styles.Uname}
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                    />

                    <label >Description:</label>
                    <textarea name="description" id="description" value={values.description} onChange={changeHandler}></textarea>
                    <input className={styles.log} type="submit" value="Edit Product" />

                </div>
            </form>
        </div>

    );
};