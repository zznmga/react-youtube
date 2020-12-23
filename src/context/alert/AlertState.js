import React, { useReducer } from 'react';
import { alertReducer } from './alertReducer';
import { AlertContext } from './AlertContext';

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, {
    visible: false,
    type: '',
  });

  console.log('state: ', state);

  const show = (text, type) => {
    dispatch({ type: 'SHOW_ALERT', payload: { text, type } });
  };
  const hide = () => {
    dispatch({ type: 'HIDE_ALERT' });
  };
  return (
    <AlertContext.Provider
      value={{
        hide,
        show,
        state,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
