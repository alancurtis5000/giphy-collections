import React from "react";

const EditIcon = (props) => {
  const { fill1, height, width, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      className={className}
    >
      <path
        d="M0.75 18.5626V23.2501H5.4375L19.2625 9.42507L14.575 4.73757L0.75 18.5626ZM22.8875 5.80007C23.375 5.31257 23.375 4.52507 22.8875 4.03757L19.9625 1.11257C19.475 0.625073 18.6875 0.625073 18.2 1.11257L15.9125 3.40007L20.6 8.08757L22.8875 5.80007Z"
        fill={fill1}
      />
    </svg>
  );
};

EditIcon.defaultProps = {
  fill1: "#000000",
  height: "50px",
  width: undefined,
  className: undefined,
};

export default EditIcon;
