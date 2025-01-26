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
      console.log(gptMovies);

      const PromiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      const TMDBresults = await Promise.all(PromiseArray);
      console.log(TMDBresults);

      dispatch(
        addAIMovieResults({ movieNames: gptMovies, movieResults: TMDBresults })
      );
    } catch (error) {
      toast.error("Error generating content:", error);
    }
  };

  return (
    <div className="w-screen h-lvh bg-gradient-to-b from-black/50  p-4">
      <img src={backimage} className="absolute  -z-10 scale-125" alt="" />

      <div className="cursor-pointer w-[10%] p-2 mt-[2%] ml-[7%]">
  <img
    src={logo}
    alt=""
    className="w-[147px] h-[40px]"
    onClick={() => {
      navigate("/");
      dispatch(addAIMovieResults({ movieNames: null, movieResults: null }));
    }}
  />
</div>

<div
  className="w-fit relative left-[83.3%] -top-11 h-4 cursor-pointer"
  onClick={() => {
    navigate("/");
    dispatch(addAIMovieResults({ movieNames: null, movieResults: null }));
  }}
>
        <img
          src="https://fontmeme.com/permalink/250125/de30b26cb20a7e626f8e0f01d229eb03.png"
          className=""
          alt=""
        />
      </div>
      <select
        className="bg-gradient-to-r from-[#f6121d] to-[#8b050b] text-white border-2 border-transparent rounded-lg shadow-lg focus:outline-none  hover:scale-105 transform transition-all duration-300 absolute right-14 top-14 px-4 py-2 cursor-pointer"
        onChange={handelLanguagechange}
      >
        {SUPPORTED_LANGUAGES.map((item) => {
          return (
            <option
              value={item.identifier}
              key={item.identifier}
              className="bg-[#f6121d] hover:bg-red-300 text-white font-SegoeBold transform transition-transform duration-300 hover:scale-110 cursor-pointer "
            >
              {item.name}
            </option>
          );
        })}
      </select>

      <div className="flex  ">
        <form
          action=""
          className="mt-[5%] flex justify-center gap-x-4 px-12   w-screen"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            ref={searchText}
            type="text"
            className="font-SegoeUI w-[40%] p-3 border border-red-500 rounded-md"
            placeholder={lang[langKey].aisearachHolder}
          />
          <button
            onClick={handelAisearchClick}
            className="px-6  rounded-lg font-SegoeBold text-white bg-[#f6121d]"
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AiSearchBar;
