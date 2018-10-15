import React, { Component } from 'react'
import Category from './Category'
import Data from './Data.json'

class Inventory extends Component {
  render() {
    return (
      <>
        <h1>All Inventory</h1>
        <article>
          {Object.keys(Data).map(categoryName => (
            <Category categoryName={categoryName} />
          ))}
        </article>
      </>
    )
  }
}

export default Inventory
