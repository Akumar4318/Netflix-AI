import MovieCard from "./MovieCard"


const MovieList = ({title,movies}) => {

    console.log(movies)
  return (
    <div className=" z-50 absolute">
        <div className="">
            <h1 className="bg-red-900">{title}</h1>
        </div>
        <div>
        {/* <MovieCard posterPath={movies[0].poster_path}/> */}

       <div className="flex">
       {
            movies.map((item)=>{

                return <MovieCard key={item.id} posterPath={item.poster_path}/>
                 
            })
        }
       </div>
        </div>
       
    </div>
  )
}

export default MovieList