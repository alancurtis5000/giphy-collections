import React from "react";
import { ButtonCustomStyles } from "./button-custome.styles";

/*
Notes:
  - Custom Button that will accepts color title type prop to switch
  - This is used throughout the app but a good example is 
    src\components\modal-collection-add\modal-collection-add.jsx
    This ensures continuity between components
  - In styles file is where it handles the logic for picking the color.
*/

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
