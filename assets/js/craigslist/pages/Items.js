import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Items extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const {match, location, history} = this.props
    return (
      <div className="items">
        <div className="container">
        this item is {match.params.item}
        </div>
      </div>
    );
  }
}
