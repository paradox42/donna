import React, { Component } from 'react';
import Personal from './Personal';

class Hero extends Component {
    render() {
        return (
            <section className="hero-section set-bg" data-setbg="img/bg.jpg">
                <div className="container hero-text text-white">
                    <h2>find your place with our local life style</h2>
                    <p>Search real estate property records, houses, condos, land and more on leramiz.com®.<br />
                    Find property info from the most comprehensive source data.</p>
                    {/* <a href="/" className="site-btn">VIEW DETAIL</a> */}
                </div>
                <Personal></Personal>
            </section>
        );
    }
}

export default Hero;