
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constant";
import { toast } from "react-toastify";
import {  addPopularMovies } from "../Features/MovieSlice";


const UsePopularMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
   
      dispatch(addPopularMovies(data.results));
    } catch (error) {
      toast.error(error.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return { isLoading };
};

export default UsePopularMovies;
 