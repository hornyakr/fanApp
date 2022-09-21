import * as actions from "../constants";

export const matchListReducer = (
  state = { loading: true, matches: [] },
  action
) => {
  switch (action.type) {
    case actions.MATCH_ALLMATCH_REQUEST:
      return { loading: true };
    case actions.MATCH_ALLMATCH_SUCCESS:
      return { loading: false, matches: action.payload };
    case actions.MATCH_ALLMATCH_FAIL:
      return { loading: false, matches: action.payload };
    default:
      return state;
  }
};
