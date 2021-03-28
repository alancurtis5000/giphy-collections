import React, { useCallback } from "react";
import { connect } from "react-redux";
import { updateGifsSearch } from "../../redux/gifs/gifs.actions";
import debounce from "lodash/debounce";
import SearchBar from "../search-bar/search-bar.component";
import { getGifsSearchResults } from "../../redux/gifs/gifs.actions";

const SearchBarGifs = (props) => {
  const { updateGifsSearch, searchValue, getGifsSearchResults } = props;

  const debounceApiCall = useCallback(
    debounce((searchValue) => {
      getGifsSearchResults(searchValue);
    }, 600),
    []
  );

  const handleOnChange = (value) => {
    updateGifsSearch(value);
    debounceApiCall(value);
  };

  return <SearchBar value={searchValue} handleOnChange={handleOnChange} />;
};

const mapStateToProps = (state) => ({
  searchValue: state.gifs.searchValue,
});

const mapDispatchToProps = (dispatch) => ({
  updateGifsSearch: (value) => dispatch(updateGifsSearch(value)),
  getGifsSearchResults: (searchValue) =>
    dispatch(getGifsSearchResults(searchValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarGifs);
