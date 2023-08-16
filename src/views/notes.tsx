import { Container, Typography } from "@mui/material"
import { NotesList } from "../components/notes/notes-list"
// import { NoteExpandedTab } from "components/preview/note-expanded-tab"

export const NotesPage = () => {
  return <Container maxWidth='xl'>
    <Typography variant="h1">Notes Page</Typography>
    <NotesList />
    {/* <NoteExpandedTab /> */}
  </Container>
}