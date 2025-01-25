import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"


const MainContainer = () => {

  const movies= useSelector((store)=>store.movie?.nowPlayingMovies)
  
  

  if(!movies)  return;

  const mainMovie=movies[0];



  return (
    <div>
           <VideoTitle title={mainMovie.title} overview={mainMovie.overview}/>
            <VideoBackground MovieId={mainMovie.id}/>
           
    </div>
  )
}

export default MainContainer