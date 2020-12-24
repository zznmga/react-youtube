import React, { useReducer, useState, useContext, useEffect } from 'react';
import { NotesContext } from './notesContext';
import { notesReducer } from './notesReducer';

import { AlertContext } from '../alert/AlertContext';

export const NotesState = ({ children }) => {
  const alert = useContext(AlertContext);
  const [loader, setLoader] = useState(true);
  //   useState
  //   let [notes, setNotes] = useState([
  //     { id: 1, title: 'React' },
  //     { id: 2, title: 'Vue' },
  //     { id: 3, title: 'Angular' },
  //   ]);
  //   const addNote = (text) => {
  //     setNotes([...notes, { id: Date.now(), title: text }]);
  //   };
  //   const rmNote = (id) => {
  //     console.log(id);
  //     setNotes(notes.filter((note) => note.id !== id));
  //   };

  let [notes, dispatch] = useReducer(notesReducer, []);

  const addNote = (text) => {
    dispatch({ type: 'ADD_NOTE', payload: { id: Date.now(), title: text } });
  };

  const rmNote = (id) => {
    alert.show('Deleted note', 'warning');
    dispatch({ type: 'RM_NOTE', payload: { id } });
  };

  const setNotes = (notes) => {
    dispatch({ type: 'SET_NOTES', payload: notes });
  };

  console.log(notes);

  useEffect(() => {
    console.log('useEffect was called');
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setNotes(json);
          setLoader(false);
        }, 5000);
      });
  }, []);

  return (
    <NotesContext.Provider value={{ notes, addNote, rmNote, loader }}>
      {children}
    </NotesContext.Provider>
  );
};
