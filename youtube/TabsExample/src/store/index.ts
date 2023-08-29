import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth";

const store = configureStore({
   reducer:{
     authentication : authSlice
   }
});

export default store;