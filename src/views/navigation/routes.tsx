import { RouteObject } from 'react-router-dom';
import { NotesPage } from "../notes"

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <NotesPage />,
  }
]