import { useProductContext } from '../../contexts/productContext';
import { useForm } from '../../hooks/useForm';
import styles from './CreateProduct.module.css'

export const CreateProduct = () => {
    const {onCreateProductSubmit} = useProductContext()
    const { values, changeHandler, onSubmit } = useForm({
        name: '',
        category: '',
        price: '',
        imageUrl: '',
        description: '',
    }, onCreateProductSubmit);

    return (
        <div className={styles.container}>
            <form id="create" method="POST" onSubmit={onSubmit}>
                <h1>Create Product</h1>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label className={styles.label}>Product name:</label>
                    </div>
                    <div className={styles.col75}>
                        <input value={values.name} onChange={changeHandler} type="text" id="name" name="name" placeholder="Enter product name..." />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label className={styles.label}>Category:</label>
                    </div>
                    <div className={styles.col75}>
                        <input value={values.category} onChange={changeHandler} type="text" id="category" name="category" placeholder="Enter product category..." />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label className={styles.label}>Price:</label>
                    </div>
                    <div className={styles.col75}>
                        <input value={values.price} onChange={changeHandler} type="number" id="price" name="price" min="1" placeholder="1" />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label className={styles.label}>Image:</label>
                    </div>
                    <div className={styles.col75}>
                        <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col25}>
                        <label className={styles.label}>Description:</label>
                    </div>
                    <div className={styles.col75}>
                        <textarea name="description" id="description" value={values.description} onChange={changeHandler}></textarea>
                    </div>
                </div>
                <div className={styles.row}>
                    <input className="btn submit" type="submit" value="Create Product" />
                </div>
            </form >
        </div>
    );
};
