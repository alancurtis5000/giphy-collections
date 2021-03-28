import { modalActionTypes } from "./modal.types";

const initialState = {
  isOpen: false,
  id: "",
  modalProps: {},
};

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalActionTypes.OPEN_MODAL:
      return {
        ...state,
        id: action.payload.modalId,
        modalProps: action.payload.modalProps,
        isOpen: true,
      };
    case modalActionTypes.CLOSE_MODAL:
      return { ...initialState };
    default:
      return state;
  }
};

export default collectionsReducer;
