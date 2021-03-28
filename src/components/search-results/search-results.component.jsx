import React, { useEffect, useCallback } from "react";
import { SearchResultsStyles } from "./search-results.styles";
import { getMoreGifs } from "../../redux/gifs/gifs.actions";
import { connect } from "react-redux";
import debounce from "lodash/debounce";
import ButtonCustom from "../button-custom/button-custom.component";

const SearchResults = (props) => {
  const { gifs, getMoreGifs } = props;

  const debounceApiCall = useCallback(
    debounce(() => {
      getMoreGifs();
    }, 200),
    []
  );

  const handleScroll = () => {
    const resultsElemtent = document.getElementById("results");
    if (resultsElemtent) {
      const scrollHeight = resultsElemtent.scrollHeight;
      const scrollTop = resultsElemtent.scrollTop;
      const clientHeight = resultsElemtent.clientHeight;
      // once you get 200 px from bottom trigger getMoreGifs()
      if (clientHeight + scrollTop > scrollHeight - 200) {
        debounceApiCall();
      }
    }
  };

  useEffect(() => {
    const resultsElemtent = document.getElementById("results");
    resultsElemtent.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      resultsElemtent.addEventListener("scroll", handleScroll);
    };
  }, []);

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

  return (
    <SearchResultsStyles className="search-results">
      {renderGetMoreGifs()}
    </SearchResultsStyles>
  );
};

const mapStateToProps = (state) => ({
  gifs: state.gifs,
});
const mapDispatchToProps = (dispatch) => ({
  getMoreGifs: () => dispatch(getMoreGifs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
