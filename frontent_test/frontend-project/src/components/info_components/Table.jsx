import React from 'react'

import { useContext } from 'react';
import { FormContext, FormProvider } from '../../context/FormContext';

const Table = () => {

    const {formArr} = useContext(FormContext)

  return (
    <table>
        <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Data</th>
            <th>Email</th>
            <th>CPF</th>
        </tr>
        {formArr !== undefined ? formArr.map((objeto, index) => (
          <tr key={index}>
            {Object.values(objeto).map((valor, index) => (
              <td key={index}>{valor}</td>
            ))}
          </tr>
        )) : 'Sem dados'}
    </table>
  )
}

export default Table