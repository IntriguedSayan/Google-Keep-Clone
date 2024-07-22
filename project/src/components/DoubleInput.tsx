import React, { useEffect, useRef } from "react";
import {
  FaBell,
  FaUserPlus,
  FaQuestionCircle,
  FaImage,
  FaClipboard,
  FaEllipsisH,
  FaUndo,
  FaRedo,
} from "react-icons/fa";
import "./DoubleInput.css";
const icons = [
  {
    icon: <FaBell className="toolbar-icon" />,
  },
  {
    icon: <FaUserPlus className="toolbar-icon" />,
  },
  {
    icon: <FaQuestionCircle className="toolbar-icon" />,
  },
  {
    icon: <FaImage className="toolbar-icon" />,
  },
  {
    icon: <FaClipboard className="toolbar-icon" />,
  },
  {
    icon: <FaEllipsisH className="toolbar-icon" />,
  },
  {
    icon: <FaUndo className="toolbar-icon" />,
  },
  {
    icon: <FaRedo className="toolbar-icon" />,
  },
];

interface DoubleInputProps{
  onClick: () => void;
}

const DoubleInput: React.FC<DoubleInputProps> = ({onClick}) => {

  const ref = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    ref && ref.current?.focus();
  },[])

  return (
    <>
      <div className="DoubleInput_container">
        <div className="top_input">
          <input className="top_note_input" type="text" placeholder="Title" />
          <div>📌</div>
        </div>
        <div className="bottom_input">
          <input
            className="bottom_note_input"
            type="text"
            placeholder="Take a note..."
            ref={ref}
          />
        </div>
        <div className="toolbar">
          {
            icons.map((elem,index)=>(
              <div key={index}>{elem.icon}</div>
            ))
          }
          <div className="toolbar-close" onClick={onClick}>Close</div>
        </div>
      </div>
    </>
  );
};

export { DoubleInput };
