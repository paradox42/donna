import React, { Component } from 'react';
import './css/Personal.css';

class Personal extends Component {
    render() {
        return (
            <div className="card flex-row flex-wrap">
                <img className="card-header border-0" src="img/profile.jpg" alt="Card image" />
                <div className="card-block px-2">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Description</p>
                    <a href="#" className="btn btn-primary">BUTTON</a>
                </div>
                <div className="w-100"></div>
            </div>
        );
    }
}

export default Personal;