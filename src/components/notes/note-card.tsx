import { Card, CardHeader, CardContent, Avatar, Typography } from "@mui/material";
import { Note } from "store/slices/notes/types";
import { toFormattedLocalString } from "utils/date-utils/date-utils";

interface NoteCardParams {
  note: Note;
}
export const NoteCard = ({ note }: NoteCardParams) => {
  return <Card>
    <CardHeader
      avatar={<Avatar aria-aria-label="note">
        {note.author[0].toUpperCase()}
      </Avatar>}
      title={note.title}
      subheader={toFormattedLocalString(note.updated)}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {note.note}
      </Typography>
    </CardContent>
  </Card>
};
