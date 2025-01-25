import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/UserSlice";
import movieReducer from '../Features/MovieSlice'
import aiReducer from '../Features/AISlice'

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie:movieReducer,
    ai:aiReducer
  },
});

export default appStore;
