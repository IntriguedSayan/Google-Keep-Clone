import React from 'react';
import "./SingleNote.css"

interface SingleNoteProps {
  title: string;
  content: string;
}


const SingleNote:React.FC<SingleNoteProps> = ({title, content}) => {
  return (
    <div className='single_note'>
        <h3 className='title-note'>{title}</h3>
        <p>{content}</p>
    </div>
  )
}

export {SingleNote}