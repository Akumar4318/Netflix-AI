import { useNavigate } from "react-router-dom";
import logo from "../assets/Images/Login/logo.svg";
import backimage from "../assets/Images/Login/backImage.jpg";
import lang from "../Utils/LanguageConstant";
import { API_OPTIONS, SUPPORTED_LANGUAGES } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../Features/ConfigSlice";
import { useRef } from "react";

import { toast } from "react-toastify";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { addAIMovieResults } from "../Features/AISlice";

const AiSearchBar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);

  const handelLanguagechange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const navigate = useNavigate();

  const searchText = useRef(null);

  // search movie in TMDB Database

  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+
        movie +
        "&include_adult=false&language=en-US&page=1'",
      API_OPTIONS
    );
    const data = await response.json();
   
    return data.results;
  };

  const handelAisearchClick = async () => {
    const query = `
       Act as a Movie Recommendation system and suggest top movies for the query: 
  "${searchText.current.value}"
 all the movies should be comma seperated`;

    const apiKey = "AIzaSyD_P1qqLOdoUJZeJkQeEERW7_X6awegOCE";
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
      const response = await model.generateContent(query);
      const gptMovies =
        response.response?.candidates[0]?.content?.parts[0]?.text.split(",");
    

      const PromiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      const TMDBresults = await Promise.all(PromiseArray);


      dispatch(
        addAIMovieResults({ movieNames: gptMovies, movieResults: TMDBresults })
      );
    } catch (error) {
      toast.error("Error generating content:", error);
    }
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-black/50 p-4 relative">
   
    <img
      src={backimage}
      className="absolute inset-0 -z-10 w-full h-full object-cover scale-125"
      alt=""
    />
  
    
    <div className="cursor-pointer w-20 p-2 mt-4 ml-6 sm:ml-10 md:w-[10%]">
      <img
        src={logo}
        alt=""
        className="w-[120px] h-auto md:w-[147px] md:h-[40px]"
        onClick={() => {
          navigate("/");
          dispatch(addAIMovieResults({ movieNames: null, movieResults: null }));
        }}
      />
    </div>
  

    <div
      className="absolute right-8 top-4 sm:top-8 md:right-[10%] cursor-pointer"
      onClick={() => {
        navigate("/");
        dispatch(addAIMovieResults({ movieNames: null, movieResults: null }));
      }}
    >
      <img
        src="https://fontmeme.com/permalink/250125/de30b26cb20a7e626f8e0f01d229eb03.png"
        className="w-24 sm:w-32 md:w-48 mr-32"
        alt=""
      />
    </div>
  
    <select
      className="bg-gradient-to-r from-[#f6121d] to-[#8b050b] text-white border-2 border-transparent rounded-lg shadow-lg focus:outline-none hover:scale-105 transform transition-all duration-300 absolute right-8 top-16 px-4 py-2 sm:right-14 sm:top-14"
      onChange={handelLanguagechange}
    >
      {SUPPORTED_LANGUAGES.map((item) => (
        <option
          value={item.identifier}
          key={item.identifier}
          className="bg-[#f6121d] text-white font-SegoeBold transform hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          {item.name}
        </option>
      ))}
    </select>

    <div className="flex justify-center mt-12 px-4">
      <form
        action=""
        className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-4 w-full max-w-4xl"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          type="text"
          className="font-SegoeUI w-full sm:w-[70%] p-3 border border-red-500 rounded-md"
          placeholder={lang[langKey].aisearachHolder}
        />
        <button
          onClick={handelAisearchClick}
          className="px-6 py-2 rounded-lg font-SegoeBold text-white bg-[#f6121d] hover:bg-red-600 transition duration-300"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  </div>
  
  );
};

export default AiSearchBar;
