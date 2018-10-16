import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Category from './Category'
import ItemDetail from './ItemDetail'
import Inventory from './Inventory'
import Data from './Data.json'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <nav className="navbar navbar-default navbar-fixed-top">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/" className="navbar-brand">
                  <i class="fas fa-store brand-icon" />
                  Allan's Emporium
                </Link>
              </li>
              <li>
                <Link to="/all">All</Link>
              </li>
              {Object.keys(Data).map(category => {
                return (
                  <li>
                    <Link to={`/${category}`}>{Data[category].title}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="main-page">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/all" component={Inventory} />
              <Route exact path="/:categoryName" component={Category} />
              <Route path="/:categoryName/:index" component={ItemDetail} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
