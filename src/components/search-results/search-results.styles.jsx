import styled from "styled-components";
export const SearchResultsStyles = styled.div`
  display: flex;
  justify-content: center;
  overflow: auto;
  .results {
    grid-area: results;
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    .custom {
      min-height: 30px;
    }
    .results-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      .message {
        margin-top: 40px;
        text-align: center;
      }
    }
  }
`;
