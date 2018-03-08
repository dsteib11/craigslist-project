import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Details extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="details-page">
        <div className="container">
          <section className="submenu">
            <div className="direction" />

            <div className="direction">
              <div className="prev">Prev</div>
              <div className="next">Next</div>
            </div>

            <nav className="sub-links">
              <a href="#">More Ads by User</a>
              <a href="#">Print</a>
              <a href="#">Share</a>
              <a href="#">Contact Share</a>
            </nav>
          </section>

          <section>
            <div className="media-column">
              <div className="gallery">
                <div className="slider">
                  <div className="main-image">
                    <div className="left-arrow">Left-Arrow</div>
                    <div className="right-arrow">Right-Arrow</div>
                  </div>
                </div>

                <div className="thumbnails">
                  <div className="thumb-image">Image</div>
                </div>
              </div>
            </div>

            <div className="details-column">
              <div className="date">Mar 8th</div>
              <h3>2013 Jeep Wrangler Rubicon</h3>
              <h4 className="price">$30000</h4>
              <div className="more-details">
                <div className="info">
                  <label>Vin</label>
                  <h5>sdfjkgnskdngs</h5>
                </div>
                <div className="info">
                  <label>Milage</label>
                  <h5>30054</h5>
                </div>
                <div className="info">
                  <label>Transmission</label>
                  <h5>6 Speed Automatic</h5>
                </div>
              </div>
              <div className="discription">
                <p>The discription goes here</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
