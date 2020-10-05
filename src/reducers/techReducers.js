import {
  ADD_TECH,
  SET_LOADING,
  LOGS_ERROR,
  GET_TECHS,
  DELETE_TECH,
} from "../actions/types";

const initialState = {
  techs: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TECH:
      console.log(action);
      return {
        ...state,
        techs: [action.payload, ...state.techs],
        loading: false,
        error: null,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
        loading: false,
      };
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
        error: null,
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
