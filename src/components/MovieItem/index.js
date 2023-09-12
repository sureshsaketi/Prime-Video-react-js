import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props

  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div className="movie-item-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="modal-container">
              <button
                data-testid="closeButton"
                type="button"
                className="close-button"
                onClick={() => close()}
              >
                <IoMdClose size={20} color="#231f20" />
              </button>
              <ReactPlayer url={videoUrl} controls />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
