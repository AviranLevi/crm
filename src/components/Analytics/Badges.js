import React, { Component } from 'react';
import NewClientBadge from './NewClientBadge'
import EmailSentBadge from './EmailSentBadge'
import OutStandingBadge from './OutstandingClientsBadge'
import HottestCountryBadge from './HottestCountryBadge'

class Badges extends Component {
    render() {
        return (
            <div id="badges">
                <NewClientBadge getNewClients={this.props.getNewClients} />
                <EmailSentBadge getEmails={this.props.getEmails} />
                <OutStandingBadge getOutstandingClients={this.props.getOutstandingClients} />
                <HottestCountryBadge hottestCountry={this.props.hottestCountry} />
            </div>
        )
    }
}

export default Badges