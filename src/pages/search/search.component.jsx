import React from "react";
import SearchBarGifs from "../../components/search-bar-gifs/search-bar-gifs.component";
import { SearchStyles } from "./search.styles";
import DraggableGif from "../../components/draggable-gif/draggable-gif.component";
import Dropzone from "../../components/dropzone/dropzone.component";
import map from "lodash/map";
import AddIcon from "../../icons/add.icon";
import SpinnerIcon from "../../icons/spinner.icon";
import { openModal } from "../../redux/modal/modal.actions";
import { getMoreGifs } from "../../redux/gifs/gifs.actions";
import { connect } from "react-redux";
import { Success, Active } from "../../lib";
import ButtonCustom from "../../components/button-custom/button-custom.component";

const SearchPage = (props) => {
  const { collections, openModal, gifs, getMoreGifs } = props;

  const results = () => {
    const results = map(gifs.data, (gif, index) => {
      return (
        <DraggableGif
          key={index}
          title={gif.title}
          url={gif.images.fixed_height.url}
          id={gif.slug}
        />
      );
    });
    return results;
  };

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

  const renderGetMoreGifs = () => {
    if (gifs.pagination.total_count > 20) {
      if (gifs.pagination.total_count >= gifs.pagination.offset) {
        return (
          <ButtonCustom
            className="custom"
            type="contained"
            color="success"
            onClick={getMoreGifs}
          >
            Get More Gifs!
          </ButtonCustom>
        );
      }
    }
  };

  const renderMessage = () => {
    return (
      <div className="message">
        <h2>Hello welcome to Gif Collector</h2>
        <h4>Start by typing in the search bar.</h4>
      </div>
    );
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
      <div className="results">
        {gifs.isFetching ? <SpinnerIcon fill1={Active} /> : null}
        <div className="results-container">
          {gifs.data.length === 0 ? renderMessage() : results()}
        </div>
        {renderGetMoreGifs()}
      </div>
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
  getMoreGifs: () => dispatch(getMoreGifs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
