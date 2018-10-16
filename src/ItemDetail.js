import React, { Component } from 'react'
import Data from './Data.json'

class ItemDetail extends Component {
  render() {
    const index = this.props.match.params.index

    const category = Data[this.props.match.params.categoryName]
    return (
      <div className="wrapper">
        <h1>{category.photos[index].title}</h1>
        <img
          className="PhotoD"
          src={category.photos[index].imageURL}
          alt="a list fo gear"
        />
        <aside>{category.photos[index].description}</aside>
        <aside>{category.photos[index].price}</aside>
        <button className="buy">
          <a target="_blank" href={category.photos[index].sourceURL}>
            Buy
          </a>
        </button>
      </div>
    )
  }
}

export default ItemDetail
