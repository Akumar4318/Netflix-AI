import { IMG_CDN_URL } from "../Utils/Constant"



const MovieCard = ({posterPath}) => {
  return (
    <div>
        <img className="w-44" src={IMG_CDN_URL+posterPath} alt="Movie Card" />

    </div>
  )
}

export default MovieCard