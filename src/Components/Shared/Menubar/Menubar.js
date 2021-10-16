import React from 'react';
import logo from '../../../images/Banner&Background/logo.png';
import './Menubar.css';

const Menubar = () => {
    return (
        <div>
            <div className="menubar-container">
                <div className="menubar">
                    <div className="row">
                        <div className="col-md-2 col-sm-12">
                            <div className="logo">
                                <img className='p-2' src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-10 col-sm-12">
                            <div className="menu-items">
                                <ul className='d-flex align-items-end justify-content-end me-5'>
                                    <li className='item p-2'>Home</li>
                                    <li className='item p-2'>About Us</li>
                                    <li className='item p-2'>Shop</li>
                                    <li className='item p-2'>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;