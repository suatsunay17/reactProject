import styles from './ProductDetails.module.css';
import { useEffect, useReducer } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'

import { productServiceFactory } from '../../services/productService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';
import { productReducer } from '../../reducers/productReducer';
import * as commentService from '../../services/commentService';

import { AddComment } from './AddComment/AddComment';

export const ProductDetails = () => {
    const { productId } = useParams();
    const { userId, isAuthenticated, userEmail } = useAuthContext();
    const [product, dispatch] = useReducer(productReducer, {});
    const productService = useService(productServiceFactory)
    const navigate = useNavigate();
    // const [username, setUsername] = useState('');
    // const [comment, setComment] = useState('');
    // const [product, setProduct] = useState({});

    useEffect(() => {
        Promise.all([
            productService.getOne(productId),
            commentService.getAll(productId),
        ]).then(([productData, comments]) => {
            const productState = {
                ...productData,
                comments,
            };
            dispatch({ type: 'PRODUCT_FETCH', payload: productState })
        })
        //     productService.getOne(productId)
        //         .then(result => {
        //             setProduct(result);
        //         })
        // 
    }, [productId]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(productId, values.comment);

        dispatch({
            type: 'COMMENT_ADD',
            payload: response,
            userEmail
        })

        // setProduct(state => ({ ...state, comments: { ...state.comments, [result._id]: result } }));
        // setUsername('');
        // setComment('');
    };

    const isOwner = product._ownerId === userId;

    const onDeleteClick = async () => {

        const toDelete = product._id
        await productService.delete(toDelete);


        // setProduct((product) => {
        //     return product.filter(x => x._id !== toDelete)
        // })

        // TODO: delete from state


        navigate('/catalog');
    };

    return (

            <div className={styles.card}>
                <nav className={styles.productNav}><FaArrowLeft className={styles.backBtn} onClick={() => navigate(-1)} />
                    Back to All Products
                </nav>
                <div className={styles.photo}>
                    <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className={styles.description}>
                    <h2>{product.name}</h2>
                    <h4>Filament: {product.category}</h4>
                    <h1>${product.price}</h1>
                    <p>{product.description}</p>
                    <button>Add to Cart</button>

                    {isOwner && (
                        <div>
                            <Link to={`/catalog/${product._id}/edit`}> <button>Edit</button></Link>
                            <button className={styles.deleteButton} onClick={onDeleteClick}>Delete</button>
                        </div>
                    )}
                </div>

                <div className={styles.commentSection}>
                    <h2>Comments:</h2>
                    <ul>
                        {product.comments && product.comments.map(x => (
                            <li key={x._id} className={styles.comment}>
                                <p>{x.author.email}: {x.comment}</p>
                            </li>
                        ))}
                    </ul>

                    {!product.comments?.length && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

                {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
            </div>
    );
};