import React from 'react';
import logo from '../logosvg/Group 5.svg'
import logoP from '../logosvg/logoP 7.svg'


const WhyLeaseDM = () => {
    return (
        <header>
            <div className='lease'>
                <div className='texth1'>
                    <h1>Why Lease with D&M?</h1>
            </div>
                <div className='space'> 
                    <div className='top1'>
                        <div className='icon'>
                            <img className='imgi' src={logo} alt="" />
                        </div>
                        <div className='textyre'>
                            <div className='dh'>
                                <h2>Top Dealers</h2>
                            </div>
                             <div className='dm'>
                                <h4>TrueCar Certified Dealers compete for your business by providing discounted pricing on in-stock inventory</h4>
                            </div>
                        </div>
                        
                        <div className='iconka'>
                            <img src={logoP} alt="" />
                        </div>

                        <div className='bd'>
                            <h2>Discounted Pricing</h2>
                        </div>
                        <div className='bm'>
                            <h4>View local inventory from the comfort of home and get access to guaranteed savings on the car of your choice.</h4>
                        </div>
                       </div>
                </div>
            </div>
        </header>
    );
}

export default WhyLeaseDM;
