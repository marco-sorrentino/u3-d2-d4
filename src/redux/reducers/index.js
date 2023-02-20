// qui si definisce la nostra funziona reducer
// il reducer prende lo stato corrente dell'app, prende anche l'azione che gli arriva dopo un dispatch

// si setta uno stato iniziale
const initialState = {
  favourites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter(
            (el) => el !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
