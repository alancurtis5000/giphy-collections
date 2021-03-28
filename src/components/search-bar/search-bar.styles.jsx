import styled from "styled-components";
import { Active } from "../../lib";

export const SearchBarStyles = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%
  max-width: 500px;
  margin: 0 5px;
  input {
    height: 30px;
    padding-right: 30px;
    font-size: 16px;
    width: 100%;
    &:focus{
      outline: 2px solid ${Active};
      border:none;
    }
  }
  svg {
    position: absolute;
    right: 0px;
  }
`;
