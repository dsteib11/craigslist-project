import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
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
      <div> 
        <h1>
          Welcome to Craigslist..<br/>
          We Can Help..
        </h1>
      </div>
    )
  }
}
