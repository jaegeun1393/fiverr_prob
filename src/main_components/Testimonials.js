import React from 'react';
import box from './style/box.png'

import { BsChevronRight } from "react-icons/bs";

const Testimonials = () => {
    return (
        <>
            <div className='py-12 px-4 pt-[50px] section'>

                <h1 className='text-4xl text-black text-center font-bold pb-10  pt-8'>Our Team Leads.</h1>


                <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 gap-4  lg:grid-cols-4">
                    <div className="mx-auto">
                        <img src={box} alt="" />
                        <div className="bg-[#D9D9D9] pb-6  lg:w-full w-[273px]  px-2 py-3">


                            <p className='text-black'> Sean Kim / <span className='text-[gray]'>MMT founder</span></p>
                            <p className='text-[10px]'> Welcome to the website. If you're here, you're likely <br /> looking to find random words.</p>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <img src={box} alt="" />
                        <div className="bg-[#D9D9D9] pb-6 lg:w-full  w-[273px]  px-2 py-3">


                            <p className='text-black'> Sean Kim / <span className='text-[gray]'>MMT founder</span></p>
                            <p className='text-[10px]'> Welcome to the website. If you're here, you're likely <br /> looking to find random words.</p>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <img src={box} alt="" />
                        <div className="bg-[#D9D9D9] pb-6  lg:w-full w-[273px]  px-2 py-3">


                            <p className='text-black'> Sean Kim / <span className='text-[gray]'>MMT founder</span></p>
                            <p className='text-[10px]'> Welcome to the website. If you're here, you're likely <br /> looking to find random words.</p>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <img src={box} alt="" />
                        <div className="bg-[#D9D9D9] pb-6  lg:w-full w-[273px]  px-2 py-3">


                            <p className='text-black'> Sean Kim / <span className='text-[gray]'>MMT founder</span></p>
                            <p className='text-[10px]'> Welcome to the website. If you're here, you're likely <br /> looking to find random words.</p>
                        </div>
                    </div>


                </div>
                <div className="pr-8 pt-3">
                    <p className='text-end text-bold text-black flex justify-end items-center'> <BsChevronRight className='text-end'></BsChevronRight><BsChevronRight className='text-end'></BsChevronRight> More  </p>

                </div>
            </div>
        </>
    );
};

export default Testimonials;