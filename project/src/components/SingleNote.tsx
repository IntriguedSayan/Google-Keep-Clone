import React from 'react';
import "./SingleNote.css"

interface SingleNoteProps {
  title: string;
  content: string;
}


const SingleNote:React.FC<SingleNoteProps> = ({title, content}) => {
  return (
    <div className='single-note'>
        <h3>{title}</h3>
        <h4>{content}</h4>
    </div>
  )
}

export {SingleNote}