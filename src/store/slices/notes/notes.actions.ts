import { notesReceived } from "./notes";
import NotesServiceAPI from "../../../services/notes.service";
import { AppDispatch } from "../../types";

export const getNotes = () => async (dispatch: AppDispatch) => {
  const notes = await NotesServiceAPI.getNotes()
  dispatch(notesReceived(notes));
}