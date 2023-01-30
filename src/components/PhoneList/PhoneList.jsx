import React, { useContext } from 'react';
import phoneContext from '../../context/context';
import PhoneItem from '../PhoneItem/PhoneItem';

function PhoneList() {
  const { state } = useContext(phoneContext);
  return (
    <ul>
      {state.phones.length ? state.phones.map(
        (phone) => <PhoneItem key={phone.id} number={phone.number} />,
      ) : <h3>No phones</h3>}
    </ul>
  );
}

export default PhoneList;
