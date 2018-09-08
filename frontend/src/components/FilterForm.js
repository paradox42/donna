import React, { Component } from 'react';
// import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

class FilterForm extends Component {
    render() {
        return (
            <div className="filter-search">
                <div className="container">
                    <form className="filter-form">
                        <input type="text" placeholder="Enter a street name, address number or keyword" />
                        <select>
                            <option value="City">City</option>
                        </select>
                        <select>
                            <option value="City">State</option>
                        </select>
                        <button className="site-btn fs-submit">SEARCH</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default FilterForm;