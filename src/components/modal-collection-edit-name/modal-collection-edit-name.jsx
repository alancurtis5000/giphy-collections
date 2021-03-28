import React, { useState } from "react";
import { ModalCollectionEditNameStyles } from "./modal-collection-edit-name.styles";
import { connect } from "react-redux";
import ButtonCustom from "../button-custom/button-custom.component";
import { editCollectionName } from "../../redux/collections/collections.actions";
import { closeModal } from "../../redux/modal/modal.actions";
import { withRouter } from "react-router-dom";

const ModalCollectionEditName = (props) => {
  const { closeModal, editCollectionName, id, collectionName } = props;
  const [updatedCollectionName, setCollectionName] = useState("");

  const handleAccept = () => {
    if (updatedCollectionName) {
      editCollectionName(id, updatedCollectionName);
      closeModal();
    } else {
      window.alert("You need a Name Value");
    }
  };

  return (
    <ModalCollectionEditNameStyles>
      <div className="message">
        <div>What do you want to change {collectionName} to?</div>
        <input
          type="text"
          name="collection-name"
          onChange={(e) => setCollectionName(e.target.value)}
        />
      </div>
      <div className="button-container">
        <ButtonCustom type="contained" color="warning" onClick={closeModal}>
          Cancel
        </ButtonCustom>
        <ButtonCustom type="contained" color="success" onClick={handleAccept}>
          Accept
        </ButtonCustom>
      </div>
    </ModalCollectionEditNameStyles>
  );
};

const mapStateToProps = (state) => ({
  modalProps: state.modal.modalProps,
});

const mapDispatchToProps = (dispatch) => ({
  editCollectionName: (id, collectionName) =>
    dispatch(editCollectionName(id, collectionName)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ModalCollectionEditName));
