import React from "react";

const TrashIcon = (props) => {
  const { fill1, height, width, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 18"
      height={height}
      width={width}
      className={className}
    >
      <path
        d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3.46 8.88L4.87 7.47L7 9.59L9.12 7.47L10.53 8.88L8.41 11L10.53 13.12L9.12 14.53L7 12.41L4.88 14.53L3.47 13.12L5.59 11L3.46 8.88ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z"
        fill={fill1}
      />
    </svg>
  );
};

TrashIcon.defaultProps = {
  fill1: "#000000",
  height: "50px",
  width: undefined,
  className: undefined,
};

export default TrashIcon;
