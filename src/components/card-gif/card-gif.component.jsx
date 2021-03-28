import React from "react";
import { CardGifStyles } from "./card-gif.styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { openModal } from "../../redux/modal/modal.actions";

/*
Notes:
   -I used redux to control my universal modal component.
   - on handleRemoveGif it passes ModalId to target a specific modal.
     and passes modalProps that can be accessed by the modal to perform its actions.
  - I pass an isEdit value in when I want the ability to delete gifs
*/

const CardGif = (props) => {
  const { title, url, isEdit, id, match, openModal } = props;
  const collectionId = match.params.id;

  const handleRemoveGif = () => {
    const modalId = "ModalGifDelete";
    const modalProps = {
      modalTitle: "Delete Gif",
      collectionId,
      gifId: id,
      title,
    };
    openModal(modalId, modalProps);
  };

  return (
    <CardGifStyles
      className="card-gif"
      onClick={isEdit ? handleRemoveGif : null}
    >
      <img src={url} alt={`gif ${title}`} />
      <h5 className="title">{title}</h5>
    </CardGifStyles>
  );
};

CardGif.defaultProps = {
  title: "Placeholder",
  url: "",
  isEdit: false,
  id: "0",
};

const mapDispatchToProps = (dispatch) => ({
  openModal: (modalId, modalProps) => dispatch(openModal(modalId, modalProps)),
});
export default connect(null, mapDispatchToProps)(withRouter(CardGif));
