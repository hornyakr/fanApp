import Axios from "axios";
import * as actions from "../constants";

export const locationListing = () => async (dispatch) => {
  dispatch({ type: actions.LOCATION_ALLLOCATION_REQUEST });
  try {
    const { data } = await Axios.get("/api/locations");
    dispatch({ type: actions.LOCATION_ALLLOCATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actions.LOCATION_ALLLOCATION_FAIL,
      payload: error.message,
    });
  }
};
