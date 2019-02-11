import React, { Component } from 'react';
import axios from 'axios'
import Client from './Client'
import ClientsTitles from './ClientsTitles'
import FilterPages from './FilterPages';
import Popup from './Popup'


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            filterData: [],
            currentPage: 0,
            showPopup: false,
            searchCategory: "name",
            text: "",
            id: "",
            name: "",
            surname: "",
            country: "",
            currentClient: { name: "", surname: "", country: "" }
        }
    }

    async getData() {
        return axios.get("http://localhost:3009/clients")
    }

    async componentDidMount() {
        let response = await this.getData()
        this.setState({ data: response.data, filterData: response.data })
    }

    searchClients = (clients) => {

        return clients
    }

    generateNextPage = () => {
        let current = this.state.currentPage
        let dataLength = this.state.data.length
        if ((current * 20) + 20 <= dataLength) { current++ }

        this.setState({ currentPage: current })
    }

    generatePreviousPage = () => {
        let current = this.state.currentPage
        if ((current * 20) - 20 >= 0) { current-- }

        this.setState({ currentPage: current })
    }

    togglePopup = () => {
        this.setState({ showPopup: !this.state.showPopup })
    }

    popupClientInfoDisplay = (id) => {
        this.togglePopup(id)
        let currentClient = this.state.currentClient
        let data = [...this.state.data].find(d => d._id === id)
        let state = this.state

        currentClient.name = data.name
        currentClient.surname = data.surname
        currentClient.country = data.country

        state.id = id
        state.name = currentClient.name
        state.surname = currentClient.surname
        state.country = currentClient.country

        this.setState({
            name: state.name,
            surname: state.surname,
            country: state.country
        })
    }

    handleInputChange = (e) => {
        const target = e.target
        const value = target.value;
        const name = target.name
        this.setState({
            [name]: value,
        })
    }

    updateClientData = async (id, dataUpdate) => {
        return await axios.put(`http://localhost:3009/clients/${id}`, dataUpdate)
    }

    updateClient = async () => {
        let id = this.state.id
        let client = {
            name: this.state.name,
            surname: this.state.surname,
            country: this.state.country
        }

        await this.updateClientData(id, client)
        this.togglePopup()
        this.componentDidMount()
    }

    render() {
        let clients = this.state.data
        clients = clients.slice(this.state.currentPage * 20, (this.state.currentPage + 1) * 20)

        let searchClients = clients.filter(client => client[this.state.searchCategory].toLowerCase().includes(this.state.text.toLowerCase()))

        return (
            <div id="middle">
                <FilterPages
                    generateNextPage={this.generateNextPage} generatePreviousPage={this.generatePreviousPage} currentPage={this.state.currentPage}
                    filterData={this.state.filterData} inputChange={this.handleInputChange} inputText={this.state.text} searchCategory={this.state.searchCategory}
                />

                <ClientsTitles />

                {searchClients.map(client =>
                    <Client user={client} popup={this.popupClientInfoDisplay} />
                )}

                {this.state.showPopup &&
                    <Popup closePopup={this.togglePopup} current={this.state} inputChange={this.handleInputChange} update={this.updateClient} />
                }
            </div>
        )
    }
}

export default Clients