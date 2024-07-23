import React, { useEffect, useRef } from "react";
import { BsPinAngle } from "react-icons/bs";
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

export interface inputState {
  title?: string;
  content: string;
}

interface DoubleInputProps {
  onClick: () => void;
  inputState: inputState;
  setInputState: (state: inputState) => void;
}

const DoubleInput: React.FC<DoubleInputProps> = ({
  onClick,
  inputState,
  setInputState,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputState({ ...inputState, [name]: value });
  };

  useEffect(() => {
    ref && ref.current?.focus();
  }, []);

  return (
    <>
      <div className="DoubleInput_container">
        <div className="top_input">
          <input
            className="top_note_input"
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Title"
          />
          <div>
            <BsPinAngle className="toolbar-icon" />
          </div>
        </div>
        <div className="bottom_input">
          <input
            className="bottom_note_input"
            type="text"
            name="content"
            onChange={handleChange}
            placeholder="Take a note..."
            ref={ref}
          />
        </div>
        <div className="toolbar">
          {icons.map((elem, index) => (
            <div key={index}>{elem.icon}</div>
          ))}
          <div className="toolbar-close" onClick={onClick}>
            Close
          </div>
        </div>
      </div>
    </>
  );
};

export { DoubleInput };
