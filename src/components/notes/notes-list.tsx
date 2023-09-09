import { Dispatch, SetStateAction, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Box } from '@mui/material'
import { RootState } from 'store/types'
import { getNotes } from 'store/slices/notes/notes.actions'
import { NoteCard } from './note-card'
import { Note } from 'store/slices/notes/types'

// eslint-disable-next-line no-use-before-define
interface NotesListProps extends PropsFromRedux {
  setNote: Dispatch<SetStateAction<Note>>
}

const NotesList = ({ notesList, getNotes, setNote }: NotesListProps) => {

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <Box display="flex" flexDirection="column" gap={2} justifyContent="space-between">
      {notesList.map(note => <NoteCard key={note.id} note={note} setNote={setNote} />)}
    </Box>
  )
}

const mapStateToProps = ({ notes }: RootState) => ({
  notesList: notes.notesList
})

const mapDispatchToProps = {
  getNotes,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

const ConnectedNotesList = connector(NotesList)

export { ConnectedNotesList as NotesList }
