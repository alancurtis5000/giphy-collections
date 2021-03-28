import React from "react";
import SearchBarGifs from "../../components/search-bar-gifs/search-bar-gifs.component";
import { SearchStyles } from "./search.styles";
import Dropzone from "../../components/dropzone/dropzone.component";
import map from "lodash/map";
import AddIcon from "../../icons/add.icon";
import { openModal } from "../../redux/modal/modal.actions";
import { connect } from "react-redux";
import { Success } from "../../lib";
import SearchResults from "../../components/search-results/search-results.component";

const SearchPage = (props) => {
  const { collections, openModal } = props;

  const collectionsMap = () => {
    let array = map(collections, (collection) => (
      <Dropzone key={collection.id} name={collection.name} id={collection.id} />
    ));
    return array;
  };

  const handleAddNewCollection = () => {
    const modalId = "ModalCollectionAdd";
    const modalProps = { modalTitle: "Create New Collection" };
    openModal(modalId, modalProps);
  };

  return (
    <SearchStyles className="page">
      <div className="search-bar-container">
        <SearchBarGifs />
      </div>
      <div className="collections-title">
        <h5>Collections</h5>
        <div className="add" onClick={handleAddNewCollection}>
          <AddIcon height="28" fill1={Success} />
        </div>
      </div>

      <SearchResults />
      <div className="collections">
        <div className="collections-container">{collectionsMap()}</div>
      </div>
    </SearchStyles>
  );
};

const mapStateToProps = (state) => ({
  collections: state.collections.collections,
  gifs: state.gifs,
});
const mapDispatchToProps = (dispatch) => ({
  openModal: (modalId, modalProps) => dispatch(openModal(modalId, modalProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
