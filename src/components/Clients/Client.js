import React, { Component } from 'react';
import Moment from 'react-moment'

class Client extends Component {
    popup = () => this.props.popup(this.props.user._id)

    render() {
        let d = this.props.user
        return (
            <div id="clients-table" onClick={this.popup} >
                <div>{d.name}</div>
                <div>{d.surname}</div>
                <div>{d.country}</div>
                <div><Moment format="YYYY/MM/DD">{d.firstContact}</Moment></div>
                <div>{d.emailType}</div>
                {d.sold ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}
                <div>{d.owner}</div>
            </div>
        )
    }
}

export default Client