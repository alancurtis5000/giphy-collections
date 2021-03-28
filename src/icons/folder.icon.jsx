import React from "react";

const FolderIcon = (props) => {
  const { fill1, height, width, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 57 57"
      height={height}
      width={width}
      className={className}
    >
      <path
        d="M23.8199 9.38525H9.74196C7.161 9.38525 5.07278 11.4969 5.07278 14.0779L5.04932 42.2337C5.04932 44.8147 7.161 46.9264 9.74196 46.9264H47.2831C49.864 46.9264 51.9757 44.8147 51.9757 42.2337V18.7705C51.9757 16.1896 49.864 14.0779 47.2831 14.0779H28.5125L23.8199 9.38525Z"
        fill={fill1}
      />
    </svg>
  );
};

FolderIcon.defaultProps = {
  fill1: "#000000",
  height: "50px",
  width: undefined,
  className: undefined,
};

export default FolderIcon;
