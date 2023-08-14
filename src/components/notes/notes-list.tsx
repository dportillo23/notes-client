import { useEffect } from "react";
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from "../../store/types";
import { getNotes } from "../../store/slices/notes/notes.actions";

const NotesList = ({ notesList, getNotes }: PropsFromRedux) => {

  useEffect(() => {
    getNotes()
  }, [])

  return notesList.map(note => {
    return (
      <div key={note.id}>
        <h1>{note.title}</h1>
        <p>{note.note}</p>
        <span>{note.updated}</span>
      </div>
    )
  })

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
