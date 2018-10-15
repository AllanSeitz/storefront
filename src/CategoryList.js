import React, { Component } from 'react'
import Data from './Data.json'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class Category extends Component {
  render() {
    return (
      <div>
        {Data[this.props.categoryName].photos.map((photo, index) => {
          return (
            <figure>
              <img className="URL" src={photo.imageURL} />
              <button className="links">
                <Link to={`/${this.props.categoryName}/${index}`}>
                  {photo.title}
                </Link>
              </button>
            </figure>
          )
        })}
      </div>
    )
  }
}

export default Category
