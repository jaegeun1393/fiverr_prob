import React from 'react'

function BSDMDSchools() {
  return (
    <>
        <div className="table2 mt-[100px]">
        <div className="table2-heading">
            <h3>BS/DMD Schools</h3>
        </div>
        <table>
            <tr className="row2-header">
                <th className="col2-header">College</th>
                <th className="col2-header">Overall Acceptance Rate</th>
                <th className="col2-header">MMT Acceptance Rate</th>
                <th className="col2-header">MMT Advantage</th>
            </tr>
            <tr className="row2-des-wc">
                <td className="col2-des-text">Boston University</td>
                <td className="col2-des">15%</td>
                <td className="col2-des">24%</td>
                <td className="col2-des">1.6x</td>
            </tr>
            <tr className="row2-des-c">
                <td className="col2-des-text">Case Western Univ</td>
                <td className="col2-des">8%</td>
                <td className="col2-des">32%</td>
                <td className="col2-des">4x</td>
            </tr>
            <tr className="row2-des-wc">
                <td className="col2-des-text">Lecom Den</td>
                <td className="col2-des">22%</td>
                <td className="col2-des">53%</td>
                <td className="col2-des">2.4x</td>
            </tr>
            <tr className="row2-des-c">
                <td className="col2-des-text">Nova Southeastern</td>
                <td className="col2-des">26%</td>
                <td className="col2-des">50%</td>
                <td className="col2-des">1.9x</td>
            </tr>
            <tr className="row2-des-wc">
                <td className="col2-des-text">Rutgers</td>
                <td className="col2-des">17%</td>
                <td className="col2-des">37%</td>
                <td className="col2-des">2.1x</td>
            </tr>
            <tr className="row2-des-c">
                <td className="col2-des-text">SUNY</td>
                <td className="col2-des">14%</td>
                <td className="col2-des">46%</td>
                <td className="col2-des">3.2x</td>
            </tr>
        </table>
    </div>
    </>
  )
}

export default BSDMDSchools