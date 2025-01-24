import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/UseMovieTrailer";



const VideoBackground = ({MovieId}) => {

// fetch trailer video and updating the store with video data

const trailerVideo=useSelector((store)=>store.movie?.trailerVideo);
useMovieTrailer(MovieId)

  return (
    <div>
      <div className="w-screen scale-110">
      <iframe className="w-screen aspect-video "  src={"https://www.youtube.com/embed/"+trailerVideo?.key +"?&autoplay=1&muted=0" } title="YouTube video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;  web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
      </div>
    </div>
  )
}

export default VideoBackground