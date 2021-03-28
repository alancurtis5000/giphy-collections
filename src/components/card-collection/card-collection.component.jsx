import React from "react";
import { CardCollectionStyles } from "./card-collection.styles";
import FolderIcon from "../../icons/folder.icon";
import { withRouter } from "react-router-dom";

const CardCollection = (props) => {
  const { title, id, history } = props;
  const handleOnClick = () => {
    history.push(`collection/${id}`);
  };
  return (
    <CardCollectionStyles className="card-gif" onClick={handleOnClick}>
      <FolderIcon />
      <h5 className="title">{title}</h5>
    </CardCollectionStyles>
  );
};

CardCollection.defaultProps = {
  title: "Placeholder",
  id: "",
};

export default withRouter(CardCollection);
