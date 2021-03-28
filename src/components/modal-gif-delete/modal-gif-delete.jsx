import React from "react";
import { ModalGifDeleteStyles } from "./modal-gif-delete.styles";
import { connect } from "react-redux";
import ButtonCustom from "../button-custom/button-custom.component";
import { deleteGif } from "../../redux/collections/collections.actions";
import { closeModal } from "../../redux/modal/modal.actions";

const ModalGifDelete = (props) => {
  const { modalProps, closeModal, deleteGif } = props;
  const { gifId, collectionId, title } = modalProps;

  const handleAccept = () => {
    deleteGif(collectionId, gifId);
    closeModal();
  };

  return (
    <ModalGifDeleteStyles>
      <div className="message">
        <div>Are you sure you want to delete.</div>
        <h3>{`"${title}"`}</h3>
      </div>
      <div className="button-container">
        <ButtonCustom type="contained" color="warning" onClick={closeModal}>
          Cancel
        </ButtonCustom>
        <ButtonCustom type="contained" color="success" onClick={handleAccept}>
          Accept
        </ButtonCustom>
      </div>
    </ModalGifDeleteStyles>
  );
};

const mapStateToProps = (state) => ({
  modalProps: state.modal.modalProps,
});

const mapDispatchToProps = (dispatch) => ({
  deleteGif: (collectionId, gifId) => dispatch(deleteGif(collectionId, gifId)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalGifDelete);
