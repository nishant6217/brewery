import axios from "axios";
import * as action from "../constants/breweryConstant";

const URL = "https://api.openbrewerydb.org/breweries";
export const getBrewery = (params,perPage) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/search?query=${params}&per_page=${perPage}`);
    dispatch({ type: action.GET_BREWERY_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: action.GET_BREWERY_FAIL, payload: err.response });
  }
};

export const getBreweryDetailed = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/${id}`);
    dispatch({ type: action.GET_BREWERY_DETAIL_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: action.GET_BREWERY_DETAIL_FAIL, payload: err.response });
  }
};
