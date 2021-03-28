import React from "react";
import { ButtonCustomStyles } from "./button-custome.styles";

const ButtonCustom = ({ children, ...props }) => {
  return (
    <ButtonCustomStyles className="custom-button" {...props}>
      <div>{props.title}</div>
      {children}
    </ButtonCustomStyles>
  );
};

ButtonCustom.defaultProps = {
  type: "default", // default, contained
  title: "",
  color: "default", // success, warning
};

export default ButtonCustom;
