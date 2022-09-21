import * as actions from "../constants";

export const locationListReducer = (
  state = { loading: true, locations: [] },
  action
) => {
  switch (action.type) {
    case actions.LOCATION_ALLLOCATION_REQUEST:
      return { loading: true };
    case actions.LOCATION_ALLLOCATION_SUCCESS:
      return { loading: false, locations: action.payload };
    case actions.LOCATION_ALLLOCATION_FAIL:
      return { loading: false, locations: action.payload };
    default:
      return state;
  }
};
