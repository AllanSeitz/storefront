import React, { Component } from 'react'
import Data from './Data.json'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class Category extends Component {
  render() {
    const categoryName =
      this.props.categoryName || this.props.match.params.categoryName

    return (
      <div>
        {Data[categoryName].photos.map((photo, index) => {
          return (
            <figure>
              <img className="img-thumbnail" src={photo.imageURL} />
              <Link
                className="btn btn-primary"
                to={`/${categoryName}/${index}`}
              >
                {photo.title}
              </Link>
            </figure>
          )
        })}
      </div>
    )
  }
}

export default Category
