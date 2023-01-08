import React from 'react'
import BSDMDSchools from './BSMDComponents/BSDMDSchools'
import BSMDApplicationsProcess from './BSMDComponents/BSMDApplicationsProcess'
import Hero from './BSMDComponents/Hero'
import OurAcceptanceResults from './BSMDComponents/OurAcceptanceResults'
import OurStudentsAndParents from './BSMDComponents/OurStudentsAndParents'
import PreviousSuccessStories from './BSMDComponents/PreviousSuccessStories'
import SimpleAccordion from './BSMDComponents/SimpleAccordion'
import SupportEveryStep from './BSMDComponents/SupportEveryStep'
import Footer from '../../../footer'

import '../../style.css';

function BSMDCandidates() {
  return (
    <>
        <header class="header"></header>
        <Hero/>
        <PreviousSuccessStories/>
        <SupportEveryStep/>
        <BSMDApplicationsProcess/>
        <BSDMDSchools/>
        <OurStudentsAndParents/>
        <OurAcceptanceResults/>
        <SimpleAccordion/>
        < Footer/>
    </>
  )
}

export default BSMDCandidates
