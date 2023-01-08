import React from 'react'

import check_mark from "../img/Check_mark.png"

export default function OurApplication() {
  return (
    <>


        <div className="table" style={ {paddingTop: "20px", paddingBottom: "20px", align: "center"} }>
    <div className="section2-heading" style={{margin: "auto", width: "70%",padding: "10px"}}>
        <h1 style={ {paddingTop: "30px", paddingBottom: "50px"} }>How we breakdown the applications <br/> process with our students</h1>
    </div>
    <table className='content-center object-center border-white	'>
        <tr className="row-header ">
            <th className="col-header-dead"></th>
            <th className="col-header" style={ {paddingTop: "20px", paddingBottom: "20px"} }>Basic</th>
            <th className="col-header" style={ {paddingTop: "20px", paddingBottom: "20px"} }>Standard</th>
            <th className="col-header" style={ {paddingTop: "20px", paddingBottom: "20px"} }>Premium</th>
        </tr>
        <tr className="row-des">
            <td className="col-des-text"># Of College Applications Desiring Support for (Per Student)</td>
            <td className="col-des">8</td>
            <td className="col-des">14</td>
            <td className="col-des">24</td>
        </tr>
        <tr className="row-des">
            <td className="col-des-text">Extracurricular Activity and Honors Program Advising</td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
        </tr>
        <tr className="row-des">
            <td className="col-des-text">Admissions Strategy / Strategic Positioning</td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
        </tr>
        <tr className="row-des">
            <td className="col-des-text">Recommendation Letter Guidance</td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
        </tr>
        <tr className="row-des">
            <td className="col-des-text">Resume Advising</td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
        </tr>
        <tr className="row-des">
            <td className="col-des-text">Student Academic Passions Consideration and Associated Goal Definition</td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
        </tr>
        <tr className="row-des">
            <td className="col-des-text">Common Application Essay(s) Drafting and Revision</td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
        </tr>
        <tr className="row-des">
            <td className="col-des-text">Expert, Committed, Advisors Graduated from Top Institutions</td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
        </tr>
        <tr className="row-des">
            <td className="col-des-text">Personal Statement Drafting and Revision</td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
        </tr>
        <tr className="row-des">
            <td className="col-des-text">Interview Strategizing & Preparation</td>
            <td className="col-des"></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
        </tr>
        <tr className="row-des">
            <td className="col-des-text">Deferral & Waitlisting Guidance</td>
            <td className="col-des"></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
        </tr>
        <tr className="row-des">
            <td className="col-des-text">Expert SAT & ACT Testing Strategizing and Tutoring</td>
            <td className="col-des"></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
        </tr>
        <tr className="row-des">
            <td className="col-des-text">Additional Final Review(s) & Feedback from Experienced Admissions Counselors</td>
            <td className="col-des"></td>
            <td className="col-des"></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
        </tr>
        <tr className="row-des">
            <td className="col-des-text">Scholarship Application Support & Guidance</td>
            <td className="col-des"></td>
            <td className="col-des"></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
        </tr>
        <tr className="row-des">
            <td className="col-des-text">Appeal Letter(s) Brainstorming & Editing Support</td>
            <td className="col-des"></td>
            <td className="col-des"></td>
            <td className="col-des"><img src={check_mark} className="table-tick"/></td>
        </tr>
    </table>
</div>
    </>
  )
}
