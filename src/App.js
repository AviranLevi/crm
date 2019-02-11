import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Clients from './components/Clients/Clients'
import Actions from './components/Actions/Actions'
import Analytics from './components/Analytics/Analytics'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  async getData() {
    return axios.get("/clients")
  }

  async componentDidMount() {
    let response = await this.getData()
    this.setState({ data: response.data })
  }

  render() {
    return (
      <Router >
        {/* Main Navbar */}
        < div id="crm-box" >
          <div id="menu-box">
            <Link to="/"><div className="menu-buttons"><div>Clients</div></div></Link>
            <Link to="/actions"><div className="menu-buttons"><div>Actions</div></div></Link>
            <Link to="/analytics"><div className="menu-buttons"><div>Analytics</div></div></Link>
          </div>

          {/* Routes */}
          <Route path='/' exact render={() => <Clients />} />
          <Route path='/actions' exact render={() => <Actions />} />
          <Route path='/analytics' exact render={() => <Analytics />} />
        </div >
      </Router >
    )
  }
}

export default App;
