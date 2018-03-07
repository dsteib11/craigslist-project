import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Item extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const {match, location, history } = this.props
    return (
      <div className="Item">
        <div className="container">
          This item is {match.params.item}
        </div>
      </div>
    )
  }
}
