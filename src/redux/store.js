import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getBreweryReducer,
  getBreweryDetailReducer,
} from "./reducers/breweryReducer";

const reducer = combineReducers({
  getBrewery: getBreweryReducer,
  getRestroDetail: getBreweryDetailReducer,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
