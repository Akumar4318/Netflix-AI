import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constant";
import { toast } from "react-toastify";
import { addNowPlayingMovies } from "../Features/MovieSlice";

const useNowPlayingMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const data = await response.json();
   
      dispatch(addNowPlayingMovies(data.results));
    } catch (error) {
      toast.error(error.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return { isLoading };
};

export default useNowPlayingMovies;
 