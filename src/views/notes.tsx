import { useState } from 'react'
import { Container, Typography } from "@mui/material"
import { NotesList } from "../components/notes/notes-list"
import { NoteExpandedTab } from "components/preview/note-expanded-tab"

export const NotesPage = () => {
  const [note, setNote] = useState(null)
  return <Container maxWidth='xl'>
    <Typography variant="h1">Notes Page</Typography>
    <NotesList setNote={setNote} />
    <NoteExpandedTab note={note} />
  </Container>
}