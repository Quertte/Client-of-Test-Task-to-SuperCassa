import React, { useState } from 'react';
import countries from '../../config/countries.json';

function AddPhone() {
  const { countryCode } = countries;
  const [number, setNumber] = useState('');

  const [isNumber, setIsNumber] = useState(false); // как только коснулись инпута делаем тру
  const [numberError, setIsNumberError] = useState('Поле не может быть пустым');

  const [selectedCode, setSelectedCode] = useState(countryCode[1].code);

  const blurhandler = () => {
    setIsNumber(true);
  };

  const numberHandler = (e) => {
    setNumber(e.target.value);
    if (Number.isNaN(e.target.value)) {
      setIsNumberError('Вводить можно тольцо цифры');
    } else if (e.target.value.length < 3 || e.target.value.length > 10) {
      setIsNumberError('Длина номера телефона должна быть от 3 до 10 цифр');
      if (!e.target.value) {
        setIsNumberError('Поле не может быть пустым');
      }
    } else {
      setIsNumberError('');
    }
  };

  return (
    <form>
      <select value={selectedCode} onChange={(e) => setSelectedCode(e.target.value)}>
        {countryCode.map((code) => (
          <option key={code.code} value={code.code}>
            {code.flag}
            {' '}
            {code.code}
          </option>
        ))}
      </select>
      {(isNumber && numberError) && <div style={{ color: 'red' }}>{numberError}</div>}
      <input onBlur={blurhandler} type="number" value={number} onChange={numberHandler} />
    </form>
  );
}

export default AddPhone;
