import React from 'react';

import FormDate from './validations/FormDate';
import Cpf from './validations/Cpf';

import { Link, useNavigate } from "react-router-dom";

import { useContext } from 'react';
import { FormContext, FormProvider } from '../../context/FormContext';

function FormHome () {

    const navigate = useNavigate();
    const {formArr, setFormArr} = useContext(FormContext)
    const { formSubmit } = useContext(FormContext)

    function handleSubmit(e){
        e.preventDefault();
        const cadastro = new Object();
        
        const nome = document.querySelector("#nome");
        const sobrenome = document.querySelector("#sobrenome");
        const idade = document.querySelector("#idade");
        const email = document.querySelector("#email");
        const cpf = document.querySelector("#cpf");
        
        cadastro.nome = nome.value;
        cadastro.sobrenome = sobrenome.value;
        cadastro.idade = idade.value;
        cadastro.email = email.value;
        cadastro.cpf = cpf.value;

        formSubmit(cadastro);

        navigate("/info")
        
    }

    return (
        <form className='form-section' onSubmit={handleSubmit}>
            <label className='form-input'>Nome:</label>
            <input type="text" id='nome' name="nome" required/><br />
            <label className='form-input'>Sobrenome:</label>
            <input type="text" id='sobrenome' name="sobrenome" required/><br />
            <label className='form-input'>Idade:</label>
            <FormDate /><br />
            <label className='form-input'>Email:</label>
            <input type="email" id='email' name="email" required/><br />
            <label className='form-input'>CPF:</label>
            <Cpf /><br />
            
            <label className='form-input termos'><input className='input-box' type="checkbox" id='termos' name="termos"/> Aceito os termos e condições</label>
            <br />

            <input className='input-button' type='submit' id='send' value='Enviar'/>

            <Link to="/info">
            Consultar cadastros   
            </Link>
        </form>
  )
}

export default FormHome