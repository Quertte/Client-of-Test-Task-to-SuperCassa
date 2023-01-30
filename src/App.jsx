/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import AddPhone from './components/AddPhone/AddPhone';
import PhoneList from './components/PhoneList/PhoneList';

function App() {
  const [phones, setPhones] = useState([
    { id: 1, number: '9215883135' },
    { id: 2, number: '9215883435' },
    { id: 3, number: '9213432125' },
  ]);

  return (
    <div className="App">
      <h1>Test task</h1>
      <AddPhone />
      <PhoneList phones={phones} />
    </div>
  );
}

export default App;
