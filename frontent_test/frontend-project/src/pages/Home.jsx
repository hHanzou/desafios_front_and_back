import React from 'react';
import './Home.css';

import LogoHome from '../components/home_components/LogoHome';

import FormHome from '../components/home_components/FormHome';

const Home = () => {
  return (
    <div className='content'>
        <LogoHome />
        <div className='form-area'>
            <div className='form-title'>FORM</div>
            <div className='form-subtitle'>EGS SISTEMAS</div>
            <FormHome />
        </div>
    </div>
  )
}

export default Home