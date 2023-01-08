import React, { Component } from "react";

import teacher_and_student from './style/teacher_and_student.jpg'
import rectangle from './style/Rectangle 167.png'
import main from './style/main_1 1.png'
import SAT from './style/SAT-Score-Report.png'
import Teacher from './style/Teacher_Student_Relationship.png'

import StickyBox from "react-sticky-box";
import $ from 'jquery';
import "./style/animation.scss"

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}

class Banner extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

        });
    }
    render() {
        return (
            <div className='ml-[3%] mr-[3%] sm:ml-[6%] sm:mr-[6%]'>
                <div className="pt-4 pb-12 section">
                    <div className="pt-4 pb-12 relative sm:flex  items-center">
                        <div className='sm:w-[35%] px-4 sm:px-0 pb-8 sm:pb-0 sm:ml-[4%]'>
                            <h1 className="text-3xl   md:text-4xl lg:text-5xl   xl:absolute z-[100] xl:top-20  2xl:static  text-black font-bold">
                                Extraordinary <br />
                                Futures Begin with <br className='block  sm:hidden   lg:block' />
                                MMT Prep</h1>
                            <p className="my-4 lg:pt-10 xl:pt-0 text-gray-500">
                                Your child can do anything with the right  <br className='block sm:hidden lg:block' />
                                support. You’ll love watching your child</p>
                            <button className='btn mt-5 xl:mt-0 pt-2 pb-2 text-xl  rounded-full outline-none   hover:text-white hover:bg-[#28323F]  bg-[#28323F] text-white px-20 sm:px-10 lg:px-[70px] font-bold capitalize   '>Get STATED</button>
                        </div>
                        <div className="sm:w-[60%] z-[0] ">
                            <img src={teacher_and_student} className="lg:h-[600px] w-full" />
                        </div>



                    </div>
                </div>

                <div className="px-8 py-12 section" id="extraAnimation">
                    <div className="flex pb-[20px]">
                        <img className='w-auto h-[100px]' src={rectangle} alt="" />
                        <div className="mx-4 sm:mx-6">
                            <p className='text-[20px] sm:text-[30px] mt-[-6px] sm:mt-[-10px]   font-semibold'>How are we</p>
                            <h1 className='text-4xl   lg:text-[60px] font-bold'>UNIQUE?</h1>
                        </div>
                    </div>


                    <div style={{ display: "flex", alignItems: "flex-start" }}>


                        <StickyBox offsetTop={200} offsetBottom={0}>
                            <div className="left-sidebar">
                                <div id="menu">
                                    <ul>

                                        <li className=" box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                            <a href="#1" className='active flex justify-start items-center p-[40px] hover:bg-gray-100 focus:scale-100 rounded-3xl'>
                                                <div className=" sm:flex my-4  items-center">
                                                    <div className="w-full p-[90px] py-[50px] sm:py-0">
                                                        <h1 className='text-[30px] sm:text-[40px] text-black font-bold'>Customized Platform</h1>
                                                        <p className='text-[20px] text-[gray]'>Flexible platforms that enable your  <br className='block sm:hidden lg:block' /> child to learn anytime, anywhere.

                                                        </p>

                                                    </div>
                                                </div>
                                            </a>
                                        </li>


                                        <li className=" box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                            <a href="#2" className='active flex justify-start items-center p-[40px] hover:bg-gray-100 focus:scale-100 rounded-3xl'>
                                                <div className=" sm:flex my-4  items-center">
                                                    <div className="w-full p-[90px] py-[50px] sm:py-0">
                                                        <h1 className='text-[30px] sm:text-[40px] text-black font-bold'>Customized Platform</h1>
                                                        <p className='text-[20px] text-[gray]'>Flexible platforms that enable your  <br className='block sm:hidden lg:block' /> child to learn anytime, anywhere.

                                                        </p>

                                                    </div>
                                                </div>
                                            </a>
                                        </li>


                                        <li className=" box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                            <a href="#3" className='active flex justify-start items-center p-[40px] hover:bg-gray-100 focus:scale-100 rounded-3xl'>
                                                <div className=" sm:flex my-4  items-center">
                                                    <div className="w-full p-[90px] py-[50px] sm:py-0">
                                                        <h1 className='text-[30px] sm:text-[40px] text-black font-bold'>Customized Platform</h1>
                                                        <p className='text-[20px] text-[gray]'>Flexible platforms that enable your  <br className='block sm:hidden lg:block' /> child to learn anytime, anywhere.

                                                        </p>

                                                    </div>
                                                </div>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </StickyBox>

                        <div style={{height: 'auto', width: '40%' }}>
                            <div className=" my-4 py-32" id="1">
                                <img className='w-full  h-[285px]' src={main} alt="" />
                            </div>

                            <div className=" my-4 py-32" id="2">
                                <img className='w-full  h-[285px]' src={Teacher} alt="" />
                            </div>

                            <div className=" my-4 py-32" id="3">
                                <img className='w-full  h-[285px]' src={SAT} alt="" />
                            </div>

                        </div>
                    </div>
                </div>

            </div >
        );
    }
}

export default Banner;