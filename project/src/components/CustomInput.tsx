import React from "react";
import { FaCheckSquare, FaPaintBrush, FaImage } from "react-icons/fa";
import "./CustomInput.css";

interface CustomInputProps {
  onClick: () => void;
}


const CustomInput: React.FC<CustomInputProps> = ({onClick}) => {

  
  return (
    <div className="note-input-container">
      <input type="text" placeholder="Take a note.. ." className="note-input" onClick={onClick} />
      <div className="note-icons">
        <FaCheckSquare className="icon" />
        <FaPaintBrush className="icon" />
        <FaImage className="icon" />
      </div>
    </div>
  );
};

export { CustomInput };
