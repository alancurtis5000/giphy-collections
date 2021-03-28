import React from "react";
import { useDrop } from "react-dnd";
import CardCollection from "../card-collection/card-collection.component";

/*
Notes:
   -Dropzone is just extra functionality added to the CardCollection
*/

const DndTypes = {
  RESULT: "result",
};

const Dropzone = (props) => {
  const { name, id } = props;
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: DndTypes.RESULT,
    drop: (item, monitor) => {
      return { name, id };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop}>
      <CardCollection title={name} id={id} />
    </div>
  );
};

export default Dropzone;

Dropzone.defaultProps = {
  name: "Placeholder",
  id: "",
};
