import * as actionType from "../constants/breweryConstant";

export const getBreweryReducer = (state = { brewery: [] }, action) => {
  switch (action.type) {
    case actionType.GET_BREWERY_SUCCESS:
      return { brewery: action.payload };

    case actionType.GET_BREWERY_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const getBreweryDetailReducer = (state = { brewery: {} }, action) => {
  switch (action.type) {
    case actionType.GET_BREWERY_DETAIL_SUCCESS:
      return { brewery: action.payload };
    case actionType.GET_BREWERY_DETAIL_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
