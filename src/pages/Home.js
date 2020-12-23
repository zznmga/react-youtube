import React from 'react';
import { Alert } from '../components/Alert';
import { Form } from '../components/Form';
import { Notes } from '../components/Notes';

export const Home = () => {
  const notes = new Array(3)
    .fill('')
    .map((_, i) => ({ id: i, title: `Item ${i + 1}` }));

  return (
    <div className={'container'}>
      <Alert />
      <Form />
      <hr />
      <Notes notes={notes} />
    </div>
  );
};
