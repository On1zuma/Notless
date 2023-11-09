import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { Note } from "./App";

type NoteLayoutProps = {
  notes: Note[];
};

export function NoteLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (note == null) return <Navigate to="/list" replace />;

  return <Outlet context={note} />;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNote() {
  return useOutletContext<Note>();
}
