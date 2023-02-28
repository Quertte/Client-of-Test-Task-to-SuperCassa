import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addPhone } from '../../actions/phoneActionCreators';
import countries from '../../config/countries.json';
import styles from './AddPhone.module.css';

function AddPhone() {
  const { countryCode } = countries;
  const [number, setNumber] = useState('');

  const [numberError, setIsNumberError] = useState('');

  const [selectedCode, setSelectedCode] = useState(countryCode[1].code);

  const dispatch = useDispatch();

  const numberHandler = (e) => {
    setNumber(e.target.value);
    if (isNaN(e.target.value)) {
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

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (number.trim() && !isNaN(number) && number.length >= 3 && number.length < 11) {
      const infoCountry = countryCode.find((el) => el.code === selectedCode);
      axios.post('/api/phones', {
        code: selectedCode,
        number,
        country: infoCountry.name,
        flag: infoCountry.flag,
      })
        .then((res) => {
          dispatch(addPhone(res.data));
          setNumber('');
        });
    } else {
      setIsNumberError('Поле не может быть пустым');
    }
  };

  return (
    <form onSubmit={handlerSubmit}>
      <select value={selectedCode} onChange={(e) => setSelectedCode(e.target.value)}>
        {countryCode.map((code, index) => (
          <option key={index + Number(number)} value={code.code}>
            {code.flag}
            {' '}
            {code.code}
          </option>
        ))}
      </select>
      <input
        className={styles.input}
        value={number}
        onChange={numberHandler}
      />
      <button type="submit">Добавить номер</button>
      <div className={styles.error}>{numberError}</div>
    </form>
  );
}

export default AddPhone;
