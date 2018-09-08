import React, { Component } from 'react';
class Services extends Component {
    render() {
        return (
            <section className="services-section spad set-bg" data-setbg="img/service-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="img/service.jpg" alt="" />
                        </div>
                        <div className="col-lg-5 offset-lg-1 pl-lg-0">
                            <div className="section-title text-white">
                                <h3>OUR SERVICES</h3>
                                <p>We provide the perfect service for </p>
                            </div>
                            <div className="services">
                                <div className="service-item">
                                    <i className="fa fa-comments"></i>
                                    <div className="service-text">
                                        <h5>Consultant Service</h5>
                                        <p>In Aenean purus, pretium sito amet sapien denim consectet sed urna placerat sodales magna leo.</p>
                                    </div>
                                </div>
                                <div className="service-item">
                                    <i className="fa fa-home"></i>
                                    <div className="service-text">
                                        <h5>Properties Management</h5>
                                        <p>In Aenean purus, pretium sito amet sapien denim consectet sed urna placerat sodales magna leo.</p>
                                    </div>
                                </div>
                                <div className="service-item">
                                    <i className="fa fa-briefcase"></i>
                                    <div className="service-text">
                                        <h5>Renting and Selling</h5>
                                        <p>In Aenean purus, pretium sito amet sapien denim consectet sed urna placerat sodales magna leo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;