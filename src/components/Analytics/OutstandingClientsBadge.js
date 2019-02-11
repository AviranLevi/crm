import React, { Component } from 'react';

class OutstandingClientsBadge extends Component {
    render() {
        return (
            <div className="badge-box" id="new-client-badge">
                <div className="icon-box">
                    <i className="fas fa-user-circle fa-4x badges-icons" id="outstanding-clients-icon"></i>
                </div>
                <div className="badge-data">
                    <h3>{this.props.getOutstandingClients()}</h3>
                    <div>Outstanding Clients</div>
                </div>
            </div>
        )
    }
}

export default OutstandingClientsBadge