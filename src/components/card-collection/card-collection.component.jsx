import React from "react";
import { CardCollectionStyles } from "./card-collection.styles";
import FolderIcon from "../../icons/folder.icon";
import { withRouter } from "react-router-dom";
import StarIcon from "../../icons/star.icon";

const CardCollection = (props) => {
  const { title, id, isShared, history } = props;
  const handleOnClick = () => {
    history.push(`collection/${id}`);
  };
  return (
    <CardCollectionStyles className="card-gif" onClick={handleOnClick}>
      <FolderIcon />
      {isShared ? (
        <StarIcon className="star" fill1={"gold"} height="20" />
      ) : null}
      <h5 className="title">{title}</h5>
    </CardCollectionStyles>
  );
};

CardCollection.defaultProps = {
  title: "Placeholder",
  id: "",
  isShared: false,
};

export default withRouter(CardCollection);
