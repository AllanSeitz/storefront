import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Category from './Category'
import Data from './Data.json'

class Category extends Component {
  render() {
    console.log(this.props)
    const categoryName = this.props.match.params.category
    return (
      <>
        <h1>{Data[categoryName].title}</h1>
        <h4>{Data[categoryName].description}</h4>
        <article>
          <Category categoryName={categoryName} />
        </article>
      </>
    )
  }
}

export default Category
