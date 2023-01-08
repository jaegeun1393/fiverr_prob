import React from 'react';

import './style.css';

import Hero from './Components/Hero';
import CollegeProfileDevelopment from './Components/CollegeProfileDevelopment';
import BreakdownApplicationProcess from './Components/BreakdownApplicationProcess';
import FullOverViewCollegeApplicationProcess from './Components/FullOverViewCollegeApplicationProcess';
import OurApplication from './Components/OurApplication';
import OurStudentsAndParents from './Components/OurStudentsAndParents';
import AcceptanceResults from './Components/AcceptanceResults';
import SimpleAccordion from './Components/SimpleAccordion';

import Footer from '../footer';

function Grade12() {
    return (
        <>
            <div className='ml-[4%] mr-[4%]'>
                <Hero />
                <CollegeProfileDevelopment />
                <BreakdownApplicationProcess />
                <FullOverViewCollegeApplicationProcess />
                <OurApplication />
                <OurStudentsAndParents />
                <AcceptanceResults />
                <SimpleAccordion />
            </div>
            <Footer />
        </>
    );
};

export default Grade12;