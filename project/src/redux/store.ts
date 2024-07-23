import {legacy_createStore as createStore} from "redux";
import { notesReducer } from "./notes-reducer/reducer";


export const store = createStore(notesReducer);






