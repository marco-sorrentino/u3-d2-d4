import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favReducer from "../reducers/favReducer";
import jobReducer from "../reducers/job";

//Una volta creato e splittato il reducer solo per il fav, creo un nuovo hook, CombineReducers()
// Come suggeriesce già il nome, mi permette di creare più reducer per gestire i singoli stati.

// IMPORTANTE IMPORTANTE
// Quando utilizzo useSelector(), per andare a leggere e prendere dati, "favourite", diventa una prorietà intermedia a cui devo accedere
const bigReducer = combineReducers({
  favourite: favReducer,
  job: jobReducer,
});

// una volta creato il combineReducer lo vado a mettere come valore della proprietà reducer per far funzionare il tutto
const store = configureStore({
  reducer: bigReducer,
});

export default store;
