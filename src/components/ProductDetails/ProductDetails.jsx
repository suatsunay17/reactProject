import styles from './ProductDetails.module.css'
import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { productServiceFactory } from '../../services/productService';
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';

export const ProductDetails = () => {
    const { userId } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const productService = useService(productServiceFactory)
    const navigate = useNavigate();

    useEffect(() => {
        productService.getOne(productId)
            .then(result => {
                setProduct(result);
            })
    }, [productId]);

    const onCommentSubmit = async (e) => {
        e.preventDefault();

        const result = await productService.addComment(productId, {
            username,
            comment,
        });

        setProduct(state => ({ ...state, comments: { ...state.comments, [result._id]: result } }));
        setUsername('');
        setComment('');
    };

    const isOwner = product._ownerId === userId;

    const onDeleteClick = async () => {
        await productService.delete(product._id);

        // TODO: delete from state

        navigate('/catalog');
    };

    return (
        <div className={styles.productDetail}>
        <h1 className={styles.productTitle}>{product.name}</h1>
        <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>${product.price}</p>
        <button className={styles.productButton}>Add to Cart</button>
        {isOwner && (
                    <div>
                        <Link to={`/catalog/${product._id}/edit`} className={styles.productButton}>Edit</Link>
                        <button className={styles.deleteButton} onClick={onDeleteClick}>Delete</button>
                    </div>
                )}
      </div>
    );
};