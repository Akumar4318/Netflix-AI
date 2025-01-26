import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryContainer = () => {

  const movies=useSelector(store=> store.movie)

  return (


   <div className=" md:-mt-20 pt-2">
    {/* moviList-Popular
        movielIst-NowPlaying
        movielist-Horror 
        and each will have movieCard

    */}
    <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
    
   
    <MovieList title={'UpcomingMovies'} movies={movies.UpcomingMovies} />
    <MovieList title={'Popular'} movies={movies.popularMovies} />
    <MovieList title={'Top Rated'} movies={movies.TopRatedMovies} />
   
   



   </div>
  )
}

export default SecondaryContainer