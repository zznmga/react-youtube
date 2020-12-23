import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/AlertContext';

export const Form = () => {
  const [value, setValue] = useState('');
  const { alert, hide, show } = useContext(AlertContext);

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length) {
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
};
