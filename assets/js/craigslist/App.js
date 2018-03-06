import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } 
from "react-router-dom";
import Header from './includes/Header.js'
import Home from './pages/Home.js'
import Listings from './pages/Listings.js'
import Items from './pages/Items.js'
import Categories from './pages/Categories.js'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path= "/" component={Home} />
          <Route exact path= "/:city/:category/" component={Categories} />
          <Route exact path= "/:city/:category/:listings" component={Listings} />
          <Route exact path= "/:city/:category/:listings/:items" component={Items} />
        </div>
      </Router>
    ) 
  }
}