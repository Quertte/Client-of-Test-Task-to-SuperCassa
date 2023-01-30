/* eslint-disable import/prefer-default-export */
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PHONE':
      return { ...state, phones: [...state.phones, action.payload] };
    default:
      return { ...state };
  }
};
