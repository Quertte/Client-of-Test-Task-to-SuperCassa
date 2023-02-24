import React from 'react';
import styles from './PhoneItem.module.css';

function PhoneItem({ number, index }) {
  return (
    <li className={styles['phone-item']}>
      <strong>
        {index + 1}
        .
        {'   '}
      </strong>
      {number}
    </li>
  );
}

export default PhoneItem;
