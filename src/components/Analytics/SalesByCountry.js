import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// Create chart component
class SalesByCountry extends Component {

    render() {
        let data = this.props.getSalesByCountries()
        return (
            <div id="sales-by-countries">
                <div id="sales-by-countries-titles">
                    <h3>Sales by:</h3>

                    <select>
                        <option>Country</option>
                    </select>
                </div>

                <div id="sales-by-country-chart">
                    <BarChart width={800} height={200} data={data}>
                        <XAxis dataKey="name" stroke="#FFAE00" />
                        <YAxis />
                        <Tooltip wrapperStyle={{ width: "fit-contect", backgroundColor: '#ccc', color: "#FFAE00" }} />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar type="monotone" dataKey="count" fill="#474044" barSize={70} />
                    </BarChart>
                </div>
            </div>
        )
    }
}

export default SalesByCountry