import React from 'react';
import about_img from '../../images/Banner&Background/kit.png'
import './About.css';

const About = () => {
    return (
        <div className="container mt-5 p-2">
            <div className="about-section">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-img">
                            <img className='w-100' src={about_img} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-text mt-5 p-2">
                            <h1 className='text-center'>About Us</h1>
                            <p className='p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta minus cupiditate autem magnam, quibusdam sint aliquid sequi fugit dolores esse debitis necessitatibus provident repudiandae rerum dicta harum? Impedit, saepe laborum. Voluptates eveniet voluptate quo harum quisquam exercitationem, maiores ea accusamus ducimus eius! Asperiores aspernatur earum nesciunt maxime? Quod distinctio nulla praesentium aut nesciunt nemo iusto voluptatem, delectus quae culpa blanditiis!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;