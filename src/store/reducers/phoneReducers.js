/* eslint-disable default-param-last */

import { ADD_PHONE, GET_PHONES } from '../../actions/phoneActionTypes';

/* eslint-disable import/prefer-default-export */
const initialState = {
  phones: [],
};

export const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHONE:
      return { ...state, phones: [...state.phones, action.payload] };
    case GET_PHONES:
      return { ...state, phones: action.payload };
    default:
      return { ...state };
  }
};
