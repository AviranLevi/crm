import React, { Component } from 'react';

class HottestCountryBadge extends Component {
    render() {
        return (
            <div className="badge-box" id="new-client-badge">
                <div className="icon-box">
                    <i className="fas fa-globe-africa fa-4x" id="hottest-country-icon"></i>
                </div>
                <div className="badge-data">
                    <h3>{this.props.hottestCountry()}</h3>
                    <div>Hottest Country</div>
                </div>
            </div>
        )
    }
}

export default HottestCountryBadge