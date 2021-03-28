import React from "react";
import { SearchBarStyles } from "./search-bar.styles";
import SearchIcon from "../../icons/search.icon";

const SearchBar = (props) => {
  const { value, handleOnChange } = props;
  return (
    <SearchBarStyles className="search-bar">
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <SearchIcon height="30" />
    </SearchBarStyles>
  );
};

SearchBar.defaultProps = {
  value: "None",
  handleOnChange: () => console.log("Missing handle On Change"),
};

export default SearchBar;
