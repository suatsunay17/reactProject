import styles from './Header.module.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <header>
            <h1><Link  to="/">PrintWorx</Link></h1>
            <nav className='nav'>
                <Link to="/catalog">All products</Link>
                {isAuthenticated && (
                    <div id="user">
                        <span>{userEmail}</span>
                        <Link to="/create-product">Create Product</Link>
                        <Link to="/logout">Logout</Link>
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