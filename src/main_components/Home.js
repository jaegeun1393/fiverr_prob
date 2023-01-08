import React from 'react';
import Banner from './Banner';
import Instruction from './Instruction';
import Testimonials from './Testimonials';
import OurServices from './Our Services';
import Footer from '../footer';

import "./style/landing_effect.css";

const Home = () => {
    return (
        <>
            <div className='container'>
                <Banner />
                <OurServices />
                <Instruction />
                <Testimonials />
                <Footer />
            </div>
        </>
    );
};

export default Home;