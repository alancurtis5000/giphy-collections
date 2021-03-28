import React from "react";
import { withRouter } from "react-router-dom";
import { ModalCollectionDeleteStyles } from "./modal-collection-delete.styles";
import { connect } from "react-redux";
import ButtonCustom from "../button-custom/button-custom.component";
import { deleteCollection } from "../../redux/collections/collections.actions";
import { closeModal } from "../../redux/modal/modal.actions";

const ModalCollectionDelete = (props) => {
  const { modalProps, history, closeModal, deleteCollection } = props;
  const { collectionName, id } = modalProps;

  const handleAccept = () => {
    deleteCollection(id);
    closeModal();
    history.push("/");
  };

  return (
    <ModalCollectionDeleteStyles>
      <div className="message">
        <div>Are you sure you want to delete.</div>
        <h3>{`"${collectionName}"`}</h3>
      </div>
      <div className="button-container">
        <ButtonCustom type="contained" color="warning" onClick={closeModal}>
          Cancel
        </ButtonCustom>
        <ButtonCustom type="contained" color="success" onClick={handleAccept}>
          Accept
        </ButtonCustom>
      </div>
    </ModalCollectionDeleteStyles>
  );
};

const mapStateToProps = (state) => ({
  modalProps: state.modal.modalProps,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCollection: (id) => dispatch(deleteCollection(id)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ModalCollectionDelete));
