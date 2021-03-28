import { gifsActionTypes } from "./gifs.types";

const initialState = {
  searchValue: "",
  data: [],
  pagination: {},
  error: "",
  isFetching: false,
};

const gifsReducer = (state = initialState, action) => {
  switch (action.type) {
    case gifsActionTypes.GIFS_UPDATE_SEARCH:
      return {
        ...state,
        searchValue: action.payload,
      };
    // GET search gifs
    case gifsActionTypes.GIFS_GET_SEARCH_RESULTS_START:
      return { ...state, isFetching: true };
    case gifsActionTypes.GIFS_GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        data: [...action.payload.data],
        pagination: action.payload.pagination,
        isFetching: false,
      };
    case gifsActionTypes.GIFS_GET_MORE_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        pagination: action.payload.pagination,
        isFetching: false,
      };
    case gifsActionTypes.GIFS_GET_SEARCH_RESULTS_FAILURE:
      return { ...state, errorMessage: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default gifsReducer;
