import React from 'react';
import styles from './PhoneItem.module.css';

function PhoneItem({ number, index, code }) {
  return (
    <li className={styles['phone-item']}>
      <strong>
        {index + 1}
        .
        {'   '}
      </strong>
      {`${code} (${number.slice(0, 3)}) ${number.slice(3)}`}
    </li>
  );
}

export default PhoneItem;
