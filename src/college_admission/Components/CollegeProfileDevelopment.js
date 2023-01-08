import React from 'react'

import done from '../img/done.png'
import Ellipse23 from '../img/Ellipse 23.png'
import Ellipse24 from '../img/Ellipse 24.png'

export default function CollegeProfileDevelopment() {
  return (
    <>
        <div className="section-1">
        <div className="section1-heading">
            <h1>A Comprehensive and Personalized College Profile Development Program that Prepares You For Every Aspect Of College Admission</h1>
        </div>
        <div className="section1-content">
            <div className="s1-col-left">
                <div className="s1-box">
                    <div className="s1cl-tick">
                        <img src={done} alt="Image2"/>
                    </div>
                    <div className="s1cl-text">
                        <h3>Comprehensive Evaluation of Student Needs & Strengths</h3>
                        <p>A thorough assessment and discussion of a student’s areas of improvement and strengths that should be emphasized.</p>
                    </div>
                </div>
                <div className="s1-box">
                    <div className="s1cl-tick">
                        <img src={done} alt="Image3"/>
                    </div>
                    <div className="s1cl-text">
                        <h3>Academic Advising</h3>
                        <p>Guidance is provided to the student according to their existing academic record as to what classNamees to take in order to improve major admission chances.</p>
                    </div>
                </div>
                <div className="s1-box">
                    <div className="s1cl-tick">
                        <img src={done} alt="Image4"/>
                    </div>
                    <div className="s1cl-text">
                        <h3>Work, Extracurricular, and Leadership Activity Advising</h3>
                        <p>Taking the student’s interests into consideration, advice is given as to what activities the student should participate in and emphasize to improve their application.</p>
                    </div>
                </div>
                <div className="s1-box">
                    <div className="s1cl-tick">
                        <img src={done} alt="Image5"/>
                    </div>
                    <div className="s1cl-text">
                        <h3>Exam and Test Preparation Strategizing</h3>
                        <p>Advice on strategies when taking  the ACT and SAT standardized tests is given in consideration of the student’s most effective learning & exam taking style.</p>
                    </div>
                </div>
                <div className="s1-box">
                    <div className="s1cl-tick">
                        <img src={done} alt="Image6"/>
                    </div>
                    <div className="s1cl-text">
                        <h3>Constant and Reliable Support</h3>
                        <p>Dependable, continuous support is given through effective platforms of communication from instructor to student.</p>
                    </div>
                </div>
            </div>
            <div className="s1-col-right">
                <div className="s1cr-img1">
                    <img src={Ellipse24} alt="Image7"/>
                </div>
                <div className="s1cr-img2">
                    <img src={Ellipse23} alt="Image8"/>
                </div>
    
            </div>
        </div>
    </div>
    </>
  )
}
