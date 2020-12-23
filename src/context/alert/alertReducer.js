export const alertReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {
        ...state,
        visible: true,
        text: action.payload.text,
        type: action.payload.type,
      };
    case 'HIDE_ALERT':
      return { ...state, visible: false };
    default:
      return state;
  }
};
