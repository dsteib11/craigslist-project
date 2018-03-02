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
    <header>
      <div className={'left-menu'}>
      <div className={'logo'}>Logo</div>
      <div className={'city'}>Atlanta</div>
      </div>

      <div className={'right-menu'}>
      <div className={'user-img'}>User Img</div>
      <div className={'user-dropdown'}>Dropdown</div>
      <div className={'post-btn'}>Post-Button</div>
      </div>
    </header>)
  }
}
