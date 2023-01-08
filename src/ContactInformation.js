import React, { Component } from "react";
import DateTimePicker from 'react-datetime-picker';
import axios from "axios";
import { BASELINE } from "./util/index";

import './App.css';
import map from './Assets/images/map.png'
import obook from './Assets/images/Books.png'
import oicon from './Assets/images/oicon.png'
import oman from './Assets/images/oman.png'
import obox from './Assets/images/obox.png'
import './Contact.css'
import './main_components/style/landing_effect.css';
import Footer from "./footer";

import './Contact.css';
class ContactInformation extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
            <>
            <div className='px-4 py-8 relative'>
              <h1 className='text-5xl md:text-[100px] mb-10 text-black font-bold'>OFFERS</h1>
              <p className='bg-[#2A3543] absolute top-[80px] sm:left-[80px] md:top-[120px] md:left-[265px] w-[250px] sm:text-[18px] sm:w-[318px] text-white '> <span className='px-1 sm:px-4'>Take the first step with our center</span></p>
      
            </div>
            <div className=" relative h-[500px] pt-10 sm:pb-0 pb-10 ">
              <div className="grid  bg-[#DEDFE1] grid-cols-1   sm:grid-cols-3 gap-4">
      
                <div className="flex visible justify-center   items-center py-5">
      
                  <div className="absolute top-0 sm:top-14 left-6 md:left-14   mx-auto man flex justify-center items-center  h-[500px]"><div className="bg-[white] rounded-lg shadow-2xl w-[90%] lg:py-0 py-12 h-auto lg:h-[350px]">
                    <div className="sm:flex justify-center py-3 mx-auto sm:justify-around items-center">
                      <div className="flex justify-center">                <img src={oman} alt="" />   </div>
                      <h1 className='text-3xl text-center md:text-[50px] mb-10 text-black font-bold'>FREE CONSULTATION</h1>
      
                    </div>
                    <div className="">
                      <p className='
                  px-14'>Wondering if there’s still time to impact the school year? Or which pathways or classes <br /> help increase your chances of getting into college? Explore how MMT prep can inspire <br /> and support your child to do great things. <br />
      
                      </p>
      
                      <ul className='px-12'>
                        <li> Discuss your child’s personal needs and goals for the rest of the year with a manager.
      
                        </li>
                        <li>
                          Explore how we make learning personal to your child.
      
                        </li>
                        <li>
                          Ask any and all questions.
      
                        </li>
                        <li>
      
                          Tour a center to see why kids love coming to MMT prep.
      
                        </li>
                      </ul>
                    </div>
      
      
      
                  </div></div>
      
      
                  <div className="bg-[white] rounded-2xl p-5 px-10 h-[280px] mx-auto ">
      
                    <div className="flex justify-center "><img src={oman} alt="" /></div><p className='pt-10 text-center font-bold text-1xl  text-black'>FREE CONSULTATION</p></div></div>
      
      
      
      
                <div className="flex justify-center visibleb bg-[#C2C4C7] items-center py-5">
      
                  <div className="absolute top-100 sm:top-14 left-6 md:left-14  mx-auto book flex justify-center items-center  h-[500px]"><div className="bg-[white] rounded-lg shadow-2xl w-[90%] lg:py-0 py-12 h-auto lg:h-[350px]">
                    <div className="sm:flex py-3  justify-around items-center">
                      <div className="flex justify-center">                <img src={obook} alt="" /></div>
                      <h1 className='text-center text-4xl md:text-[30px] mb-10 text-black font-bold'>Complementary
                        SAT / ACT Test</h1>
      
                    </div>
                    <div className="">
                      <p className='
                  px-10'>Schedule a full-length practice SAT or ACT test. <br /> <br />
      
                        Taking a practice SAT or ACT test at MMT Prep is a great way to get familiar with the format, figure out your teen’s strengths and weaknesses, and pinpoint exactly where to focus to get the best results. And for a limited time, your child can take a full-length practice exam at MMT Prep for FREE. <br />
      
                        Complete the form to the right to get started. A staff member from our center will give you a call and coordinate a time to take the practice test.
      
      
                      </p>
      
      
                    </div>
      
      
      
                  </div></div>
      
                  <div className="bg-[white] rounded-2xl   px-8 p-5 h-[280px] mx-auto "><div className="flex justify-center"><img src={obook} alt="" /></div><p className='pt-10 text-center font-bold text-1xl text-black'>FREE COMPLEMENTARY  <br />
                    SAT/ACT test</p></div></div>
      
                <div className="flex justify-center visiblei items-center py-5">
      
      
                  <div className="absolute to-200 sm:top-14 left-6 md:left-14 mx-auto icon flex justify-center items-center  h-[500px]"><div className="bg-[white] rounded-lg shadow-2xl w-[90%] h-auto lg:h-[350px]  lg:py-0 py-12">
                    <div className="sm:flex py-3  justify-around items-center">
                      <div className="flex justify-center"><img src={oicon} alt="" /></div>
                      <h1 className='text-3xl  text-center md:text-[50px] mb-10 text-black font-bold'>Get $100 off a tutoring </h1>
      
                    </div>
                    <div className="">
                      <p className='
                  px-14'>Did you know that students at MMT Prep typically see two to three times more growth in their math and reading scores once they come to our center? We deliver results! And right now, to help you get started, we’re offering $100 off any tutoring program available at MMT Prep. <br /> <br />
      
                        To receive your tutoring coupon, please tell us a little about yourself by completing the form above.
                      </p>
                    </div>
      
      
      
                  </div></div>
      
                  <div className="bg-[white] rounded-2xl  h-[280px] p-5  px-8 mx-auto "><div className="flex justify-center"><img src={oicon} alt="" /></div><p className='pt-10 text-center font-bold text-1xl text-black'>Get $100 off a tutoring <br />
                    program at MMT Prep</p></div></div>
      
      
      
      
      
              </div>
            </div>
      
      
      
            <div className="px-4   mt-[800px] sm:my-0">
      
      
      
              <h1 className='text-5xl md:text-[100px] capitalize mb-10 text-black font-bold'>We are Here</h1>
      
              <div className=" sm:flex  ">
      
                <div className="px-4">
                  <img src={map} alt="" />
                </div>
                <div className="grid pt-12 justify-center sm:pt-0 mx-auto grid-row-3 gap-4">
      
                  <img src={obox} alt="" />
      
      
      
                  <div className="flex items-center">
                    <img src={obox} alt="" />
      
                  </div>
      
      
                  <div className="flex items-end">
                    <img src={obox} alt="" />
      
                  </div>
      
      
      
      
                </div>
      
      
              </div>
      
      
            </div>
      
      
            <div className="px-4 pt-20">
      
              <div className="">
                <p className='px-2 pb-2 text-2xl font-bold text-[#6893F1]'>
                  CONTACT US
                </p>
      
                <h1 className='text-5xl md:text-[80px] mb-10 text-black font-bold'>Need to ask us a question?</h1>
                <p className='text-2xl text-[gray]'>Fill out the form below and we’ll do some research on our end and get back to you within 24-48 <br /> hours.</p>
      
              </div>
              <form className="">
                <div className=" grid grid-cols-1 py-8  sm:grid-cols-3 gap-0  lg:w-[80%] xl:w-[56%] mx-auto">
      
      
                  <div className="flex justify-center"><input type="text" placeholder="First Name (parents/ Guardian)" className="input border-[2px] border-black rounded-none w-full max-w-xs" /></div>
                  <div className="flex justify-center">
                    <input type="text" placeholder="Last Name (parents/ Guardian)" className="input border-[2px] border-black rounded-none w-full max-w-xs" />
                  </div>
                  <div className="flex justify-center">
                    <input type="text" placeholder="Preferred Consulting Date" className="input border-[2px] border-black rounded-none w-full max-w-xs" />
                  </div>
      
      
                  <div className="flex justify-center">
                    <input type="text" placeholder="Email" className="input border-[2px] border-t-0 border-black rounded-none w-full max-w-xs" />
                  </div>
                  <div className="flex justify-center">
                    <input type="text" placeholder="Phone" className="input border-[2px] border-t-0 border-black rounded-none w-full max-w-xs" />
                  </div>
                  <div className="flex justify-center">
                    <input type="text" placeholder="2-3 pm" className="input border-[2px] border-t-0 border-black rounded-none w-full max-w-xs" />
                  </div>
      
      
                </div>
                <div className="sm:grid pb-12 2xl:px-4  grid-cols-1 sm:grid-cols-2 lg:w-[80%] xl:w-[56%] mx-auto">
                  <div className="">
                    <div className="flex justify-center">
                      <textarea className="w-[320px] sm:w-full  h-[200px] textarea border-[1px] border-black" placeholder="Bio"></textarea>
      
                    </div>
                  </div>
      
      
      
                  <div className="">
                    <div className="flex pt-6 sm:pt-0  justify-center">
                      <div className="grid grid-rows-5 py-2 gap-3">
                        <div className="flex "> <input type="checkbox" className="mr-6 rounded-none border-[#918b8b] checkbox" />
                          <p className='text-[12px] text-[black] font-normal'>General Consulting</p>
                        </div>
                        <div className=" flex "> <input type="checkbox" className="mr-6 rounded-none border-[#918b8b] checkbox" />
                          <p className='text-[12px] text-[black] font-normal'>Career Consulting</p>
                        </div>
                        <div className="flex "> <input type="checkbox" className="mr-6 rounded-none border-[#918b8b] checkbox" />
                          <p className='text-[12px] text-[black] font-normal'>College / SAT / ATC <br /> Consulting</p>
                        </div>
                        <div className="flex j"> <input type="checkbox" className="mr-6 rounded-none border-[#918b8b] checkbox" />
                          <p className='text-[12px] text-[black] font-normal'>Complementary  SAT / ATC</p>
                        </div>
                        <div className="flex "> <input type="checkbox" className="mr-6 rounded-none border-[#918b8b] checkbox" />
                          <p className='text-[12px] text-[black] font-normal'>Internship / Volunteer </p>
                        </div>
      
      
                      </div>
      
                    </div>
                    <div className="flex justify-center sm:justify-end">            <button className='btn bg-[#2A3543] rounded-sm px-12'>Submit</button>
                    </div>
      
                  </div>
      
      
      
      
                </div>
      
              </form>
            </div>
      
          </>
        );
    }
}

export default ContactInformation;
