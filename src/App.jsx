/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import AddPhone from './components/AddPhone/AddPhone';
import PhoneList from './components/PhoneList/PhoneList';

function App() {
  return (
    <div className="wrapper">
      <h1>Test task</h1>
      <AddPhone />
      <PhoneList />
    </div>
  );
}

export default App;
