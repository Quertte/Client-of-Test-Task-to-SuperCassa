import React from 'react';
import InputMask from 'react-input-mask';

function PhoneInput() {
  return (
    <InputMask mask="(999) 999-99-99" maskChar="+">
      {(inputProps) => <input {...inputProps} type="text" />}
    </InputMask>
  );
}

export default PhoneInput;
