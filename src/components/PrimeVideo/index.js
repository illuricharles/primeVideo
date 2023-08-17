import {Component} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MoviesSlider from '../MoviesSlider/index'
import './index.css'

const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
}

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    return (
      <div className="prime-video-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-image"
        />

        <div className="bottom-section">
          <h1 className="heading">Action Movies</h1>
          <ul className="slider-container">
            <Slider {...settings}>
              {moviesList.map(eachList => {
                if (eachList.categoryId === 'ACTION') {
                  return (
                    <MoviesSlider key={eachList.id} movieDetails={eachList} />
                  )
                }
                return null
              })}
            </Slider>
          </ul>

          <h1 className="heading">Comedy Movies</h1>
          <ul className="slider-container">
            <Slider {...settings}>
              {moviesList.map(eachList => {
                if (eachList.categoryId === 'COMEDY') {
                  return (
                    <MoviesSlider key={eachList.id} movieDetails={eachList} />
                  )
                }
                return null
              })}
            </Slider>
          </ul>
        </div>
      </div>
    )
  }
}

export default PrimeVideo
