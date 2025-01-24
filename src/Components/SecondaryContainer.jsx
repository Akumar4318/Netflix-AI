import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryContainer = () => {

  const movies=useSelector(store=> store.movie)

  return (


   <div className="-mt-20">
    {/* moviList-Popular
        movielIst-NowPlaying
        movielist-Horror 
        and each will have movieCard

    */}
    <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />



   </div>
  )
}

export default SecondaryContainer