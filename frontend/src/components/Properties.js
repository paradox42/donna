import React, { Component } from 'react';

class Properties extends Component {
    render() {
        return (
            <section className="properties-section spad">
                <div className="container">
                    <div className="section-title text-center">
                        <h3>RECENT PROPERTIES</h3>
                        <p>Discover how much the latest properties have been sold for</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="propertie-item set-bg" data-setbg="img/propertie/1.jpg">
                                <div className="sale-notic">FOR SALE</div>
                                <div className="propertie-info text-white">
                                    <div className="info-warp">
                                        <h5>176 Kingsberry, Dr Anderson</h5>
                                        <p><i className="fa fa-map-marker"></i> Rochester, NY 14626</p>
                                    </div>
                                    <div className="price">$1,777,000</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="propertie-item set-bg" data-setbg="img/propertie/2.jpg">
                                <div className="rent-notic">FOR Rent</div>
                                <div className="propertie-info text-white">
                                    <div className="info-warp">
                                        <h5>45 Lianne Dr, Greece Street</h5>
                                        <p><i className="fa fa-map-marker"></i> Tasley, VA 23441</p>
                                    </div>
                                    <div className="price">$1255/month</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="propertie-item set-bg" data-setbg="img/propertie/3.jpg">
                                <div className="sale-notic">FOR SALE</div>
                                <div className="propertie-info text-white">
                                    <div className="info-warp">
                                        <h5>6101 Aqua Ave Apt 603</h5>
                                        <p><i className="fa fa-map-marker"></i> Miami Beach, FL 33141</p>
                                    </div>
                                    <div className="price">$150,000</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="propertie-item set-bg" data-setbg="img/propertie/4.jpg">
                                <div className="rent-notic">FOR Rent</div>
                                <div className="propertie-info text-white">
                                    <div className="info-warp">
                                        <h5>339 N Oakhurst Dr Apt 303</h5>
                                        <p><i className="fa fa-map-marker"></i> Beverly Hills, CA 90210</p>
                                    </div>
                                    <div className="price">$3000/month</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Properties;