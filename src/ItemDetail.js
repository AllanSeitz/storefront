import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Data from './Data.json'

class ItemDetail extends Component {
  render() {
    const index = this.props.match.params.index
    const category = Data[this.props.match.params.categoryName]

    return (
      <div className="media">
        <div className="media-left">
          <div class="media-body">
            <h1 className="media-heading">{category.photos[index].title}</h1>
            <div class="row">
              <div class="col-xs-6 col-md-3">
                <a href="2" class="thumbnail">
                  <img
                    alt="inventory"
                    className="media-object"
                    src={category.photos[index].imageURL}
                  />
                </a>
              </div>
            </div>
            <h3 className="media-heading">
              {category.photos[index].description}
            </h3>
            <h3 className="media-heading">{category.photos[index].price}</h3>
            <button
              className="btn btn-info"
              target="_blank"
              href={category.photos[index].sourceURL}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemDetail
