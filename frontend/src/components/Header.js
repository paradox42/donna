import React, { Component } from 'react';
import Personal from './Personal';

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
                                    678-499-8846
						        </div>
                                <div className="top-info">
                                    <i className="fa fa-envelope"></i>
                                    place holder for email
						        </div>
                            </div>
                            <div className="col-lg-6 text-lg-right header-top-right">
                                <div className="user-panel">
                                    <a href="http://139.59.169.103:8090/registerv2" target="_blank"><i className="fa fa-user-circle-o"></i> Become My Client</a>
                                    <a href="http://139.59.169.103:8090/login" target="_blank"><i className="fa fa-sign-in"></i> Client Login</a>
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