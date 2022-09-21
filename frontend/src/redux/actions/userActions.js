import Axios from "axios";
import * as actions from "../constants";

export const register =
  (firstName, lastName, email, password) => async (dispatch) => {
    dispatch({
      type: actions.USER_REGISTER_REQUEST,
      payload: { firstName, lastName, email, password },
    });
    try {
      const { data } = await Axios.post("/api/users/register", {
        firstName,
        lastName,
        email,
        password,
      });
      dispatch({ type: actions.USER_REGISTER_SUCCESS, payload: data });
      dispatch({ type: actions.USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: actions.USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: actions.USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/signIn", { email, password });
    dispatch({ type: actions.USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actions.USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("registerInfo");

  dispatch({ type: actions.USER_SIGNIN_SIGNOUT });
  dispatch({ type: actions.USER_REGISTER_REMOVE });
};
