import { createSlice } from "@reduxjs/toolkit";


const AISlice=createSlice({
    name:'ai',
    initialState:{
        showAISearch:false,
      
        movieResults:null,
        movieNames:null,

    },
    reducers:{
        toggleAISearchView:(state)=>{
            state.showAISearch=!state.showAISearch;
        },
        addAIMovieResults:(state,action)=>{
            const{movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        }
    }
})


export default AISlice.reducer;
export const{toggleAISearchView,addAIMovieResults}=AISlice.actions