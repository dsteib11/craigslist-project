import React, { Component } from "react";
import ReactDOM from "react-dom";
import Gallery from "./components/Gallery.js";

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
          <div className="white-box">
            <section className="sub-menu"> 
              <div className="direction">
                <a href= "#" className="prev">Prev</a>
                <a href= "#" className="next">Next</a>
              </div>

              <nav className="sub-links">
                <a href="#">More Ads by User</a>
                <a href="#">Print</a>
                <a href="#">Share</a>
                <a href="#">Contact Share</a>
              </nav>
            </section>


            <section className="content-area">
              <div className="media-column">
                <Gallery />
              </div>

              <div className="details-column">
                <div className="date">Mar 8th 2018</div>
                <h3>2013 Jeep Wrangler Rubicon</h3>
                <h4 className="price">$30,000</h4>
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
                
                
                <div className="description">
                    <label>Description</label>
                    <p>Lorem ipsum dolor amet chillwave occupy meggings gluten-free ennui gastropub. Kinfolk truffaut cornhole taiyaki tilde mumblecore readymade godard raw denim vinyl. Next level copper mug gochujang pop-up, echo park freegan pork belly craft beer bicycle rights waistcoat ennui quinoa. Tote bag kogi cloud bread chartreuse 3 wolf moon put a bird on it lyft farm-to-table tbh disrupt authentic offal knausgaard. </p>
                    <p>Next level copper mug gochujang pop-up, echo park freegan pork belly craft beer bicycle rights waistcoat ennui quinoa. Tote bag kogi cloud bread chartreuse 3 wolf moon put a bird on it lyft farm-to-table tbh disrupt authentic offal knausgaard.
                    </p>
                    <p>Lorem ipsum dolor amet chillwave occupy meggings gluten-free ennui gastropub. Kinfolk truffaut cornhole taiyaki tilde mumblecore readymade godard raw denim vinyl. Next level copper mug gochujang pop-up, echo park freegan pork belly craft beer bicycle rights waistcoat ennui quinoa. Tote bag kogi cloud bread chartreuse 3 wolf moon put a bird on it lyft farm-to-table tbh disrupt authentic offal knausgaard.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
