
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { NotesState } from './reducer';
import { NoteActionTypes } from './action';
import { Dispatch } from 'redux';

export type AppDispatch = Dispatch<NoteActionTypes>;

export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<NotesState> = useReduxSelector;

export type DispatchType = (action: NoteActionTypes) => void;
