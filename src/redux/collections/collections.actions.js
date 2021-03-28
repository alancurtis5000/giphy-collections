import axios from "axios";
import { collectionsActionTypes } from "./collections.types";
import find from "lodash/find";
import filter from "lodash/filter";

export const getCollectionsStart = () => ({
  type: collectionsActionTypes.GET_COLLECTIONS_START,
});

export const getCollectionsSuccess = (collectionsMap) => ({
  type: collectionsActionTypes.GET_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const getCollectionsFailure = (errorMessage) => ({
  type: collectionsActionTypes.GET_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const getCollections = () => {
  return (dispatch) => {
    dispatch(getCollectionsStart());
    axios
      .get("/collections")
      .then((res) => {
        dispatch(getCollectionsSuccess(res.data));
      })
      .catch((error) => dispatch(getCollectionsFailure(error.message)));
  };
};

export const addNewCollectionStart = () => ({
  type: collectionsActionTypes.COLLECTIONS_ADD_NEW_COLLECTION_START,
});

export const addNewCollectionFailure = (errorMessage) => ({
  type: collectionsActionTypes.COLLECTIONS_ADD_NEW_COLLECTION_FAILURE,
  payload: errorMessage,
});

export const addNewCollection = (name) => {
  return (dispatch) => {
    dispatch(addNewCollectionStart());
    const body = { name, gifs: [] };
    axios
      .post("/collections", body)
      .then(() => {
        dispatch(getCollections());
      })
      .catch((error) => dispatch(addNewCollectionFailure(error.message)));
  };
};

export const addGifToCollectionStart = () => ({
  type: collectionsActionTypes.COLLECTIONS_ADD_GIF_TO_COLLECTION_START,
});

export const addGifToCollectionSuccess = () => ({
  type: collectionsActionTypes.COLLECTIONS_ADD_GIF_TO_COLLECTION_SUCCESS,
});

export const addGifToCollectionFailure = (errorMessage) => ({
  type: collectionsActionTypes.COLLECTIONS_ADD_GIF_TO_COLLECTION_FAILURE,
  payload: errorMessage,
});

export const addGifToCollection = (collectionId, gif) => {
  return (dispatch, getState) => {
    dispatch(addGifToCollectionStart());
    const collections = getState("collections").collections.collections;
    const collection = find(
      collections,
      (collection) => collection.id === collectionId
    );
    const isGifInCollection = find(
      collection.gifs,
      (collectionGif) => collectionGif.id === gif.id
    );
    if (isGifInCollection) {
      dispatch(addGifToCollectionFailure("gif already exists in collection"));
    } else {
      const body = {
        ...collection,
        gifs: [...collection.gifs, gif],
      };
      axios
        .put(`/collections/${collectionId}`, body)
        .then((res) => {
          dispatch(getCollections());
        })
        .catch((error) => dispatch(addGifToCollectionFailure(error.message)));
    }
  };
};

export const deleteCollectionStart = () => ({
  type: collectionsActionTypes.COLLECTIONS_DELETE_START,
});

export const deleteCollectionSuccess = () => ({
  type: collectionsActionTypes.COLLECTIONS_DELETE_SUCCESS,
});

export const deleteCollectionFailure = (errorMessage) => ({
  type: collectionsActionTypes.COLLECTIONS_DELETE_FAILURE,
  payload: errorMessage,
});

export const deleteCollection = (collectionId) => {
  return (dispatch) => {
    dispatch(deleteCollectionStart());
    axios
      .delete(`/collections/${collectionId}`)
      .then(() => {
        dispatch(getCollections());
      })
      .catch((error) => dispatch(deleteCollectionFailure(error.message)));
  };
};

export const editCollectionNameStart = () => ({
  type: collectionsActionTypes.COLLECTIONS_EDIT_NAME_START,
});

export const editCollectionNameFailure = (errorMessage) => ({
  type: collectionsActionTypes.COLLECTIONS_EDIT_NAME_FAILURE,
  payload: errorMessage,
});

export const editCollectionName = (collectionId, collectionName) => {
  return (dispatch, getState) => {
    dispatch(editCollectionNameStart());
    const collections = getState("collections").collections.collections;
    const collection = find(
      collections,
      (collection) => collection.id === collectionId
    );
    const body = {
      ...collection,
      name: collectionName,
    };
    axios
      .put(`/collections/${collectionId}`, body)
      .then((res) => {
        dispatch(getCollections());
      })
      .catch((error) => dispatch(editCollectionNameFailure(error.message)));
  };
};

export const deleteGifStart = () => ({
  type: collectionsActionTypes.COLLECTIONS_DELETE_GIF_START,
});

export const deleteGifFailure = (errorMessage) => ({
  type: collectionsActionTypes.COLLECTIONS_DELETE_GIF_FAILURE,
  payload: errorMessage,
});

export const deleteGif = (collectionId, gifId) => {
  return (dispatch, getState) => {
    dispatch(deleteGifStart());
    const collections = getState("collections").collections.collections;
    const collection = find(
      collections,
      (collection) => collection.id * 1 === collectionId * 1
    );

    const gifRemoved = filter(collection.gifs, (gif) => gifId !== gif.id);
    const body = {
      ...collection,
      gifs: [...gifRemoved],
    };
    axios
      .put(`/collections/${collectionId}`, body)
      .then((res) => {
        dispatch(getCollections());
      })
      .catch((error) => dispatch(deleteGifFailure(error.message)));
  };
};
