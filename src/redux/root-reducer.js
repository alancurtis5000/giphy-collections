import { combineReducers } from "redux";
import collectionsReducer from "./collections/collections.reducer";
import modalReducer from "./modal/modal.reducer";
import gifsReducer from "./gifs/gifs.reducer";

const rootReducer = combineReducers({
  gifs: gifsReducer,
  modal: modalReducer,
  collections: collectionsReducer,
});

export default rootReducer;
