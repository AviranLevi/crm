import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'

import Badges from "./Badges"
import TopEmployees from './TopEmployees';
import SalesByCountry from './SalesByCountry'
import SalesSinceDate from './SalesSinceDate'

class Analytics extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    async getData() {
        return axios.get("http://localhost:3009/clients")
    }

    async componentDidMount() {
        let response = await this.getData()
        this.setState({ data: response.data })
    }

    getNewClients = () => {
        const data = [...this.state.data]
        const monthTest = c => moment(c.firstContact).month() === moment().month()
        const yearTest = c => moment(c.firstContact).year() === moment().year()
        let count = data.filter(c => monthTest(c) && yearTest(c)).length

        return count
    }

    getEmails = () => {
        let data = [...this.state.data]
        let sum = 0
        data.forEach(c => {
            if (c.emailType !== null) { sum++ }
        })

        return sum
    }

    getOutstandingClients = () => {
        let data = [...this.state.data]
        let count = 0
        data.forEach(d => {
            if (d.sold === false) { count++ }
        })

        return count
    }

    getSalesByCountry = () => {
        const countrys = {}
        let data = [...this.state.data]
        data.forEach(c => {
            if (countrys[c.country]) {
                countrys[c.country]++
            } else {
                countrys[c.country] = 1
            }
        })

        return countrys
    }

    getHottestCountry = () => {
        const countrys = this.getSalesByCountry()
        let hottest = {
            country: "",
            count: 0
        }

        for (let i in countrys) {
            if (countrys[i] > hottest.count) {
                hottest.country = i
                hottest.count = countrys[i]
            }
        }

        return hottest.country
    }

    getTopEmplyees = () => {
        let data = [...this.state.data]
        const sellers = {}
        const sellersCounts = []
        data.forEach(c => {
            if (sellers[c.owner]) {
                sellers[c.owner]++
            } else {
                sellers[c.owner] = 1
            }
        })

        for (let i in sellers) {
            sellersCounts.push({ seller: i.split(" ")[0], count: sellers[i] })
        }

        sellersCounts.sort((a, b) => { return b.count - a.count })

        return sellersCounts.splice(0, 4)
    }

    getSalesByCountries = () => {
        const countrys = this.getSalesByCountry()
        let countriesCount = []
        for (let i in countrys) {
            countriesCount.push({ name: i, count: countrys[i] })
        }

        return countriesCount
    }

    // getSalesLastMonth = () => {
    //     const data = [...this.state.data]
    //     let lastMonth = moment().subtract(30, "days").toArray().slice(0, 3)
    //     let soldCount = data.filter(c => c.sold)

    //     // let sold = data.filter(d => moment(d.firstContact).format("YYYY MM DD").toArray())

    //     // data.map(d => {
    //     //     if (soldCount && moment(d.firstContact).diff(lastMonth, "days")) { count++ }
    //     // })

    //     // console.log(sold)
    // }

    render() {
        return (
            <div id="analytics">
                <Badges getNewClients={this.getNewClients} hottestCountry={this.getHottestCountry} getEmails={this.getEmails} getOutstandingClients={this.getOutstandingClients} />
                <div id="charts">
                    <div>
                        <TopEmployees getTopEmplyees={this.getTopEmplyees} />
                        <SalesByCountry getSalesByCountries={this.getSalesByCountries} />
                    </div>
                    {/* <div>
                        <SalesSinceDate />
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Analytics