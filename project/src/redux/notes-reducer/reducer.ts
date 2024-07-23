import { notes } from "../../components/NoteContainer";
// import { NoteActionType } from "./action_type";

import { NoteActionTypes } from "./action";
import { ADD_NOTE, DELETE_NOTE, GET_NOTE } from "./action_type";

export interface NoteType{
    id: string | number;
    title?: string;
    content: string;
}

export interface NotesState{
    isLoading: boolean,
    isError: boolean,
    notes: NoteType[]
}

const initState = {
    isLoading: false,
    isError: false,
    notes: notes
}

export const notesReducer = (state:NotesState=initState, action:NoteActionTypes):NotesState=>{

    switch(action.type){

        case ADD_NOTE:
            return{
                ...state,
                isLoading: false,
                isError: false,
                notes: [...state.notes, action.payload]
            }
        
        case GET_NOTE:
            return{
                ...state,
                isLoading: false,
                isError: false,
                notes: state.notes
            }
        case DELETE_NOTE:
            return{
                ...state,
                isLoading: false,
                isError: false,
                notes: state.notes.filter((note)=>note.id !== action.payload)
            }
        default:
            return state;
    }


}

