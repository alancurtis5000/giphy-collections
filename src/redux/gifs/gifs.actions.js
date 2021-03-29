import { gifsActionTypes } from "./gifs.types";
import axios from "axios";
import { gifDummyData } from "./gifs.data";

export const updateGifsSearch = (value) => ({
  type: gifsActionTypes.GIFS_UPDATE_SEARCH,
  payload: value,
});

export const getGifsSearchResultsStart = () => ({
  type: gifsActionTypes.GIFS_GET_SEARCH_RESULTS_START,
});

export const getGifsSearchResultsSuccess = (data) => ({
  type: gifsActionTypes.GIFS_GET_SEARCH_RESULTS_SUCCESS,
  payload: data,
});

export const getGifsSearchResultsFailure = (errorMessage) => ({
  type: gifsActionTypes.GIFS_GET_SEARCH_RESULTS_FAILURE,
  payload: errorMessage,
});

export const getGifsSearchResults = (searchValue) => {
  return (dispatch) => {
    dispatch(getGifsSearchResultsStart());
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=20&offset=0&rating=pg-13&q=${searchValue}`
      )
      .then((res) => {
        dispatch(getGifsSearchResultsSuccess(res.data));
      })
      .catch((error) => dispatch(getGifsSearchResultsFailure(error.message)));
  };
};

export const getMoreGifsSuccess = (data) => ({
  type: gifsActionTypes.GIFS_GET_MORE_SEARCH_RESULTS_SUCCESS,
  payload: data,
});

export const getMoreGifs = () => {
  return (dispatch, getState) => {
    const currentGifsState = getState().gifs;
    const { pagination, searchValue } = currentGifsState;
    const updateOffset = pagination.offset + 20;

    dispatch(getGifsSearchResultsStart());
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=20&offset=${updateOffset}&rating=pg-13&q=${searchValue}`
      )
      .then((res) => {
        dispatch(getMoreGifsSuccess(res.data));
      })
      .catch((error) => dispatch(getGifsSearchResultsFailure(error.message)));
  };
};
