import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  token: "",
  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SIGNUP:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: false,
        errorMessage: ""
      };
    case actionTypes.AUTH_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
    case actionTypes.AUTH_SIGNIN:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        errorMessage: ""
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: action.payload,
        errorMessage: ""
      };
    default:
      return state;
  }
};
