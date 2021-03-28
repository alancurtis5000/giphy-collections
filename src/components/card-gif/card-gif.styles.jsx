import styled from "styled-components";

export const CardGifStyles = styled.div`
  margin: 5px 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  img {
    max-height: 115px;
    max-width: 169px;
  }
  .remove-container {
    position: absolute;
  }
`;
