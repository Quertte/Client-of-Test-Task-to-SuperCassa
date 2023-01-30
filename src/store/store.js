import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { phoneReducer } from './reducers/phoneReducers';

const reducer = combineReducers({ phoneStore: phoneReducer });

export const store = configureStore({ reducer });
