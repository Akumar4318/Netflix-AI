import { IMG_CDN_URL } from "../Utils/Constant"


const MovieCard = ({ posterPath }) => {

 

  return (
    <div className="flex-shrink-0  w-48 h-72 bg-gray-800 hover:scale-105 cursor-pointer rounded-lg overflow-hidden shadow-md">
      <img
        src={IMG_CDN_URL+posterPath}
        alt="Movie Poster"
        className="w-full h-full object-cover"

      />
    </div>
  );
};

export default MovieCard;
