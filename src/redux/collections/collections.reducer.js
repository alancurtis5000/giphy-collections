import { collectionsActionTypes } from "./collections.types";

/*
Notes:
  - Using redux thunk pattern to 
    - Start: tiggers the isFetching / loading status,
    - Success: assigns the results to redux [collections]
    - Failure: catches the error and puts that in the errorMessage.
*/

const initialState = {
  collections: [],
  isFetching: false,
  errorMessage: "",
};

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET Collections
    case collectionsActionTypes.GET_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case collectionsActionTypes.GET_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    case collectionsActionTypes.GET_COLLECTIONS_FAILURE:
      return { ...state, errorMessage: action.payload, isFetching: false };
    // UPDATE collection
    // ADD gif to collection
    case collectionsActionTypes.COLLECTIONS_ADD_GIF_TO_COLLECTION_START:
      return { ...state, isFetching: true };
    case collectionsActionTypes.COLLECTIONS_ADD_GIF_TO_COLLECTION_SUCCESS:
      return { ...state, isFetching: false };
    case collectionsActionTypes.COLLECTIONS_ADD_GIF_TO_COLLECTION_FAILURE:
      return { ...state, errorMessage: action.payload, isFetching: false };
    // EDIT name on collection
    case collectionsActionTypes.COLLECTIONS_EDIT_NAME_START:
      return { ...state, isFetching: true };
    case collectionsActionTypes.COLLECTIONS_EDIT_NAME_SUCCESS:
      return { ...state, isFetching: false };
    case collectionsActionTypes.COLLECTIONS_EDIT_NAME_FAILURE:
      return { ...state, errorMessage: action.payload, isFetching: false };
    // POST new collection to collections
    case collectionsActionTypes.COLLECTIONS_ADD_NEW_COLLECTION_START:
      return { ...state, isFetching: true };
    case collectionsActionTypes.COLLECTIONS_ADD_NEW_COLLECTION_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    case collectionsActionTypes.COLLECTIONS_ADD_NEW_COLLECTION_FAILURE:
      return { ...state, errorMessage: action.payload, isFetching: false };
    // DELETE collection
    case collectionsActionTypes.COLLECTIONS_DELETE_START:
      return { ...state, isFetching: true };
    case collectionsActionTypes.COLLECTIONS_DELETE_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    case collectionsActionTypes.COLLECTIONS_DELETE_FAILURE:
      return { ...state, errorMessage: action.payload, isFetching: false };
    // DELETE gif from collection
    case collectionsActionTypes.COLLECTIONS_DELETE_GIF_START:
      return { ...state, isFetching: true };
    case collectionsActionTypes.COLLECTIONS_DELETE_GIF_FAILURE:
      return { ...state, errorMessage: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default collectionsReducer;
