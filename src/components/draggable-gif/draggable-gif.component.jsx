import React from "react";
import { useDrag } from "react-dnd";
import CardGif from "../card-gif/card-gif.component";
import { connect } from "react-redux";
import { addGifToCollection } from "../../redux/collections/collections.actions";

const DndTypes = {
  RESULT: "result",
};

const DraggableGif = (props) => {
  const { title, url, id, addGifToCollection } = props;
  const [{ isDragging }, drag] = useDrag({
    item: { all: props, type: DndTypes.RESULT },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        const collectionId = dropResult.id;
        const gif = {
          title,
          url,
          id,
        };
        addGifToCollection(collectionId, gif);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div className="draggable-container" ref={drag}>
      <CardGif title={title} url={url} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addGifToCollection: (collectionsId, gif) =>
    dispatch(addGifToCollection(collectionsId, gif)),
});
export default connect(null, mapDispatchToProps)(DraggableGif);
