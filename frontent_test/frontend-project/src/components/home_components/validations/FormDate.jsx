import React from 'react';

function FormDate() {
  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <input
      type="date"
      id='idade'
      name='idade'
      required
      max={currentDate}
    />
  );
}

export default FormDate;