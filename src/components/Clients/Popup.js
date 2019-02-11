import React, { Component } from 'react';

class Popup extends Component {
    render() {
        let current = this.props.current
        return (
            <div id="popup-box">
                <button onClick={this.props.closePopup}>x</button>
                <h2>Edit Client</h2>
                <div id="input-box">
                    <div>Name</div>
                    <input name="name" value={current.name} onChange={this.props.inputChange} placeholder="Name"></input>
                    <div>Surname</div>
                    <input name="surname" value={current.surname} onChange={this.props.inputChange} placeholder="Surname"></input>
                    <div>Country</div>
                    <input name="country" value={current.country} onChange={this.props.inputChange} placeholder="Country"></input>
                </div>

                <div id="popup-button-div">
                    <button onClick={this.props.update} id="popup-update-button">Update</button>
                </div>
            </div>
        )
    }
}

export default Popup