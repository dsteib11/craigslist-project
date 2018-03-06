import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Categories extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const {match, location, history} = this.props
    return (
      <div className="categories">
        <div className="container">
        this item is {match.params.categories}
        </div>
      </div>
    );
  }
}
