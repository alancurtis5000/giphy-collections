import styled from "styled-components";
import { LightGray } from "../../lib";

export const CollectionStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  width: 100%;

  .header {
    padding: 4px 20px
    background-color: ${LightGray}
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      justify-content: center;
      align-items:center;
      .edit{
        margin: 0 14px;
      }
    }
  }
  
  .results {
    overflow: auto;
    .results-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
