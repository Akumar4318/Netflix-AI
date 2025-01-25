import { createSlice } from "@reduxjs/toolkit";


const AISlice=createSlice({
    name:'ai',
    initialState:{
        showAISearch:false
    },
    reducers:{
        toggleAISearchView:(state)=>{
            state.showAISearch=!state.showAISearch;
        }
    }
})


export default AISlice.reducer;
export const{toggleAISearchView}=AISlice.actions