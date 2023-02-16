// qui si definisce la nostra funziona reducer
// il reducer prende lo stato corrente dell'app, prende anche l'azione che gli arriva dopo un dispatch

// si setta uno stato iniziale
const initialState = {
  cart: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mainReducer;
