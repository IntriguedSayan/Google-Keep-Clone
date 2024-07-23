import React, { useState } from "react";
import { CustomInput } from "../components/CustomInput";
import { DoubleInput, inputState } from "../components/DoubleInput";
import { NoteContainer } from "../components/NoteContainer";
import { NotesState } from "../redux/notes-reducer/reducer";
import { addNote, getNotes } from "../redux/notes-reducer/action";
import { useDispatch, useSelector } from "../redux/notes-reducer/hooks";

const Notes: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const dispatch = useDispatch();
  const notesFromRedux = useSelector((state:NotesState)=>state.notes);
  const [inputState, setInputState] = useState<inputState>({title:"",content:""})

  const toggle = () => {
    setClicked(!clicked);
    const newInputState = {...inputState,id:notesFromRedux.length+1}
    dispatch(addNote(newInputState));
    dispatch(getNotes());
    setInputState({title:"",content:""});
  };
  const toggleForCustomInput =() =>{
    setClicked(!clicked);
  }

  const invokeInputState = (data:inputState)=>{
      setInputState(data)
  } 

  return (
    <>
      <div>
        {clicked ? (
          <DoubleInput onClick={toggle} inputState={inputState} setInputState = {invokeInputState} />
        ) : (
          <CustomInput onClick={toggleForCustomInput} />
        )}
      </div>
      <div>
        <NoteContainer/>
      </div>
    </>
  );
};

export { Notes };
