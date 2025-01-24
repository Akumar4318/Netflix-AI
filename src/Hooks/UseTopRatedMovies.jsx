

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constant";
import { toast } from "react-toastify";
import {  addTopRatedMovies } from "../Features/MovieSlice";


const UseTopRatedMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
   
      dispatch(addTopRatedMovies(data.results));
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

export default UseTopRatedMovies;
 