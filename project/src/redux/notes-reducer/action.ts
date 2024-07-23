import { ADD_NOTE, GET_NOTE } from "./action_type";
import { NoteType } from "./reducer";


export interface AddNoteAction{
    type: typeof ADD_NOTE;
    payload: NoteType;
}

export interface GetNoteAction{
    type: typeof GET_NOTE;
}

export type NoteActionTypes = AddNoteAction | GetNoteAction;



export const addNote = (note:NoteType):AddNoteAction =>({
    type:ADD_NOTE,
    payload: note
})

export const getNotes = (): GetNoteAction =>({
    type: GET_NOTE
})


