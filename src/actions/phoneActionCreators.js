import { ADD_PHONE, GET_PHONES } from './phoneActionTypes';

export const addPhone = (payload) => ({ type: ADD_PHONE, payload });
export const getPhone = (payload) => ({ type: GET_PHONES, payload });
