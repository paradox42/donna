import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header-section">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 header-top-left">
                                <div className="top-info">
                                    <i className="fa fa-phone"></i>
                                    (+88) 666 121 4321
						        </div>
                                <div className="top-info">
                                    <i className="fa fa-envelope"></i>
                                    info.leramiz@colorlib.com
						        </div>
                            </div>
                            <div className="col-lg-6 text-lg-right header-top-right">
                                <div className="top-social">
                                    <a href=""><i className="fa fa-facebook"></i></a>
                                    <a href=""><i className="fa fa-twitter"></i></a>
                                    <a href=""><i className="fa fa-instagram"></i></a>
                                    <a href=""><i className="fa fa-pinterest"></i></a>
                                    <a href=""><i className="fa fa-linkedin"></i></a>
                                </div>
                                <div className="user-panel">
                                    <a href=""><i className="fa fa-user-circle-o"></i> Register</a>
                                    <a href=""><i className="fa fa-sign-in"></i> Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="site-navbar">
                                <a href="/" className="site-logo"><img src="img/logo.png" alt="" /></a>
                                <div className="nav-switch">
                                    <i className="fa fa-bars"></i>
                                </div>
                                <ul className="main-menu">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="categories.html">FEATURED LISTING</a></li>
                                    <li><a href="about.html">ABOUT US</a></li>
                                    <li><a href="single-list.html">Pages</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;