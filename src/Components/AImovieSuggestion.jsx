import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const AImovieSuggestion = () => {

  const {movieResults,movieNames}=useSelector((store)=>store.ai)
  if(!movieNames) return null

  return (
 
     <div className=" absolute top-[40%] font-SegoeBold text-[2rem]    text-white">
    {
        movieNames.map((movie,index)=>{
// console.log(movie,index)
 return <MovieList key={index}  title={movie}  movies={movieResults[index]} />
        })
      }
    </div>
  
  )
}


export default AImovieSuggestion