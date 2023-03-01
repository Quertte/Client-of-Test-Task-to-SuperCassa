import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhone } from '../../actions/phoneActionCreators';
import PhoneItem from '../PhoneItem/PhoneItem';
import './phoneList.css';

function PhoneList() {
  const { phones } = useSelector((store) => store.phoneStore);
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    axios.get('http://localhost:4000/api/phones', { signal: abortController.signal, credentials: 'include' })
      .then((res) => dispatch(getPhone(res.data)));

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <ul className="phone-list">
      {phones.length ? phones.map(
        (phone, index) => (
          <PhoneItem
            key={phone.id}
            number={phone.number}
            index={index}
            code={phone.code}
          />
        ),
      ) : <h3>No phones</h3>}
    </ul>
  );
}

export default PhoneList;
