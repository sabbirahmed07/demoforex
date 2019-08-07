/* 

  ActionCreators -> create/return Actions ({ }) -> dispatched -> middlewares -> reducers

*/

import axios from "axios";
import * as actionTypes from "./actionTypes";

export const signUp = data => {
  /* step 1) use the form data and to make http req to be and send it along [x]
       step 2) take the be's respnse (jwtToken is here now)[x]
       step 3) dispatch user just signed up (with jwtToken)[x]
       step 4) save the jwtToken into our localStorage[x]
    */
  return async dispatch => {
    try {
      // console.log("Action creator is called");
      const res = await axios.post("http://localhost:5000/users/signup", data);

      // console.log("Action creator dispatch is called");
      dispatch({
        type: actionTypes.AUTH_SIGNUP,
        payload: res.data.token
      });

      localStorage.setItem("JWT_TOKEN", res.data.token);
    } catch (error) {
      dispatch({
        type: actionTypes.AUTH_ERROR,
        payload: "Email is already in use or your data is invalid"
      });
    }
  };
};

export const signIn = data => {
  /* step 1) use the form data and to make http req to be and send it along [x]
       step 2) take the be's respnse (jwtToken is here now)[x]
       step 3) dispatch user just signed up (with jwtToken)[x]
       step 4) save the jwtToken into our localStorage[x]
    */

  return async dispatch => {
    try {
      // console.log("Action creator is called");
      console.log(data);
      const res = await axios.post("http://localhost:5000/users/signin", data);

      // console.log("Action creator dispatch is called");
      dispatch({
        type: actionTypes.AUTH_SIGNIN,
        payload: res.data.token
      });

      localStorage.setItem("JWT_TOKEN", res.data.token);
    } catch (error) {
      dispatch({
        type: actionTypes.AUTH_ERROR,
        payload: "Email or password is incorrect"
      });
    }
  };
};

export const oauthGoogle = data => {
  return async dispatch => {
    // console.log("we recieved", data);
    const res = await axios.post("http://localhost:5000/users/oauth/google", {
      access_token: data
    });

    dispatch({
      type: actionTypes.AUTH_SIGNIN,
      payload: res.data.token
    });
    localStorage.setItem("JWT_TOKEN", res.data.token);
    axios.defaults.headers.common["Authorization"] = res.data.token;
  };
};

export const oauthFacebook = data => {
  return async dispatch => {
    // console.log("we recieved", data);
    const res = await axios.post("http://localhost:5000/users/oauth/facebook", {
      access_token: data
    });

    dispatch({
      type: actionTypes.AUTH_SIGNIN,
      payload: res.data.token
    });
    localStorage.setItem("JWT_TOKEN", res.data.token);
    axios.defaults.headers.common["Authorization"] = res.data.token;
  };
};

export const logOut = () => {
  return dispatch => {
    localStorage.removeItem("JWT_TOKEN");
    dispatch({
      type: actionTypes.AUTH_LOGOUT,
      payload: ""
    });
  };
};
