import Axios from "axios";
import * as actions from "../constants";

export const matchListing = () => async (dispatch) => {
  dispatch({ type: actions.MATCH_ALLMATCH_REQUEST });
  try {
    const { data } = await Axios.get("/api/matches");
    dispatch({ type: actions.MATCH_ALLMATCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actions.MATCH_ALLMATCH_FAIL,
      payload: error.message,
    });
  }
};
