import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import {
  userRegisterReducer,
  userSignInReducer,
} from "./reducers/userReducers";
import { matchListReducer } from "./reducers/matchReducer";
import { teamListReducer } from "./reducers/teamReducer";
import { locationListReducer } from "./reducers/locationReducer";

const initialState = {
  userSignIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userSignIn: userSignInReducer,
  matchList: matchListReducer,
  teamList: teamListReducer,
  locationList: locationListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
