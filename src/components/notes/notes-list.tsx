import { useEffect } from "react";
import { connect, ConnectedProps } from 'react-redux'
import { Box } from "@mui/material";
import { RootState } from "store/types";
import { getNotes } from "store/slices/notes/notes.actions";
import { NoteCard } from "./note-card";

const NotesList = ({ notesList, getNotes }: PropsFromRedux) => {

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {notesList.map(note => <NoteCard key={note.id} note={note} />)}
    </Box>
  )

};

const mapStateToProps = ({ notes }: RootState) => ({
  notesList: notes.notesList
})

const mapDispatchToProps = {
  getNotes,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

const ConnectedNotesList = connector(NotesList)

export {ConnectedNotesList as NotesList}
