
import UseNowPlayingMovies from "../Hooks/UseNowPlayingMovies";
import Header from "./Header";
import Loadder from "./Loadder";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  const{isLoading}=UseNowPlayingMovies();

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
