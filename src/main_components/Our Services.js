import React, { Component } from "react";
import SAT from './style/SAT-Score-Report.png';
import SATauto2 from './style/SATauto2.png';

import { Autoplay } from "swiper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import "./style/App.css"
import "./style/animation.scss"

class OurServices extends Component {


    render() {
        return (
            <>
                <div className="pl-4 py-12 section">
                    <h1 className='text-4xl text-slate-700 font-bold py-4 pl-[30px]'>2022 Admission Results</h1>


                    <div className="slide rounded-none pl-[60px] pr-[60px]">
                        <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
                            <div className="flex w-[100%] rounded-none">
                                <div className='rounded-none w-[55%] mr-[5%]'>
                                    <img className='w-full rounded-none h-[380px]' src={SAT} />
                                </div>

                                <div className="w-[40%]">
                                    <img className='w-[w-40%] h-[380px]' src={SATauto2} />
                                </div>


                            </div>
                            <div className="flex w-[100%] rounded-none ">
                                <div className='rounded-none w-[55%] mr-[5%]'>
                                    <img className='w-full rounded-none h-[380px]' src={SAT} />
                                </div>

                                <div className="w-[40%]">
                                    <img className='w-[w-40%] h-[380px]' src={SATauto2} />
                                </div>


                            </div>
                        </Carousel>
                    </div>
                </div>
                <hr />
                <div className="pl-4 py-12 section">
                    <h1 className='text-4xl text-slate-700 font-bold py-4 pl-[30px]'>Standardized Tests</h1>


                    <div className="slide rounded-none pl-[60px] pr-[60px]">
                        <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
                            <div className="flex w-[100%] rounded-none">
                                <div className='rounded-none w-[55%] mr-[5%]'>
                                    <img className='w-full rounded-none h-[380px]' src={SAT} />
                                </div>

                                <div className="w-[40%]">
                                    <img className='w-[w-40%] h-[380px]' src={SATauto2} />
                                </div>


                            </div>
                            <div className="flex w-[100%] rounded-none">
                                <div className='rounded-none w-[55%] mr-[5%]'>
                                    <img className='w-full rounded-none h-[380px]' src={SAT} />
                                </div>

                                <div className="w-[40%]">
                                    <img className='w-[w-40%] h-[380px]' src={SATauto2} />
                                </div>


                            </div>
                        </Carousel>
                    </div>

                </div>
            </>
        );
    }
}

export default OurServices;