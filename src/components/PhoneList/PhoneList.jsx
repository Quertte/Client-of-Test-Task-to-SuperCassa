import React from 'react';
import { useSelector } from 'react-redux';
import PhoneItem from '../PhoneItem/PhoneItem';
import './phoneList.css';

function PhoneList() {
  const { phones } = useSelector((store) => store.phoneStore);
  return (
    <ul className="phone-list">
      {phones.length ? phones.map(
        (phone, index) => <PhoneItem key={phone.id} number={phone.number} index={index} />,
      ) : <h3>No phones</h3>}
    </ul>
  );
}

export default PhoneList;
