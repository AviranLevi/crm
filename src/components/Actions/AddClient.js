import React, { Component } from 'react';

class AddClient extends Component {
    render() {
        return (
            <div id="add-client-box">
                <h2>ADD CLIENT</h2>

                <div className="client-information">
                    <div>First Name:</div>
                    <input name="name" onChange={this.props.inputChange} value={this.props.name} placeholder="First Name"></input>
                </div>

                <div className="client-information">
                    <div>Surname:</div>
                    <input name="surname" value={this.props.surname} onChange={this.props.inputChange} placeholder="Surname"></input>
                </div>

                <div className="client-information">
                    <div>Country:</div>
                    <input name="country" value={this.props.country} onChange={this.props.inputChange} placeholder="Country"></input>
                </div>

                <div className="client-information">
                    <div>Owner:</div>
                    <input name="owner" value={this.props.owner} onChange={this.props.inputChange} placeholder="Owner"></input>
                </div>
                <button onClick={this.props.addClient}>ADD NEW CLIENT</button>
            </div>
        )
    }
}

export default AddClient