import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

class SalesSinceDate extends Component {
    render() {
        let data = ""
        return (
            <div id="sales-since-box">
                <h3>Sales last 30 days:</h3>
                <div id="sales-since-chart">
                    <LineChart width={600} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
            </div>
        )
    }
}

export default SalesSinceDate