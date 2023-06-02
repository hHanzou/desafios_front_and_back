import React, { useState } from 'react';

function Cpf() {
  const [cpf, setCPF] = useState('');

  const handleChange = (event) => {
    const inputCPF = event.target.value;

    const numericCPF = inputCPF.replace(/\D/g, '');

    const formattedCPF = numericCPF.replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2}).*/,
      '$1.$2.$3-$4'
    );

    setCPF(formattedCPF);
  };

  return (
    <input
      type="text"
      id='cpf'
      name='cpf'
      value={cpf}
      onChange={handleChange}
      placeholder="Digite o CPF"
      required
    />
  );
}

export default Cpf;