import React from 'react'

import Group from './img/Group.png';
import pattern from './img/pattern.png';
import draft from './img/draft.png';
import document from './img/document.png';
import check_mark from './img/Check_mark.png';
import msgbox from './img/msgbox.png';
import interview from './img/interview.png';

function BSMDApplicationsProcess() {
  return (
    <>
        <div className="section-2">
        <div className="section2-heading">
            <h3>Our Breakdown of How We Support YOU in the BS/MD BS/DO Applications Process</h3>
        </div>
        <div className="content">
            <div className="before-circle-1">
                <div className="circle">
                    <div className="icon">
                        <img className="icon-img-1" src={Group}/>
                    </div>
                    <div className="text">
                        <p className="p1">1 | </p>
                        <p className="p2">Best-Fit  School Identification</p>
                    </div>
                </div>
            </div>
            <div className="before-circle-2">
                <div className="circle">
                    <div className="icon">
                        <img className="icon-img-2" src={pattern}/>
                    </div>
                    <div className="text">
                        <p className="p1">2 | </p>
                        <p className="p2">Application
                            Strategy Formulation</p>
                    </div>
                </div>
            </div>
            <div className="before-circle-3">
                <div className="circle">
                    <div className="icon">
                        <img className="icon-img-1" src={draft}/>
                    </div>
                    <div className="text">
                        <p className="p1">3 | </p>
                        <p className="p2">Application Essay Drafting</p>
                    </div>
                </div>
            </div>
            <div className="before-circle-4">
                <div className="circle">
                    <div className="icon">
                        <img className="icon-img-2" src={document}/>
                    </div>
                    <div className="text">
                        <p className="p1">4 | </p>
                        <p className="p2">Application Editing and Iterating</p>
                    </div>
                </div>
            </div>
            <div className="before-circle-5">
                <div className="circle">
                    <div className="icon">
                        <img className="icon-img-2" src={check_mark}/>
                    </div>
                    <div className="text">
                        <p className="p1">5 | </p>
                        <p className="p2">College Decision Finalization </p>
                    </div>
                </div>
            </div>
            <div className="before-circle-6">
                <div className="circle">
                    <div className="icon">
                        <img className="icon-img-1" src={msgbox}/>
                    </div>
                    <div className="text">
                        <p className="p1">6 | </p>
                        <p className="p2">Scholarship Applications</p>
                    </div>
                </div>
            </div>
            <div className="before-circle-7">
                <div className="circle">
                    <div className="icon">
                        <img className="icon-img-1" src={interview}/>
                    </div>
                    <div className="text">
                        <p className="p1">7 | </p>
                        <p className="p2"> Interview Preparation</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default BSMDApplicationsProcess