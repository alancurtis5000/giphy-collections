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

/*
Notes:
  - On the CollectionPage I pull the id from the url. On mount I would normally
    fetch data with that id so you can route directly to this page.
    But I already have fetched my data on app mount.
  - example: open new browser and past collection  url "http://localhost:3000/collection/1"
  - expectation: You can route to any url in the app from outside links.
  - I map over the gifs in the collection id from the url
  - pass in the isEdit do I can delete them only on this page.
  - functionality:
    - ability to rename collection
    - delete gifs
    - delete entire collection
*/

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
        <div className="right"></div>
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
