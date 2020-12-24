import React, { useContext } from 'react';
import { Alert } from '../components/Alert';
import { Form } from '../components/Form';
import { Notes } from '../components/Notes';
import { Loader } from '../components/Loader';
import { NotesContext } from '../context/notes/notesContext';

export const Home = () => {
  const { loader } = useContext(NotesContext);
  return (
    <div className={'container'}>
      <Alert />
      <Form />
      <hr />
      {loader && <Loader />}
      <Notes />
    </div>
  );
};
