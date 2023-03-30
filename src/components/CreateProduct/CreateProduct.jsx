import { useProductContext } from '../../contexts/productContext';
import { useForm } from '../../hooks/useForm';
import styles from './CreateProduct.module.css'

export const CreateProduct = () => {
    const { onCreateProductSubmit } = useProductContext()
    const { values, changeHandler, onSubmit } = useForm({
        name: '',
        category: '',
        price: '',
        imageUrl: '',
        description: '',
    }, onCreateProductSubmit);

    return (
        <div>
            <h2 className={styles.h2}>Create Product</h2><br />
            <div className={styles.loginForm}>
                <form method="POST" onSubmit={onSubmit}>
                    <label>Product Name:</label>
                    <input className={styles.Uname} type="text" id='name' name='name' placeholder="Product Name" value={values.name} onChange={changeHandler} />
                    <br /><br />
                    <label>Filament type:</label>
                    <input className={styles.Uname} type="text" id='category' name='category' placeholder='PLA/PETG/TPU/ABS' value={values.category} onChange={changeHandler} />
                    <br /><br />
                    <label>Price: </label>
                    <input className={styles.Uname} type="number" value={values.price} onChange={changeHandler} id='price' name='price' min='1' placeholder='1' />
                    <br /><br />
                    <label>Image URL:</label>
                    <input className={styles.Uname} type="text" id='imageUrl' name='imageUrl' value={values.imageUrl} onChange={changeHandler} />
                    <br /><br />
                    <label>Description:</label>
                    <textarea value={values.description} onChange={changeHandler} name="description" id="description" cols="30" rows="5"></textarea>
                    <br /><br />
                    <input type="submit" name="log" className={styles.log} value="Create Product" />
                    <br /><br />
                </form>
            </div>
        </div>
    );
};
