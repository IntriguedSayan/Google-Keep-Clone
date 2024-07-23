import React from 'react';
import "./SingleNote.css"
import { FaTrash } from 'react-icons/fa';

interface SingleNoteProps {
  title: string;
  content: string;
}


const SingleNote:React.FC<SingleNoteProps> = ({title, content}) => {
  return (
    <div className='single_note'>
        <h3 className='title-note'>{title}</h3>
        <p>{content}</p>
    <div className="bin-icon-container">
        <FaTrash className="bin-icon" />
    </div>
    </div>
  )
}

export {SingleNote}