import React, { Component } from 'react';
import moment from 'moment'

class NewClientBadge extends Component {
    render() {
        let currentMonth = moment().format("MMMM")

        return (
            <div className="badge-box" id="new-client-badge">
                <div className="icon-box">
                    <i className="fas fa-chart-line fa-4x" id="new-client-icon"></i>
                </div>
                <div className="badge-data">
                    <h3>{this.props.getNewClients()}</h3>
                    <div>New {currentMonth} Clients</div>
                </div>
            </div>
        )
    }
}

export default NewClientBadge