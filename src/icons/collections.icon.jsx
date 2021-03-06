import React from "react";

const CollectionsIcon = (props) => {
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
        d="M30 21V3C30 1.35 28.65 0 27 0H9C7.35 0 6 1.35 6 3V21C6 22.65 7.35 24 9 24H27C28.65 24 30 22.65 30 21ZM13.5 15L16.545 19.065L21 13.5L27 21H9L13.5 15ZM0 6V27C0 28.65 1.35 30 3 30H24V27H3V6H0Z"
        fill={fill1}
      />
    </svg>
  );
};

CollectionsIcon.defaultProps = {
  fill1: "#000000",
  height: "50px",
  width: undefined,
  className: undefined,
};

export default CollectionsIcon;
