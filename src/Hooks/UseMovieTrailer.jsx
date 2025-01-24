import { useDispatch, useSelector } from "react-redux";
import { addtrailerVideo } from "../Features/MovieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constant";



const useMovieTrailer=(MovieId)=>{

    const dispatch=useDispatch()

   
    
    const getMovieVideos=async()=>{
      const response=await fetch(`https://api.themoviedb.org/3/movie/${MovieId}/videos?language=en-US`, API_OPTIONS)
      const data=await response.json()
  
    
      const filterData=data.results.filter(video=> video.type=="Trailer")
      
      const trailer=filterData.length ? filterData[0] : data.results[0]
  
      dispatch(addtrailerVideo(trailer))
    }
    
    useEffect(()=>{
    
     getMovieVideos();
    
    },[])

}

export default useMovieTrailer;