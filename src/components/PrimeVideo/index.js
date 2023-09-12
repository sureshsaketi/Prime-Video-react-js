import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === actionMovie,
  )

  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === comedyMovie,
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="movies-sliders-container">
        <h1 className="movies-category-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="movies-category-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
