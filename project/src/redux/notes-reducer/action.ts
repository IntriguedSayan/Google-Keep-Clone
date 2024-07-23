import { ADD_NOTE, DELETE_NOTE, GET_NOTE } from "./action_type";
import { NoteType } from "./reducer";


export interface AddNoteAction{
    type: typeof ADD_NOTE;
    payload: NoteType;
}

export interface GetNoteAction{
    type: typeof GET_NOTE;
}

export interface DeleteNoteAction {
    type: typeof DELETE_NOTE;
    payload: number|string;
    
}

export type NoteActionTypes = AddNoteAction | GetNoteAction|DeleteNoteAction;


export const addNote = (note:NoteType):AddNoteAction =>({
    type:ADD_NOTE,
    payload: note
})

export const getNotes = (): GetNoteAction =>({
    type: GET_NOTE
})

export const deleteNote = (id: number|string): DeleteNoteAction => ({
    type: DELETE_NOTE,
    payload: id
});