import styled, { css } from "styled-components";
import {
  White,
  Black,
  Success,
  SuccessHover,
  Warning,
  WarningHover,
} from "../../lib";

const buttonStyles = css`
  background-color: transparent;
  color: ${Black};
  border: none;
  margin-left: 5px;
  &:hover {
    background-color: ${White};
    color: black;
  }
`;

const buttonContainedStyles = css`
  background-color: black;
  color: ${White};
  border: none;
  margin-left: 5px;
  &:hover {
    background-color: ${White};
    color: black;
  }
`;

const svgStyles = css`
  margin: 0px;
  padding: 0px;
  margin-left: 10px;
  &:hover {
    color: black;
  }
`;

const success = css`
  background-color: ${Success};
  color: ${White};
  &:hover {
    background-color: ${SuccessHover};
    color: ${White};
  }
`;
const warning = css`
  background-color: ${Warning};
  color: ${White};
  &:hover {
    background-color: ${WarningHover};
    color: ${White};
  }
`;

const getColor = (props) => {
  switch (props.color) {
    case "success":
      return success;
    case "warning":
      return warning;
    default:
      break;
  }
};

const getButtonStyles = (props) => {
  return props.type === "contained" ? buttonContainedStyles : buttonStyles;
};

export const ButtonCustomStyles = styled.button`
  border-radius: 5px 5px 5px 5px;
  min-width: 100px;
  padding: 0 10px;
  width: auto;
  height: 40px;
  font-weight: bolder;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${getButtonStyles}
  ${getColor}
  svg {
    ${svgStyles}
  }
`;
