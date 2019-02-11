import React, { Component } from 'react';

class Update extends Component {
    render() {
        return (
            <div id="update-box">
                <h2>UPDATE</h2>
                <div className="update-sections">
                    <div>Client:</div>
                    <input placeholder="Client Name"></input>
                </div>
                <div>
                    <div className="update-sections" id="transfer">
                        <div>Transfer ownershop to:</div>
                        <select>
                            <option disabled selected hidden>Owner</option>
                            {this.props.clients.map(owner => <option>{owner.owner}</option>)}
                        </select>
                        <button>TRANSFER</button>
                    </div>

                    <div className="update-sections" id="send-email">
                        <div>Send email:</div>
                        <select>
                            <option disabled selected hidden>Email Type</option>
                            <option>A</option>
                        </select>
                        <button>SEND</button>
                    </div>

                    <div className="update-sections" id="declare">
                        <div>Declare sale</div>
                        <div></div>
                        <button>DECLARE</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Update