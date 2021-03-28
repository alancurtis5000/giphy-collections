import React, { useEffect, useCallback } from "react";
import { SearchResultsStyles } from "./search-results.styles";
import { getMoreGifs } from "../../redux/gifs/gifs.actions";
import { connect } from "react-redux";
import debounce from "lodash/debounce";
import map from "lodash/map";
import ButtonCustom from "../button-custom/button-custom.component";
import DraggableGif from "../draggable-gif/draggable-gif.component";
import SpinnerIcon from "../../icons/spinner.icon";
import { Active } from "../../lib";

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
    <SearchResultsStyles className="search-results">
      <div className="results" id="results">
        {gifs.isFetching ? <SpinnerIcon fill1={Active} /> : null}
        <div className="results-container">
          {gifs.data.length === 0 ? renderMessage() : results()}
        </div>
        {renderGetMoreGifs()}
      </div>
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
