/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import style from './Navbar.module.css';
import logo from '../../assets/images/logo.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { CartContext } from '../../Context/CartContext';


export default function Navbar() {
    useEffect(() => { }, []);
    let navigate = useNavigate();
    let { userLogin, setUserLogin } = useContext(UserContext);
    let { Cart } = useContext(CartContext);
    // console.log(Cart);

    function LogOut() {
        localStorage.removeItem('userToken');
        setUserLogin(null);
        navigate('/Login')
    }

    const navLinkClass = ({ isActive }) =>
    `nav-link ${isActive
        ? "text-green-600 after:w-full"
        : "text-slate-700 after:w-0"
    }`;
    return (
        <>
<nav className="bg-white/95 backdrop-blur-md w-full z-50 text-center lg:fixed top-0 left-0 right-0 shadow-md border-b border-gray-100">
<div className="container mx-auto px-4 py-2 flex flex-col lg:flex-row items-center justify-between gap-4">
    <div className="flex flex-col lg:flex-row items-center gap-6">
        <img width={110} src={logo} alt="fresh cart logo" className="object-contain" />
        <ul className="flex flex-col lg:flex-row items-center gap-1">
            {userLogin !== null ? ( 
                <>
                    <li><NavLink className={navLinkClass}to="">Home</NavLink></li>
                    <li><NavLink className={navLinkClass}to="Products">Products</NavLink></li> 
                    <li><NavLink className={navLinkClass}to="Cart">Cart</NavLink></li>
                    <li><NavLink className={navLinkClass}to="Brands">Brands</NavLink></li>
                    <li><NavLink className={navLinkClass}to="Categories">Categories</NavLink></li>
                </>
            ) : null}
        </ul>
</div>

<div>
    <ul className="flex flex-col lg:flex-row items-center gap-3">
        {userLogin === null ? (
            <>
                <li><NavLink className="login-link" to="Login">Login</NavLink> </li>
                <li><NavLink className="register-link" to="Register">Register</NavLink></li>                
            </>) 
            : 
            (<>
                <li>
                <NavLink to="/Cart" className="cart-link"><i className="fa-solid fa-cart-shopping"></i>
                    <span className="cart-badge">{Cart && Cart.numOfCartItems? Cart.numOfCartItems : 0}</span>
                </NavLink>        
                </li>    
                <li onClick={LogOut} className="logout-link"><span> Logout</span> </li>  
                
            </>
    )}

                    <li className="flex items-center gap-3 border-t lg:border-t-0 lg:border-l border-gray-200 pt-3 lg:pt-0 lg:pl-4">
                                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"
                                    className="text-slate-500 transition-all duration-300 hover:text-blue-600 hover:scale-110" >
                                    <i className="fab fa-facebook text-lg"></i>
                                </a>

                                <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"
                                    className="text-slate-500 transition-all duration-300 hover:text-sky-500 hover:scale-110">
                                    <i className="fab fa-twitter text-lg"></i>
                                </a>

                                <a href="http://www.instagram.com"target="_blank" rel="noopener noreferrer"
                                    className="text-slate-500 transition-all duration-300 hover:text-pink-600 hover:scale-110">
                                    <i className="fab fa-instagram text-lg"></i>
                                </a>

                                <a href="http://www.youtube.com"target="_blank" rel="noopener noreferrer"
                                    className="text-slate-500 transition-all duration-300 hover:text-red-600 hover:scale-110">
                                    <i className="fab fa-youtube text-lg"></i>
                                </a>

                                <a href="http://www.tiktok.com"target="_blank" rel="noopener noreferrer"
                                    className="text-slate-500 transition-all duration-300 hover:tikto hover:text-black hover:scale-110">
                                    <i className="fab fa-tiktok text-lg"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
