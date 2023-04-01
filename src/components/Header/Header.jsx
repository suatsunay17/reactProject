import styles from './Header.module.css'
import { FaShoppingCart } from 'react-icons/fa'

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';
export const Header = () => {

    const { isAuthenticated, userEmail } = useContext(AuthContext);

    const { items } = useContext(CartContext);

    return (
        <header>
            <h1><Link to="/">Printopia</Link></h1>
            <nav className='nav'>
                <Link to="/catalog" className={styles.catalog}>All Products</Link>
                {isAuthenticated && (
                    <div id="user">
                        <span className={styles.span}>Logged in as: </span>
                        <span className={styles.userEmail}> {userEmail}</span>
                        <Link to="/create-product">Create Product</Link>
                        <Link to="/logout">Logout</Link>
                        <Link to='/checkout'><FaShoppingCart />{items.length} </Link>
                    </div>
                )}

                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
};