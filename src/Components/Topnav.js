/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useContext} from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import './style/Topnav.css';
import Cartitem from './Cartitem.js';
import { MainData } from '../App'

export default function Topnav() {
    const Data = useContext(MainData)
    const login = localStorage.getItem('login')
    const Navigate = useNavigate()
    const logout = () => {
        localStorage.setItem('login', false)
        Navigate('/login')
    }
    return (
        <div>
            {/* Offcanvas Menu */}
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close">
                        <span className="icon-close2 js-menu-toggle">
                            <i className="bi bi-x-lg"></i>
                        </span>
                    </div>
                </div>
                <div className="site-mobile-menu-body">
                    <div className="site-top-menu mt-2 pb-2 d-flex justify-content-end border-bottom border-dark">
                        <NavLink to="/orderhistory">
                            <span  className="btn rounded-circle py-2 mt-2 me-3 position-relative animate__animated" >
                                <i className="bi bi-clock-history" />
                                <span className="position-absolute top-badge start-100 translate-middle badge rounded-pill bg-primary" >
                                    0
                                </span>
                            </span>                            
                        </NavLink>

                        <NavLink to="/order">
                            <span  className="btn rounded-circle py-2 mt-2 position-relative animate__animated" >
                                <i className="bi bi-clipboard-data-fill" />
                                <span className="position-absolute top-badge start-100 translate-middle badge rounded-pill bg-primary" >
                                    0
                                </span>
                            </span>
                        </NavLink>
                    </div>
                    <ul className="site-nav-wrap">
                        <li>
                            <NavLink to="/contactus" className="nav-link">Contact us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutus" className="nav-link">About Us</NavLink>
                        </li>
                        <li>
                            {
                                login === 'true'? 
                                <a onClick={() => logout()} className="nav-link">Logout</a>
                                    :
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                            }
                        </li>
                    </ul>
                </div>
            </div>
            {/* ./Offcanvas Menu */}

            {/* Offcanvas Menu for cart */}
            <div className="site-mobile-menu-cart site-navbar-target">
                <div className="site-mobile-menu-cart-body position-relative">
                    <div className="cart-top-summ d-flex p-2 align-items-center justify-content-between">
                        <h5>
                            <i className="bi bi-cart2" /> Cart
                        </h5>
                        <div className="d-flex">
                            <span className="me-2">
                                <span className="text-muted">Items:</span>
                                <span className="text-primary">0</span>
                            </span>
                            <div className="site-mobile-menu-cart-close js-menu-toggle-cart">
                                <span className="icon-close2 ">
                                    <i className="bi bi-x-lg"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="cart-body ">
                        <div className="container-fluid">
                            <Cartitem />
                        </div>
                    </div>
                    <div className="site-cart-footer d-flex justify-content-between align-items-center">
                        <span>
                            <span className="text-muted">Total:</span>
                            <span className="text-primary">$0</span>
                        </span>
                        <button className="btn btn-success rounded-pill ">Place</button>
                    </div>
                </div>
            </div>
            {/* ./Offcanvas Menu for cart */}

            {/* Top nav Bar */}
            <header className="site-navbar site-navbar-target" role={"banner"}>
                <div className="container-fluid">
                    <div className="row align-items-center position-relative">
                        <div className="col-md-2 col-4 text-center d-flex justify-content-between">
                            <div className="site-logo ms-md-4">
                                <NavLink to="/" className="nav-link">Brand</NavLink>
                            </div>
                        </div>
                        <div className="col-md-10 col-8 d-flex justify-content-between">
                            <nav
                                className="site-navigation text-right ml-auto d-flex align-items-center"
                                role={"navigation"}
                            >
                                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-md-block">
                                    <li className="">
                                        <NavLink to="/" className="nav-link"> <span>Home</span></NavLink>
                                    </li>
                                    <li className="">
                                        <NavLink to="/order" className="nav-link"> <span>Order</span></NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="nav-link" to="/orderhistory"> <span>Order History</span> </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contactus" className="nav-link"> <span>Contact Us</span> </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/aboutus" className="nav-link"><span>About Us</span></NavLink>
                                    </li>
                                    <li>
                                        {
                                            login === 'true'?
                                            <a onClick={() => logout()} className="nav-link"><span>Logout</span></a>
                                                :
                                            <NavLink to="/login" className="nav-link"><span>Login</span></NavLink>

                                        }
                                    </li>
                                </ul>
                            </nav>
                            <div className="search_wrapper position-relative">
                                <input
                                    type="text"
                                    // onFocus={"show_suggestion(this)"}
                                    className="form-control form-control-dark"
                                    id="search"
                                    placeholder="Search..."
                                    aria-label="Search"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* ./Top nav bar */}

            {/* Toggle Buttons for offcanvas */}
            <div className="ml-auto toggle-button d-inline-block d-md-none">
                <a  className="site-menu-toggle py-5 js-menu-toggle text-black">
                    <span className="icon-toggler spin h3 text-black">
                        <i className="bi bi-gear-fill" />
                    </span>
                </a>
            </div>
            <div className="ml-auto toggle-button-cart d-inline-block d-md-none">
                <a
                    
                    className="site-menu-toggle py-5 js-menu-toggle-cart text-black"
                >
                    <span className="icon-toggler text-black position-relative">
                        <i className="bi bi-cart2" ></i>
                        <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill">
                            {Data.cart.length}
                        </span>
                    </span>
                </a>
            </div>
            {/* ./Toggle Buttons for offcanvas */}

        </div>
    )
}
