import React, { useState } from "react";
import "./SingleNote.css";
import { FaRegBookmark, FaTrash } from "react-icons/fa";
import { useDispatch } from "../redux/notes-reducer/hooks";
import {
  deleteNote,
  getNotes,
  togglePinItem,
} from "../redux/notes-reducer/action";

interface SingleNoteProps {
  id: number | string;
  title: string;
  content: string;
  isPinned?: boolean;
}

const SingleNote: React.FC<SingleNoteProps> = ({
  id,
  title,
  content,
  isPinned,
}) => {
  const [hoverState, setHoverState] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteNote(id));
    dispatch(getNotes());
  };

  const addNoteToPin = () => {
    console.log(id);
    dispatch(togglePinItem(id));
    dispatch(getNotes());
  };
  const toggleHoverState = () => {
    setHoverState(!hoverState);
  };

  return (
    <div
      className="single_note"
      onMouseEnter={toggleHoverState}
      onMouseLeave={toggleHoverState}
    >
      {isPinned ? (
        <div className="title-container">
          <h3 className="title-note">{title}</h3>
          <div>
            <FaRegBookmark className="bookmark" />
          </div>
        </div>
      ) : (
        <h3
          className="title-note"
          style={{ color: isPinned ? "red" : "white" }}
        >
          {title}
        </h3>
      )}
      <p>{content}</p>
      {hoverState && (
        <div className="single-note-icons">
          <div className="bin-icon-container" onClick={handleDelete}>
            <FaTrash className="bin-icon" />
          </div>
          <div className="bin-icon" onClick={addNoteToPin}>
            📌
          </div>
        </div>
      )}
    </div>
  );
};

export { SingleNote };
