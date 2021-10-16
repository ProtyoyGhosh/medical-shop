import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../services/Services';
import About from '../About/About';
import Menubar from '../Shared/Menubar/Menubar';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;