import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../buttons/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to="/" className="navbar__link">Home</Link>
                <Link to="/posts" className="navbar__link">Posts</Link>
                <Link to="/about" className="navbar__link">About</Link>
                <MyButton onClick={logout}>Log out</MyButton>
            </div>
        </div>
    );
};

export default Navbar;