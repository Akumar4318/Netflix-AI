import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_OPTIONS } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addMoviesDetails } from "../Features/MovieSlice";

const UseDetails = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  const [item, setItem] = useState(null); // Set item state as null initially
  const dispatch=useDispatch()

  // Fetch movie details for the selected movie
  const getalldata = async (movieId) => {
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_OPTIONS
      );
      let data = await response.json();
      
    //   dispatch(addMoviesDetails(data.results))

    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    if (movies && movies.length > 0) {
      // Set the first movie's ID to fetch details
      setItem(movies[0].id); // Example: Choose the first movie to fetch data
    }
  }, [movies]);

  useEffect(() => {
    if (item) {
      getalldata(item); // Call API when 'item' changes
    }
  }, [item]);

  return <div></div>;
};

export default UseDetails;
