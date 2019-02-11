import React, { Component } from 'react';
import Update from './Update'
import AddClient from './AddClient'
import axios from 'axios'

class Actions extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            name: '',
            surname: '',
            country: '',
            owner: ''
        }
    }

    async getData() {
        return axios.get("http://localhost:3009/clients")
    }

    async componentDidMount() {
        let response = await this.getData()
        this.setState({ data: response.data })
    }

    async getNewClient(client) {
        return axios.post("http://localhost:3009/actions", client)
    }

    addClient = async () => {
        let data = [...this.state.data]
        let newClient = {
            name: this.state.name,
            surname: this.state.surname,
            country: this.state.country,
            owner: this.state.owner
        }
        let response = await this.getNewClient(newClient)

        data.push(response.data)

        this.setState({
            data: data
        })

        console.log(this.state.data)
    }

    handleInputChange = (e) => {

        const target = e.target
        const value = target.value;
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div id="middle-actions">
                {/* <Update clients={this.state.data} /> */}
                <AddClient addClient={this.addClient} inputChange={this.handleInputChange}
                    name={this.state.name} surname={this.state.surname} country={this.state.country} owner={this.state.owner}
                />
                <hr></hr>
            </div>
        )
    }
}

export default Actions