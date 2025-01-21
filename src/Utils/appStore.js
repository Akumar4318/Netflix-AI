import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/UserSlice";
import movieReducer from '../Features/MovieSlice'

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie:movieReducer,
  },
});

export default appStore;
