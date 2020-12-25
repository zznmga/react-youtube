export const notesReducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload];
    case 'SET_NOTES':
      return action.payload;
    case 'RM_NOTE':
      return state.filter((note) => note.id !== action.payload.id);
    default:
      return state;
  }
};
