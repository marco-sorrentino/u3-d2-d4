// Se ho più state con più proprietà, posso splittare un mainreducer con più reducer che prendono i nomi dalle proprietà all'interno del reducer
// Qui sto creando un reducer solo per content, in cui andrò a gestire i dispatch add and remove favs.
// Una volta creato lo devo esportare nello store, ANDARE A VEDERE ORA LI SPIEGAZIONE

import { ADD_TO_FAVOURITE, REMOVE_FROM_FAV } from "../actions";

// si setta uno stato iniziale
const initialState = {
  content: [],
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,

        content: [...state.content, action.payload],
      };
    case REMOVE_FROM_FAV:
      return {
        ...state,

        content: state.content.filter((el) => el !== action.payload),
      };
    default:
      return state;
  }
};

export default favReducer;
