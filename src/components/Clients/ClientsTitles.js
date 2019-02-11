import React, { Component } from 'react';

class ClientsTitles extends Component { // Use functional coomponent
    render() {
        return (
            <div id="table-titles" >
                <div className="clients-titles">Name</div>
                <div className="clients-titles">Surname</div>
                <div className="clients-titles">Country</div>
                <div className="clients-titles">First Contact</div>
                <div className="clients-titles">Email</div>
                <div className="clients-titles">Sold</div>
                <div className="clients-titles">Owner</div>
            </div>
        )
    }
}

export default ClientsTitles