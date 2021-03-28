import React from "react";
import { CardGifStyles } from "./card-gif.styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { openModal } from "../../redux/modal/modal.actions";

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
      {/* <h5 className="title">{title}</h5> */}
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
