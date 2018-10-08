import React, { Component } from 'react'
import Data from './Data.json'

class PhotoDetail extends Component {
  render() {
    const category = this.props.match.params.category
    const index = this.props.match.params.index
    return (
      <article>
        <h1>{Data[category].photos[index].title}</h1>
        <img src={Data[category].photos[index].imageURL} />
        <aside>{Data[category].photos[index].description}</aside>
        <aside>{Data[category].photos[index].price}</aside>
        <button>
          <a target="_blank" href={Data[category].photos[index].sourceURL}>
            Buy
          </a>
        </button>
      </article>
    )
  }
}

export default PhotoDetail
