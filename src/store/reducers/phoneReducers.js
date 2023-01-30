/* eslint-disable default-param-last */

import { ADD_PHONE } from '../../actions/phoneActionTypes';

/* eslint-disable import/prefer-default-export */
const initialState = {
  phones: [
    { id: 1, number: '+79215883135' },
    { id: 2, number: '+79215883435' },
    { id: 3, number: '+79213432125' },
  ],
};

export const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHONE:
      return { ...state, phones: [...state.phones, action.payload] };
    default:
      return { ...state };
  }
};
