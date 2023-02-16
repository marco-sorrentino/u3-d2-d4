import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

// ConfigureStore ha bisogno della struttura del ns store come parametro principale
const store = configureStore({
  reducer: mainReducer,
});

export default store;
