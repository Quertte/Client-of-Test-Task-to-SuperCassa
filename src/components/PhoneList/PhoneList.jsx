import React from 'react';
import PhoneItem from '../PhoneItem/PhoneItem';

function PhoneList({ phones }) {
  return (
    <ul>
      {phones.length ? phones.map(
        (phone) => <PhoneItem key={phone.id} number={phone.number} />,
      ) : <h3>No phines</h3>}
    </ul>
  );
}

export default PhoneList;
