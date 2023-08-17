import {Component} from 'react'
import MovieItem from '../MovieItem/index'

class MoviesSlider extends Component {
  render() {
    const {movieDetails} = this.props
    return <MovieItem movieDetails={movieDetails} />
  }
}

export default MoviesSlider
