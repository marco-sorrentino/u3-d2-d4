import { GET_JOB } from "../actions";

const initialState = {
  results: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default jobReducer;
