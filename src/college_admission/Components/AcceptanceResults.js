import React from 'react'

import bcm from '../img/bcm.png'
import bam from '../img/bam.png'
import gm from '../img/gm.png'
import pssm from '../img/pssm.png'
import nwm from '../img/nwm.jpg'
import psm from '../img/psm.png'
import wssm from '../img/wssm.jpg'

export default function AcceptanceResults() {
  return (
    <>
        
        <div className="session-5" style={{paddingBottom: "20px"}}>
    <div className="section5-heading">
        <h1>Our Acceptance Results</h1>
    </div>
        <div className="session5-content-row">
            <div className="s5cr-col">
                <img src={bcm}/>
            </div>
            <div className="s5cr-col">
                <img src={bam}/>
            </div>
            <div className="s5cr-col">
                <img src={gm}/>
            </div>
            <div className="s5cr-col">
                <img src={pssm}/>
            </div>
            <div className="s5cr-col">
                <img src={nwm}/>
            </div>
            <div className="s5cr-col">
                <img src={psm}/>
            </div>
            <div className="s5cr-col">
                <img src={wssm}/>
            </div>
        </div>
    </div>
    </>
  )
}
