import React, { useContext } from 'react';
import { NotesContext } from '../context/notes/notesContext';

export const Notes = () => {
  const { notes, rmNote } = useContext(NotesContext);
  return (
    <ul className="list-group">
      {notes.map((note) => (
        <li className="list-group-item note" key={note.id}>
          <div>
            <strong>{note.title}</strong>
            <small>{new Date().toLocaleDateString()}</small>
          </div>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => rmNote(note.id)}
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};
