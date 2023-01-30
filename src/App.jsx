/* eslint-disable no-unused-vars */
import React, { useMemo, useReducer, useState } from 'react';
import './App.css';
import AddPhone from './components/AddPhone/AddPhone';
import PhoneList from './components/PhoneList/PhoneList';
// import phoneContext from './context/context';
// import { reducer } from './reducer/reducer';

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);

  // const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    // <phoneContext.Provider value={value}>
    <div className="App">
      <h1>Test task</h1>
      <AddPhone />
      <PhoneList />
    </div>
    // </phoneContext.Provider>
  );
}

export default App;
