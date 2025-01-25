import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/UserSlice";
import movieReducer from '../Features/MovieSlice'
import aiReducer from '../Features/AISlice'
import configReducer from '../Features/ConfigSlice'
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie:movieReducer,
    ai:aiReducer,
   config:configReducer
  },
});

export default appStore;
