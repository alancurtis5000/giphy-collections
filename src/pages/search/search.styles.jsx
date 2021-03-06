import styled from "styled-components";

export const SearchStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 108px;
  grid-template-rows: 38px 1fr;
  width: 100%;
  grid-template-areas:
    "search-bar-container collections-title"
    "results collections";

  .search-bar-container {
    grid-area: search-bar-container;
    display: flex;
    justify-content: center;
  }
  .collections-title {
    grid-area: collections-title;
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    .add {
      margin: 0 5px;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .collections {
    grid-area: collections;
    overflow: auto;
    .collections-container {
      display: flex;
      flex-direction: column;
    }
  }
`;
