import styled from "styled-components";
import { Active } from "../../lib";

export const CardCollectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 5px;
  &:hover {
    background-color: ${Active};
  }
  .star {
    position: relative;
    bottom: 33px;
  }
`;
