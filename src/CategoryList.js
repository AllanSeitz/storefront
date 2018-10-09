import React, { Component } from 'react'
import Data from './Data.json'

class CategoryList extends Component {
  render() {
    return (
      <main>
        <h1>Featured ITems</h1>
        {Object.keys(Data).map(category => {
          return (
            <aside className="gear">
              <p className="text">{Data[category].description}</p>
              <img
                className="main-image"
                src={Data[category].photos[0].imageURL}
              />
            </aside>
          )
        })}
      </main>
    )
  }
}

export default CategoryList
