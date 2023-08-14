import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note, NotesState } from './types';

const initialState: NotesState = {
  notesList: [],
  isFetching: false,
  isAdding: false,
}

const slice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    noteAdded: (state, action: PayloadAction<Note>) => {
      state.notesList.unshift(action.payload);
    },
    notesReceived: (state, action: PayloadAction<Note[]>) => {
      state.notesList = action.payload;
    }
  }
})

export default slice.reducer

export const {
  noteAdded,
  notesReceived
} = slice.actions
