import { modalActionTypes } from "./modal.types";

export const openModal = (modalId, modalProps) => ({
  type: modalActionTypes.OPEN_MODAL,
  payload: { modalId, modalProps },
});

export const closeModal = () => ({
  type: modalActionTypes.CLOSE_MODAL,
});
