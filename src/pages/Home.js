import React, { useContext, Suspense } from 'react';
import { Alert } from '../components/Alert';
//import { Form } from '../components/Form';
import { Notes } from '../components/Notes';
import { Loader } from '../components/Loader';
import { NotesContext } from '../context/notes/notesContext';

const Form = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('../components/Form'));
      }, 5000);
    })
);

export const Home = () => {
  const { loader } = useContext(NotesContext);
  return (
    <div className={'container'}>
      <Alert />
      <Suspense fallback={<div>Loading...</div>}>
        <Form />
      </Suspense>

      <hr />
      {loader && <Loader />}
      <Notes />
    </div>
  );
};
