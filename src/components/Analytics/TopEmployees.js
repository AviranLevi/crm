import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

class TopEmployees extends Component {

    render() {
        let data = this.props.getTopEmplyees()
        return (
            <div id="top-employees-box">
                <h3>Top Employees:</h3>
                <div id="top-employees-chart">
                    <BarChart width={450} height={200} data={data}>
                        <XAxis dataKey="seller" stroke="#474044" />
                        <YAxis />
                        <Tooltip wrapperStyle={{ width: "fit-contect", backgroundColor: '#ccc' }} />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar type="monotone" dataKey="count" fill="#ffae00" barSize={30} />
                    </BarChart>
                </div>
            </div>
        )
    }
}

export default TopEmployees