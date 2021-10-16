import React, { useEffect, useState } from 'react';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/gias-uddin-swe/dcotor-fakeData/main/CategoryData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="service-container">
                <div className="top-part">
                    <h6 className='d-flex align-items-center justify-content-center'>
                        <span><img className='me-2' src="https://i.ibb.co/hcPnXvz/Heartbeat-304130-960-720.png" alt="" /></span>
                        PREVENTION
                        <span><img className='ms-2' src="https://i.ibb.co/hcPnXvz/Heartbeat-304130-960-720.png" alt="" /></span>
                    </h6>
                    <h1 className='d-flex align-items-center justify-content-center service-title'>How to Prevent Yourself</h1>
                    <p className='d-flex align-items-center justify-content-center service-sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, recusandae consequatur asperiores voluptates animi a?</p>
                </div>

                <div className="services-part">
                    <div className="row">
                        {
                            services.map(service => (
                                <div className="col-md-6 col-lg-4 p-3">
                                    <div className="cart p-2 m-2">
                                        <div className="cart-img cart-items">
                                            <img src={service.image} alt="" />
                                        </div>
                                        <h5 className='cart-items'>{service.name}</h5>
                                        <p className='cart-items'>{service.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;