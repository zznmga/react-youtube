import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/AlertContext';

export const Alert = () => {
  const { hide, show, state } = useContext(AlertContext);
  const alert = state;
  if (!alert.visible) {
    return null;
  }
  return (
    <div
      className={`alert alert-${
        alert.type || 'danger'
      } alert-dismissible fade show`}
    >
      <strong>Note:</strong>
      {alert.text}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        data-bs-dismiss="alert"
        onClick={hide}
      ></button>
    </div>
  );
};
