import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Listings extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const {match, location, history } = this.props
    return (
      <div className="Listings">
        <div className="container">
         Listings: {match.params.listings}
        </div>
      </div>
    )
  }
}
