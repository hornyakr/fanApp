import Axios from "axios";
import * as actions from "../constants";

export const teamListing = () => async (dispatch) => {
  dispatch({ type: actions.TEAM_ALLTEAM_REQUEST });
  try {
    const { data } = await Axios.get("/api/teams");
    dispatch({ type: actions.TEAM_ALLTEAM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actions.TEAM_ALLTEAM_FAIL,
      payload: error.message,
    });
  }
};
