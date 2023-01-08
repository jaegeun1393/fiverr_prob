import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { FaInstagram, FaFacebook } from "react-icons/fa";

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formState: false,
      role: ""
    };
  }

  render() {
    return (
      <>
        <div className="bg-[#1E2833] pt-4 pb-4 section" id="footerID">
          <div className="  bottom-0 shadow-none px-6 py-1">
            <div className="sm:flex justify-between items-center">
              <h1 className='text-2xl font-bold text-[white]'>MMTPrep</h1>
              <button className='pt-2 pb-2 btn outline-none hover:text-white hover:bg-[gray] my-5 sm:my-0 bg-white text-black capitalize rounded-none px-20 font-bold text-l'>Contact Us</button>
            </div>

            <p className=' text-[white] text-[12px]'>Hundreds of students have been accepted into the country’s top colleges thanks to MMT Prep’s holistic college admissions consulting services. Our expert consultants <br />
              create personalized admissions counseling packages for every student to ensure they go through the college application process with the best chance of getting accepted into the <br />
              world’s most competitive programs.</p>

          </div>

          <div className="overflow-hidden border-none py-2 shadow-none px-6  grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-white   ">
            <div className='my-2'>
              <p className="text-[15px] mb-[5px] text-white font-bold">Programs</p>
              <a className="text-[11px] block">Elementary School</a>
              <a className="text-[11px] block">Middle School</a>
              <a className="text-[11px] block">High School</a>
              <a className="text-[11px] block">SAT / ACT</a>
              <a className="text-[11px] block">Computer Science</a>
              <a className="text-[11px] block">AMC / Mathcouts</a>

            </div>
            <div className='my-2'>
              <p className="text-[15px] mb-[5px] text-white font-bold">College Admission</p>
              <a className="text-[11px] block">Grade 12</a>
              <a className="text-[11px] block">BS/MD</a>
              <a className="text-[11px] block">BS/DMD</a>
              <a className="text-[11px] block">BS/BSN</a>
              <a className="text-[11px] block">Transfer</a>

            </div>
            <div className='my-2'>
              <p className="text-[15px] mb-[5px] text-white font-bold">Resources</p>
              <a className="text-[11px] block">Blogs</a>
              <a className="text-[11px] block">Practice Exams</a>
              <a className="text-[11px] block">College Estimate</a>
              <a className="text-[11px] block">Resume Builder</a>

            </div>
            <div>
              <p className="text-[15px] mb-[5px] text-white font-bold">Future Development</p>
              <a className="text-[11px] block">MMT Worksheet</a>
              <a className="text-[11px] block">MMT Publications</a>
              <a className="text-[11px] block">MMT Research Institute</a>
              <a className="text-[11px] block">MMT Labs</a>
              <a className="text-[11px] block">Franchising</a>
            </div>

            <div>
              <p className="text-[15px] mb-[5px] text-white font-bold">Get In Touch</p>
              <a className="text-[11px] block">Call  +1-971-256-2586</a>
              <a className="text-[11px] block">Text/Whatsapp  +1-971-256-2586</a>
              <a className="text-[11px] block">Email  admin@mmtprep.com</a>
            </div>

          </div>
          <div className="px-6">



            <h1 className='text-2xl pt-3 my-2 pb-[5px] font-bold text-[white]'>Subscribe To Our Newsletter
            </h1>

            <div className="sm:flex">
              <div className="sm:w-[65%] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
                <input type="text" placeholder="First Name" className="pl-[10px] bg-[#1E2833] text-white border-[1px] border-white rounded-full" />
                <input type="text" placeholder="Last Name" className="pl-[10px] bg-[#1E2833] text-white border-[1px] border-white rounded-full" />

                <input type="text" placeholder="Email" className="pl-[10px] input mt-5 md:mt-0 bg-[#1E2833] text-white border-[1px] border-white rounded-full" />
                <button className='btn mt-5 xl:mt-0 rounded-full outline-none hover:text-white hover:bg-[gray] bg-white text-black capitalize font-bold text-[15px]'>Subscribe</button>
              </div>

              <div className="sm:w-[30%] sm:ml-[5%]  sm:flex sm:justify-end">
                <div className="w-[246px] h-[43px] p-0 m-0  mt-5  sm:mt-0 flex items-center justify-between px-5  text-white">
                  
                  <FaFacebook className='text-[25px]'></FaFacebook>
                  <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white text-[10px]"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                  <FaInstagram className='text-[25px]'></FaInstagram>
                  <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white text-[15px]"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                </div>
              </div>
            </div>

          </div>




        </div>

      </>
    );
  }
}

export default Footer;
