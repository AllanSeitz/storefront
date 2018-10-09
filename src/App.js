import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CategoryList from './CategoryList'
import PhotoList from './PhotoList'
import PhotoDetail from './PhotoDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <header>
            <h1>Allan's Emporium</h1>
            <h2>Browse for Purchases</h2>
          </header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/fresh-water-fishing"> Fresh Water Gear</Link>
              </li>
              <li>
                <Link to="/Lures">Lures</Link>
              </li>
              <li>
                <Link to="/clubs">Golf-Clubs</Link>
              </li>
            </ul>
          </nav>
          <div className="main-page">
            <Switch>
              <Route exact path="/" component={CategoryList} />
              <Route exact path="/:category" component={PhotoList} />
              <Route path="/:category/:index" component={PhotoDetail} />
            </Switch>
          </div>
        </>
      </Router>
    )
  }
}

export default App
