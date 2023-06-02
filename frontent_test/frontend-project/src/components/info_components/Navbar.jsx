import React from 'react'

import logo from "../../assets/logo.png"

import { Link, useNavigate } from "react-router-dom";

import { useContext } from 'react';
import { FormContext, FormProvider } from '../../context/FormContext';

const Navbar = () => {

    const {formArr} = useContext(FormContext)
    let arr = formArr[formArr.length - 1]

    if (arr == undefined){
        arr = []
    }
    
    return (
    <nav>
        <span className='logoNav'>
            <Link to="/">
                <img className="logo" src={logo} alt="logo" />
            </Link>
        </span>
        <span  className='nameNav'>
            {arr.nome !== undefined ? arr.nome + " " + arr.sobrenome : 'Nome Cadastrado'}
        </span>
    </nav>
    )
}

export default Navbar