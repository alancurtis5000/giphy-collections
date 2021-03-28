import React, { useState } from "react";
import { ModalCollectionAddStyles } from "./modal-collection-add.styles";
import { connect } from "react-redux";
import ButtonCustom from "../button-custom/button-custom.component";
import { addNewCollection } from "../../redux/collections/collections.actions";
import { closeModal } from "../../redux/modal/modal.actions";

const ModalCollectionAdd = (props) => {
  const { closeModal, addNewCollection } = props;
  const [collectionName, setCollectionName] = useState("");

  const handleAccept = () => {
    if (collectionName) {
      addNewCollection(collectionName);
      closeModal();
    } else {
      window.alert("You need a Name Value");
    }
  };

  return (
    <ModalCollectionAddStyles>
      <div className="message">
        <div>What is the Name of the collection you want to make?</div>
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
    </ModalCollectionAddStyles>
  );
};

const mapStateToProps = (state) => ({
  modalProps: state.modal.modalProps,
});

const mapDispatchToProps = (dispatch) => ({
  addNewCollection: (id) => dispatch(addNewCollection(id)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalCollectionAdd);
