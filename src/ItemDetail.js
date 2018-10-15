import React, { Component } from 'react'
import Data from './Data.json'

class ItemDetail extends Component {
  render() {
    const category = this.props.match.params.category
    const index = this.props.match.params.index
    return (
      <div className="wrapper">
        <h1>{Data[category].photos[index].title}</h1>
        <img
          className="PhotoD"
          src={Data[category].photos[index].imageURL}
          alt="a list fo gear"
        />
        <aside>{Data[category].photos[index].description}</aside>
        <aside>{Data[category].photos[index].price}</aside>
        <button className="buy">
          <a target="_blank" href={Data[category].photos[index].sourceURL}>
            Buy
          </a>
        </button>
      </div>
    )
  }
}

export default ItemDetail
