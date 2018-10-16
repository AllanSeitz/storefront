import React, { Component } from 'react'
import Data from './Data.json'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class Category extends Component {
  render() {
    const categoryName =
      this.props.categoryName || this.props.match.params.categoryName

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-8">
            {Data[categoryName].photos.map((photo, index) => {
              return (
                <ul className="list-group">
                  <li className="list-group-item">
                    <img className="img-thumbnail" src={photo.imageURL} />
                  </li>
                  <li className="list-group-item">
                    <Link
                      className="btn btn-info"
                      to={`/${categoryName}/${index}`}
                    >
                      {photo.title}
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

export default Category
