import * as actions from "../constants";

export const teamListReducer = (
  state = { loading: true, teams: [] },
  action
) => {
  switch (action.type) {
    case actions.TEAM_ALLTEAM_REQUEST:
      return { loading: true };
    case actions.TEAM_ALLTEAM_SUCCESS:
      return { loading: false, teams: action.payload };
    case actions.TEAM_ALLTEAM_FAIL:
      return { loading: false, teams: action.payload };
    default:
      return state;
  }
};
