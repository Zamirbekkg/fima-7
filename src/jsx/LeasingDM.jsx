import React from 'react';
import Logo  from '../logosvg/Victor.svg';

const LeasingDM = () => {
    return (
    <header>
       <img src={Logo} alt="" />
      <div className='conteiner'>
          <nav className='haeder-nav'>
            <a href="#">NEW CARS</a>
            <a href="#">PRE-OWNED CARS</a>
            <a href="#">FINANCE</a>
            <a href="#">LEASE VS BUY</a>
            <a href="#">CONTACT US</a>
          </nav>  
        </div>
      <div className='From'>
            <h1 className='text'>Leasing From D&M</h1>
        </div>
        <button className='btn'>FIND A CAR</button>
    </header>
    );
}

export default LeasingDM;
