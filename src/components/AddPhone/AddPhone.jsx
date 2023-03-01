/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
import io from 'socket.io-client';
import { addPhone } from '../../actions/phoneActionCreators';
import countries from '../../config/countries.json';
import styles from './AddPhone.module.css';

// const socketClient = new WebSocket('ws://localhost:4000/');

const socket = io('http://localhost:4000');

function AddPhone() {
  const { countryCode } = countries;
  const [number, setNumber] = useState('');

  const [numberError, setIsNumberError] = useState('');

  const [selectedCode, setSelectedCode] = useState(countryCode[1].code);

  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('message', (newPhone) => {
      dispatch(addPhone(newPhone));
    });
  }, []);

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
      // axios.post('/api/phones', {
      //   code: selectedCode,
      //   number,
      //   country: infoCountry.name,
      //   flag: infoCountry.flag,
      // })
      //   .then((res) => {
      //     dispatch(addPhone(res.data));
      //     setNumber('');
      //   });
      // socketClient.send(JSON.stringify({
      //   code: selectedCode,
      //   number,
      //   country: infoCountry.name,
      //   flag: infoCountry.flag,
      // }));

      // socketClient.addEventListener('message', (event) => {
      //   const newPhone = JSON.parse(event.data);
      //   dispatch(addPhone(newPhone));
      //   setNumber('');
      // });
      socket.emit('message', {
        code: selectedCode,
        number,
        country: infoCountry.name,
        flag: infoCountry.flag,
      });
      setNumber('');
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
