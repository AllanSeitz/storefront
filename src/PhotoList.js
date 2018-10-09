import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Data from './Data.json'

class PhotoList extends Component {
  render() {
    console.log(this.props)
    const category = this.props.match.params.category
    return (
      <>
        <h1>{Data[category].title}</h1>
        <h4>{Data[category].description}</h4>
        <article>
          {Data[category].photos.map((photo, index) => {
            return (
              <figure>
                <img className="URL" src={photo.imageURL} />
                <button className="links">
                  <Link to={`/${category}/${index}`}>{photo.title}</Link>
                </button>
              </figure>
            )
          })}
        </article>
      </>
    )
  }
}

export default PhotoList
