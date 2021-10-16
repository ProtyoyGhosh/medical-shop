import React from 'react';
import './Banner.css';
import banner from '../../images/Banner&Background/banner.jpg';


const Banner = () => {
    return (
        <div>
            <div className="banner d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 ms-5">
                            <h1 className='banner-title'>Take care of your <br />
                                Health Now!!</h1>
                            <h3 className='banner-sub-title'>Sale up to 30% all products</h3>
                            <button className='banner-btn'>Shop now</button>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner; <h1>This is banner</h1>