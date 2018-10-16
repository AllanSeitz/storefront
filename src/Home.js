import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Data from './Data.json'

class Home extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12 col-md-8">
            <h1>Featured Items</h1>
            {Object.keys(Data).map(category => {
              return (
                <ul className="list-group">
                  <li className="list-group-item">
                    {Data[category].description}
                  </li>
                  <li className="list-group-item">
                    <img
                      alt="fishing gear"
                      src={Data[category].photos[0].imageURL}
                    />
                  </li>
                  <li className="list-group-item">
                    <Link className="btn btn-info" to={`/${category}`}>
                      {Data[category].title}
                    </Link>
                  </li>
                </ul>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
