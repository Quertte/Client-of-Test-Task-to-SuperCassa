import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import InputMask from 'react-input-mask';
import { addPhone } from '../../actions/phoneActionCreators';
import countries from '../../config/countries.json';
import styles from './AddPhone.module.css';

function AddPhone() {
  const { countryCode } = countries;
  const [number, setNumber] = useState('');

  const [numberError, setIsNumberError] = useState('');

  const [selectedCode, setSelectedCode] = useState(countryCode[1].code);

  const { phones } = useSelector((store) => store.phoneStore);
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
      const newNumber = {
        id: phones.length + 1,
        number: `${selectedCode}${number}`,
      };
      dispatch(addPhone(newNumber));
    }
    setNumber('');
  };

  return (
    <form onSubmit={handlerSubmit}>
      <select value={selectedCode} onChange={(e) => setSelectedCode(e.target.value)}>
        {countryCode.map((code) => (
          <option key={code.code} value={code.code}>
            {code.flag}
            {' '}
            {code.code}
          </option>
        ))}
      </select>
      <input
        className={styles.input}
        // onBlur={blurhandler}
        // type="number"
        value={number}
        onChange={numberHandler}
      />
      {/* <InputMask onBlur={blurhandler}
      value={number} onChange={numberHandler} mask="(999) 999-99-99" maskChar="_">
        {(inputProps) => <input value={number} {...inputProps} type="text" />}
      </InputMask> */}
      <button type="submit">Добавить номер</button>
      {/* {numberError &&  */}
      <div className={styles.error}>{numberError}</div>
    </form>
  );
}

export default AddPhone;
