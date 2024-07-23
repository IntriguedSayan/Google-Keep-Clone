import React from "react";
import "./SingleNote.css";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "../redux/notes-reducer/hooks";
import { deleteNote, getNotes } from "../redux/notes-reducer/action";


interface SingleNoteProps {
  id: number|string;
  title: string;
  content: string;
}

const SingleNote: React.FC<SingleNoteProps> = ({ id, title, content }) => {

  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteNote(id));
    dispatch(getNotes());
  };
  return (
    <div className="single_note">
      <h3 className="title-note">{title}</h3>
      <p>{content}</p>
      <div className="bin-icon-container" onClick={handleDelete}>
        <FaTrash className="bin-icon" />
      </div>
    </div>
  );
};

export { SingleNote };
