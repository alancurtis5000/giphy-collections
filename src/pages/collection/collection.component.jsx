import React from "react";
import { CollectionStyles } from "./collection.styles";
import CardGif from "../../components/card-gif/card-gif.component";
import map from "lodash/map";
import find from "lodash/find";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import EditIcon from "../../icons/edit.icon";
import TrashIcon from "../../icons/trash.icon";
import { openModal } from "../../redux/modal/modal.actions";
import { Warning } from "../../lib";
import ButtonCustom from "../../components/button-custom/button-custom.component";
import StarIcon from "../../icons/star.icon";

const CollectionPage = (props) => {
  const { collections, match, openModal } = props;
  const collectionId = match.params.id;
  const collection = find(
    collections,
    (collection) => collection.id.toString() === collectionId.toString()
  );

  const gifMap = () => {
    if (!collection) return;
    const gifs = map(collection.gifs, (gif, index) => {
      return (
        <CardGif
          key={index}
          title={gif.title}
          isEdit={true}
          url={gif.url}
          id={gif.id}
        />
      );
    });

    return gifs;
  };

  const handleDeleteCollection = () => {
    const modalId = "ModalCollectionDelete";
    const modalProps = {
      modalTitle: "Delete Collection",
      collectionName: get(collection, "name", ""),
      id: get(collection, "id", ""),
    };
    openModal(modalId, modalProps);
  };

  const handleEditCollectionName = () => {
    const modalId = "ModalCollectionEditName";
    const modalProps = {
      modalTitle: "Edit Collection Name",
      collectionName: get(collection, "name", ""),
      id: get(collection, "id", ""),
    };
    openModal(modalId, modalProps);
  };

  const handleShareCollection = () => {
    console.log("handle Share collection");
  };

  const renderShareCollectionButton = () => {
    if (!collection) return;
    if (collection.isShared) {
      return (
        <ButtonCustom type="contained" onClick={handleShareCollection}>
          Stop Sharing {<StarIcon fill1="gold" height="20" />}
        </ButtonCustom>
      );
    } else {
      return (
        <ButtonCustom type="contained" onClick={handleShareCollection}>
          Share Collection {<StarIcon fill1="grey" height="20" />}
        </ButtonCustom>
      );
    }
  };

  return (
    <CollectionStyles className="page">
      <div className="header">
        <div className="left">
          <div className="trash" onClick={handleDeleteCollection}>
            <TrashIcon height="26px" fill1={Warning} />
          </div>
          <div className="edit" onClick={handleEditCollectionName}>
            <EditIcon height="24px" />
          </div>
          <h4 className="collection-name">{get(collection, "name", "")}</h4>
        </div>
        <div className="right">{renderShareCollectionButton()}</div>
      </div>
      <div className="results">
        <div className="results-container">{gifMap()}</div>
      </div>
    </CollectionStyles>
  );
};

const mapStateToProps = (state) => ({
  collections: state.collections.collections,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modalId, modalProps) => dispatch(openModal(modalId, modalProps)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CollectionPage));
