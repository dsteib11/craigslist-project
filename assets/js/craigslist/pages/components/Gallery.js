import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      allImgs: '',
      currentImg: '',
      currentIndex: 0
    }
  }

  componentWillMount () {
    const allImgs = [
      'https://images.craigslist.org/00B0B_7Hcs8IDfZRQ_600x450.jpg',
      'https://images.craigslist.org/00c0c_1kCsr66GjuU_600x450.jpg',
      'https://images.craigslist.org/00l0l_17AO1Qfseao_600x450.jpg',
      'https://images.craigslist.org/00q0q_iaEg5LkU09t_600x450.jpg',
      'https://images.craigslist.org/00j0j_dqaDSnAUbx7_600x450.jpg',
      'https://images.craigslist.org/00x0x_igeXh3HgEbP_600x450.jpg'
    ]

    this.setState({
      
      allImgs,

      currentImg: allImgs[this.state.currentIndex]
    })

  }

  allImgsLoop = () => {
    return this.state.allImgs.map((item, i) => {
      return (
        <div
          key={i}
          className="thumb-img"
          style={{ backgroundImage: `url('${item}')` }}>
        </div>
      )
    })
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="gallery">
        <div className="slider">
          <div className="main-img">
            <div className="arrows left-arrow">{"<"}</div>
            <div className="arrows right-arrow">{">"}</div>
            <div
              className="img-1"
              style={{
                backgroundImage:
                  `url('${this.state.currentImg}')`}}>
            </div>
          </div>
        </div>

        <div className="thumbnails">{this.allImgsLoop()}</div>
      </div>
    )
  }
}
