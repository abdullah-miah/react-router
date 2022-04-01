import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1> Welcome to my website</h1>
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/about"> About</Link>
        </div>
    );
};

export default Header;