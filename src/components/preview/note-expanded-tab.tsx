import { Box, Typography } from '@mui/material';
import AddNoteIlustration from 'assets/ilustrations/add-notes.svg'
import { Note } from 'store/slices/notes/types';

interface NoteExpandedTabParams {
  note: Note
}
export const NoteExpandedTab = ({ note }: NoteExpandedTabParams) => {
  return (
    <Box>
      <img src={AddNoteIlustration} alt="" />
      <Typography variant='h1'>{note.title}</Typography>
    </Box>
  )
};
