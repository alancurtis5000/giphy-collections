import React from "react";

const CheckmarkIcon = (props) => {
  const { fill1, height, width, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      height={height}
      width={width}
      className={className}
    >
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
        fill={fill1}
      />
    </svg>
  );
};

CheckmarkIcon.defaultProps = {
  fill1: "#000000",
  height: "50px",
  width: undefined,
  className: undefined,
};

export default CheckmarkIcon;
