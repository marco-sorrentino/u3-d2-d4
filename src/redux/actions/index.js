// Salvo il nome del dispatch che si trova nel reducer in una variabile
// In questo modo come type ho una variabile ed è meno difficile sbagliare a scrivere
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const GET_JOB = "GET_JOB";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

// Action creator

// Sposto il dispatch che era presente al click del bottone e ne creo una funziona, in modo tale da richiamare la funzione al click,
// in questo modo non devo creare tanti dispatch se hanno la stessa funzione, ma basta che la richiamo
// Sintassi con Return
export const addToFavouriteAction = (data) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: data.company_name,
  };
};
//Sintassi senza return, forse meglio xkè superfluo

export const removeFromFavAction = (el) => ({
  type: REMOVE_FROM_FAV,
  payload: el,
});

export const getJobAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOB,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
