import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/AlertContext';
import { NotesContext } from '../context/notes/notesContext';

function Form() {
  const [value, setValue] = useState('');
  const { alert, hide, show } = useContext(AlertContext);
  const { addNote } = useContext(NotesContext);

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length) {
      addNote(value.trim());
      show(`${value}`, 'success');
      setValue('');
    } else {
      show(`Empty note`, 'warning');
    }
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={value}
          placeholder="Введите название заметки"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Form;
