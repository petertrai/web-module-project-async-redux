import data from "../data/gifsdata";
import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../actions";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        data: [],
        loading: true,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;
