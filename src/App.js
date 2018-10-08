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
            <h1>Shopping:</h1>
            <h2>Browse for Purchases</h2>
          </header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>/
              </li>
              <li>
                <Link to="/fresh-water-fishing">Gear</Link>/
              </li>
              <li>
                <Link to="/Lures">Lures</Link>/
              </li>
              <li>
                <Link to="/clubs">Golf-Clubs</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            {/* <Route exact path="/Inventory" component={AllItems} /> */}
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/:category" component={PhotoList} />
            <Route path="/:category/:index" component={PhotoDetail} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default App
