
import { useSelector } from "react-redux";
import UseDetails from "../Hooks/UseDetails";
import UseNowPlayingMovies from "../Hooks/UseNowPlayingMovies";
import UsePopularMovies from "../Hooks/UsePopularMovies";
import UseTopRatedMovies from "../Hooks/UseTopRatedMovies";
import UseUpcomingMovies from "../Hooks/UseUpcomingMovies";

import Header from "./Header";
import Loadder from "./Loadder";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  const{isLoading}=UseNowPlayingMovies();
  const{}=UsePopularMovies();
  const{}=UseUpcomingMovies();
  const{}=UseTopRatedMovies();
  const{}=UseDetails();
//  const showAIsearch=useSelector(store=>store.ai.showAIsearch) 

  return (    
    <div>
      {isLoading
       ? (
        <div className="h-lvh flex justify-center items-center w-screen"><Loadder /></div>
      ) : (
        <div>
          <Header />
          <MainContainer/>
          <SecondaryContainer/>
       

         {/* 
              1-MainContainer
                - VideoBackGround
                -VideoTitle
              2-SecondaryContainer
                -  MovieList(more no. of movie)
                - Card
          */}
        </div>
      )}
    </div>
  );
};

export default Browse;
