import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        UpcomingMovies:null,
        TopRatedMovies:null,
        MoviesDetails:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addtrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload

        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.UpcomingMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload;
        },
        addMoviesDetails:(state,action)=>{
            state.MoviesDetails=action.payload
        }
    }
})

export default movieSlice.reducer;

export const{addNowPlayingMovies,addtrailerVideo,addPopularMovies,addUpcomingMovies,addTopRatedMovies,addMoviesDetails}=movieSlice.actions