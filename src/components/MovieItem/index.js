import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

// const MovieItem = props => {
//   const {movieDetails} = props
//   const {thumbnailUrl} = movieDetails
//   return (
//     <li className="movie-list">
//       <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
//     </li>
//   )
// }

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <li className="movie-list">
              <img
                src={thumbnailUrl}
                alt="thumbnail"
                className="thumbnail-image"
              />
            </li>
          </button>
        }
      >
        {close => (
          <div className="video-container">
            <div className="close-button-container">
              <button
                type="button"
                className="trigger-button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose className="close-button" />
              </button>
            </div>
            <div className="responsive-container">
              <ReactPlayer url={videoUrl} controls className="video-player" />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
