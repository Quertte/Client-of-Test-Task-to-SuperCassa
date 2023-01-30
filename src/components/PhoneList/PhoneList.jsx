import React from 'react';
import { useSelector } from 'react-redux';
import PhoneItem from '../PhoneItem/PhoneItem';

function PhoneList() {
  const { phones } = useSelector((store) => store.phoneStore);
  return (
    <ul>
      {phones.length ? phones.map(
        (phone) => <PhoneItem key={phone.id} number={phone.number} />,
      ) : <h3>No phones</h3>}
    </ul>
  );
}

export default PhoneList;
