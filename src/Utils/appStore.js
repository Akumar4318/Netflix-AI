import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/UserSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
