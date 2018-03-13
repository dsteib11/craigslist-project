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
          onClick = {this.clickThumb.bind(null, i)}
          className="thumb-img"
          style={{ backgroundImage: `url('${item}')` }}>
        </div>
      )
    })
  }

  nextBtn = () => {
    if(this.state.currentIndex != (this.state.allImgs.length -1)) {
        this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    }
  }

  prevBtn = () => {
      if(this.state.currentIndex != 0) {
        this.setState({
        currentIndex: this.state.currentIndex - 1
      })
    }
  }

  clickThumb = (index) => {
    this.setState({
    currentIndex: index
    })
  }
  render() {
    const { match, location, history } = this.props;
    return (
      <div className="gallery">
        <div className="slider">
          <div className="main-img">
            <div className="arrows left-arrow" onClick= {this.prevBtn}><i className="fas fa-chevron-left"></i></div>
            <div className="arrows right-arrow" onClick= {this.nextBtn}><i className="fas fa-chevron-right"></i></div>
            <div
              className="img-1"
              style={{
                backgroundImage:
                  `url('${this.state.allImgs[this.state.currentIndex]}')`}}>
            </div>
          </div>
        </div>

        <div className="thumbnails">{this.allImgsLoop()}</div>
      </div>
    )
  }
}
