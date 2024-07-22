import React from 'react'
import { SingleNote } from './SingleNote';

// notesData.js
import "./NotesContainer.css";

export const notes = [
    {
      id: 1,
      title: "batch -> 18 , NEM201",
      content: "Masai logo=>\nhttps://drive.google.com/file/d/1JxN3nHrSkW3sTWMJQmeYeL9bCxBOgWoUb/view",
    },
    {
      id: 2,
      title: "REACT_APP_UPLOAD_PRESET_NAME=huzzi_image_bucket",
      content: "REACT_APP_CLOUD_NAME=dv7zbk01d\nREACT_APP_BACKEND_URL=http://localhost:8080",
    },
    {
      id: 3,
      title: "Chakratemplates",
      content: "Empty note",
    },
    {
      id: 4,
      title: "Human Readable Time Ended Description",
      content: "Given number of minutes, convert it into human readable form.\nExample:\n130 becomes 2hrs 10minutes\n110 becomes 1hr 50minutes\n120 becomes 2hrs 00minutes\nNote the exact format of output...",
    },
    {
      id: 5,
      title: "GOOGLE_CLIENT_ID=405727860421-a03ua7p4eop80sgk91r56s69v4ccleqn.apps.googleusercontent.com",
      content: "GOOGLE_CLIENT_SECRET=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\nCOOKIE_SECRET_KEY=myCookieSecretKey\nJWT_SECRET_KEY=secret_salt\nENV=production\nDB_USERNAME=masai\nDB_PASSWORD=masaishcool\nPORT=8080",
    },
    {
      id: 6,
      title: "Office hour:",
      content: "Step 1: Student will fill this form if the student shows up. It should be filled in presence of IA\nhttps://forms.gle/3LUSYhpzYHCRMWCF8\nStep 2: IA will fill this form if the student didn't show up (Same form as Step 1)\nhttps://forms.gle/3LUSYhpzYHCRMWCF8\nStep 3: E/C will send the feedback form to student after the office hour conduction\nStep 4: IA will share the Adhoc request form with...",
    },
  ];
  
const NoteContainer:React.FC = () => {
  return (
    <div className='notes_container'>
        {
            notes.map((elem)=>(
                <SingleNote key={elem.id} title={elem.title} content={elem.content}/>
            ))
        }
    </div>
  )
}

export {NoteContainer};