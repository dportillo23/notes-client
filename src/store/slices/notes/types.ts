export interface CreateNote {
  title: string;
  note: string;
  author: string;
  category: string;
}

export interface Note extends CreateNote {
  id: string;
  created: string;
  updated: string;
}

export interface NotesState {
  notesList: Note[];
  isAdding: boolean;
  isFetching: boolean;
}