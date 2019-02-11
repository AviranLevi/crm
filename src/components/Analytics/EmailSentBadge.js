import React, { Component } from 'react';

class EmailSentBadge extends Component {
    render() {
        return (
            <div className="badge-box" id="new-client-badge">
                <div className="icon-box">
                    <i className="fas fa-envelope fa-4x" id="emails-sent-icon"></i>
                </div>
                <div className="badge-data">
                    <h3>{this.props.getEmails()}</h3>
                    <div>Emails Sent</div>
                </div>
            </div>
        )
    }
}

export default EmailSentBadge