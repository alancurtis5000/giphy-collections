import React from "react";
import { ModalStyles } from "./modal.styles";
import { closeModal } from "../../redux/modal/modal.actions";
import { connect } from "react-redux";
import ModalCollectionDelete from "../modal-collection-delete/modal-collection-delete";
import ModalCollectionAdd from "../modal-collection-add/modal-collection-add";
import ModalCollectionEditName from "../modal-collection-edit-name/modal-collection-edit-name";
import ModalGifDelete from "../modal-gif-delete/modal-gif-delete";

/*
Notes:
   - Model is my global modal component.
   - it houses all the modals and switches which one is being displayed by id.
   - modalProps are then spread in to give added functionality.
   - mapStateToProps: the modal redux state is the one source for all modals.
*/

const Modal = (props) => {
  const { modal, closeModal } = props;
  const { id, modalProps, isOpen } = modal;
  let content;
  switch (id) {
    case "ModalGifDelete":
      content = <ModalGifDelete {...modalProps} />;
      break;
    case "ModalCollectionEditName":
      content = <ModalCollectionEditName {...modalProps} />;
      break;
    case "ModalCollectionDelete":
      content = <ModalCollectionDelete {...modalProps} />;
      break;
    case "ModalCollectionAdd":
      content = <ModalCollectionAdd {...modalProps} />;
      break;
    default:
      content = <div>No Modal</div>;
      break;
  }

  return (
    <ModalStyles
      className="Modal"
      style={{
        display: isOpen ? "flex" : "none",
      }}
    >
      <div className="container">
        <div className="header">
          <h3 className="title">{modalProps.modalTitle}</h3>
          <button className="x-button" onClick={closeModal}>
            X
          </button>
        </div>
        <div className="modal-content">
          <div className="content">{content}</div>
        </div>
      </div>
    </ModalStyles>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

const mapStateToProps = (state) => ({
  modal: state.modal,
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
