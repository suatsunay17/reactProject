import styles from './Header.module.css'
import {FaShoppingCart} from 'react-icons/fa'

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <header>
            <h1><Link  to="/">PrintWorx</Link></h1>
            <nav className='nav'>
                <Link to="/catalog" className={styles.catalog}>All Products</Link>
                {isAuthenticated && (
                    <div id="user">
                        <span className={styles.span}>Logged in as: </span>
                        <span className={styles.userEmail}> {userEmail}</span>
                        <Link to="/create-product">Create Product</Link>
                        <Link to="/logout">Logout</Link>
                        <Link to ='/cart'><FaShoppingCart/> </Link>
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