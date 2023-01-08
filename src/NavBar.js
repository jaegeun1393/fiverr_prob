import React, { Component, createElement } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASELINE, AFTER_LOGIN } from "./util/index";

import Reams from './main_components/style/Reams.png'
import Vector from './main_components/style/Vector.png'
import { doc } from "prettier";

class NabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: false,
      role: ""
    };

    this.show_nav_menu = this.show_nav_menu.bind(this);
    this.remove_menu_all = this.remove_menu_all.bind(this);
  }

  async remove_menu_all() {
    document.getElementById("res_menu").className = "hidden relative z-[40] bg-white rounded-b-lg shadow-lg lg:w-full";
    document.getElementById("program_menu").className = "hidden relative z-[40] bg-white rounded-b-lg shadow-lg lg:w-full";
    document.getElementById("college_menu").className = "hidden relative z-[40] bg-white rounded-b-lg shadow-lg lg:w-full";
    document.getElementById("About_menu").className = "hidden relative z-[40] bg-white rounded-b-lg shadow-lg lg:w-full";

  }

  async show_nav_menu(num) {

    if (num == 1) {
      this.remove_menu_all();
      var main = document.getElementById("res_menu");
      main.className = "relative z-[40] bg-white rounded-b-lg shadow-lg lg:w-full";
    }
    else if (num == 2) {
      this.remove_menu_all();
      var main = document.getElementById("program_menu");
      main.className = "relative z-[40] bg-white rounded-b-lg shadow-lg lg:w-full";
    }
    else if (num == 3) {
      this.remove_menu_all();

      var main = document.getElementById("college_menu");
      main.className = "relative z-[40] bg-white rounded-b-lg shadow-lg lg:w-full";
    }
    else if (num == 4) {
      this.remove_menu_all();
      var main = document.getElementById("About_menu");
      main.className = "relative z-[40] bg-white rounded-b-lg shadow-lg lg:w-full";
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <div className="w-full text-gray-700 bg-white body-font shadow-md">
          <div className="flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">

            <Link to={"/"} className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0">
              <img style={{ width: "195px", height: "33px" }} src={require('./logo.jpg')} />
            </Link>

            <div className="relative flex flex-col md:flex-row">
              <nav className="flex flex-wrap items-center pt-3 pb-5 mb-4 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">

                <div className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900" onClick={() => this.show_nav_menu(1)} >Resources</div>

                <div className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900" onClick={() => this.show_nav_menu(2)} >Program</div>

                <div className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900" onClick={() => this.show_nav_menu(3)} >College Admission</div>

                {/* <Link to={"/Testmonial"} className="mr-6 font-medium leading-6 text-gray-600 md:mr-6 hover:text-gray-900">College Admission</Link> */}
                <Link to={"/ContactInformation"} className="mr-6 font-medium leading-6 text-gray-600 md:mr-6 hover:text-gray-900">Contact</Link>
                <div className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900" onClick={() => this.show_nav_menu(4)} >About Us</div>

              </nav>


              {
                this.state.formState === false && (
                  <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
                    <Link to={"/Login"} className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                      Sign in
                    </Link>
                  </div>
                )
              }
              {
                this.state.formState === true && this.state.role == "admin" && (
                  <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
                    <Link to={"/dashboard/manager"} className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                      Dashboard
                    </Link>
                  </div>
                )
              }
              {
                this.state.formState === true && this.state.role == "customer" && (
                  <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
                    <Link to={"/dashboard/user"} className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                      Dashboard
                    </Link>
                  </div>
                )
              }
              {
                this.state.formState === true && this.state.role == "student" && (
                  <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
                    <Link to={"/dashboard/user"} className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                      Dashboard
                    </Link>
                  </div>
                )
              }
              {
                this.state.formState === true && this.state.role == "Teacher" && (
                  <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
                    <Link to={"/dashboard/teacher"} className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                      Dashboard
                    </Link>
                  </div>
                )
              }
              {
                this.state.formState === true && this.state.role == "parent" && (
                  <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
                    <Link to={"/dashboard/user"} className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                      Dashboard
                    </Link>
                  </div>
                )
              }
            </div>
          </div>
        </div>

        <div className="top-[73px] ml-[200px] mr-[200px]">
          <div className='hidden relative z-[40] bg-white rounded-b-lg shadow-lg lg:w-full' id="res_menu" onMouseLeave={() => this.remove_menu_all()}>
            <div className="flex-row-reverse lg:flex py-4 w-[100%]">

              <div className="absolute text-white text-[20px] right-[10px] font-bold lg:hidden" onClick={() => this.remove_menu_all()}>
                X
              </div>

              <div className="w-full lg:w-[50%] mr-[20px]">
                <img className='w-full sm:h-[250px] rounded-lg' src={Reams} alt="" />
              </div>

              <div className="w-full justify-center md:justify-around ml-[20px] py-12 lg:py-0 sm:flex items-center lg:w-[50%]">

                <div className="">
                  <div className="flex flex-row justify-center w-[260px] h-[95px] items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full ' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <h1 className='text-black font-semibold text-[15px]'>[X] High School Pathways</h1>
                      <p className='text-[#868686] text-[9px]'>Insights on College Applications</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-[260px] h-[95px] items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <h1 className='text-black font-semibold text-[15px]'>[X] College Admissions Report</h1>
                      <p className='text-[#868686] text-[9px]'>Insights on College Applications</p>
                    </div>
                  </div>
                  <div className="flex py-4  justify-center items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <h1 className='text-black font-semibold text-[15px]'>[X] Standardized Tests</h1>
                      <p className='text-[#868686] text-[9px]'>Insights on College Applications</p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="flex py-4  justify-center items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <h1 className='text-black font-semibold text-[15px]'>[X] After School Programs / Voluntary Activities</h1>
                      <p className='text-[#868686] text-[9px]'>Insights on College Applications</p>
                    </div>
                  </div>
                  <div className="flex py-4  justify-center items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <h1 className='text-black font-semibold text-[15px]'>[X] Occupation Guides / <br />
                        Research</h1>
                      <p className='text-[#868686] text-[9px]'>Insights on College Applications</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>


          </div>
          <div className='hidden relative z-[40] bg-white rounded-b-lg shadow-lg lg:w-full' id="program_menu" onMouseLeave={() => this.remove_menu_all()}>
            <div className="flex-row-reverse lg:flex py-4 w-[100%]">

              <div className="absolute text-white text-[20px] right-[10px] font-bold lg:hidden" onClick={() => this.remove_menu_all()}>
                X
              </div>

              <div className="w-full lg:w-[50%] mr-[20px]">
                <img className='w-full sm:h-[250px] rounded-lg' src={Reams} alt="" />
              </div>

              <div className="w-full justify-center md:justify-around ml-[20px] py-12 lg:py-0 sm:flex items-center lg:w-[50%]">

                <div className="">
                  <div className="flex flex-row justify-center w-[260px] h-[95px] items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full ' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <Link to={"/programs/school/elementary"} className="text-black font-semibold text-[15px]">Elementary School</Link>
                      <p className='text-[#868686] text-[9px]'>Solidifying the Basics</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-[260px] h-[95px] items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <Link to={"/programs/school/middle"} className="text-black font-semibold text-[15px]">Middle School</Link>
                      <p className='text-[#868686] text-[9px]'>Prepare for the advancements</p>
                    </div>
                  </div>
                  <div className="flex py-4  justify-center items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <Link to={"/programs/school/high"} className="text-black font-semibold text-[15px]">High School</Link>
                      <p className='text-[#868686] text-[9px]'>Embark On the Research Projects & College Profile Selection</p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="flex py-4  justify-center items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <Link to={"/programs/satact"} className="text-black font-semibold text-[15px]">SAT / ACT</Link>
                      <p className='text-[#868686] text-[9px]'>Excel in Standardized Tests</p>
                    </div>
                  </div>
                  <div className="flex py-4  justify-center items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <h1 className='text-black font-semibold text-[15px]'>[X] Computer Science Courses</h1>
                      <p className='text-[#868686] text-[9px]'>Be College Ready in Java, C++ , C , Python, SQL & more</p>
                    </div>
                  </div>
                  <div className="flex py-4  justify-center items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <h1 className='text-black font-semibold text-[15px]'>[X] AMC / Mathcounts</h1>
                      <p className='text-[#868686] text-[9px]'>Become</p>
                    </div>
                  </div>
                </div>

              </div>




            </div>


          </div>
          <div className='hidden relative z-[40] bg-white rounded-b-lg shadow-lg lg:w-full' id="college_menu" onMouseLeave={() => this.remove_menu_all()}>
            <div className="flex-row-reverse lg:flex py-4 w-[100%]">

              <div className="absolute text-white text-[20px] right-[10px] font-bold lg:hidden" onClick={() => this.remove_menu_all()}>
                X
              </div>

              <div className="w-full lg:w-[50%] mr-[20px]">
                <img className='w-full sm:h-[250px] rounded-lg' src={Reams} alt="" />
              </div>

              <div className="w-full justify-center md:justify-around ml-[20px] py-12 lg:py-0 sm:flex items-center lg:w-[50%]">

                <div className="">
                  <div className="flex flex-row justify-center w-[260px] h-[95px] items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full ' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <Link to={"/collegeadmission/grade12"} className="text-black font-semibold text-[15px]">Grades 12</Link>
                      <p className='text-[#868686] text-[9px]'>Application Counseling And Essay Review</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-[260px] h-[95px] items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <Link to={"/collegeadmission/bsmdcandidates"} className="text-black font-semibold text-[15px]">BS/MD Candidates</Link>
                      <p className='text-[#868686] text-[9px]'>counseling for BS/MD application</p>
                    </div>
                  </div>
                  <div className="flex py-4  justify-center items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <h1 className='text-black font-semibold text-[15px]'>[X] BS/DMD Candidates</h1>
                      <p className='text-[#868686] text-[9px]'>counseling for Dental School application</p>
                    </div>
                  </div>
                  <div className="flex py-4  justify-center items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <h1 className='text-black font-semibold text-[15px]'>[X] Transfer Students</h1>
                      <p className='text-[#868686] text-[9px]'>Application Counseling & Final Review</p>
                    </div>
                  </div>
                </div>

              </div>




            </div>


          </div>
          <div className='hidden relative z-[40] bg-white rounded-b-lg shadow-lg lg:w-full' id="About_menu" onMouseLeave={() => this.remove_menu_all()}>
            <div className="flex-row-reverse lg:flex py-4 w-[100%]">

              <div className="absolute text-white text-[20px] right-[10px] font-bold lg:hidden" onClick={() => this.remove_menu_all()}>
                X
              </div>

              <div className="w-full grid grid-cols-1 sm:grid-cols-3  gap-2 lg:w-[60%] mr-[20px]">
                <img className=' w-full sm:h-[330px] ' src={Reams} alt="" />
                <img className='w-full sm:h-[330px]' src={Reams} alt="" />
                <img className=' w-full sm:h-[330px]' src={Reams} alt="" />
              </div>

              <div className="w-full justify-center md:justify-around ml-[20px] py-12 lg:py-0 sm:flex items-center lg:w-[50%]">

                <div className="">
                  <div className="flex flex-row justify-center w-[260px] h-[95px] items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full ' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <h1 className='text-black font-semibold text-[15px]'>[X] Our Process</h1>
                      <p className='text-[#868686] text-[9px]'>Application Counseling And Essay Review</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-[260px] h-[95px] items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <div className="text-black font-semibold text-[15px]">[X] Instructors</div>
                      <p className='text-[#868686] text-[9px]'>counseling for BS/MD application</p>
                    </div>
                  </div>
                  <div className="flex py-4  justify-center items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <Link to={"/Testmonial"} className="text-black font-semibold text-[15px]">Testimonial</Link>
                      <p className='text-[#868686] text-[9px]'>counseling for Dental School application</p>
                    </div>
                  </div>
                  <div className="flex py-4  justify-center items-center">
                    <img className='bg-[#E7DFC3] px-4 py-4 text-black rounded-full' src={Vector} alt="" />
                    <div className="px-4 w-full">
                      <h1 className='text-black font-semibold text-[15px]'>[X] Blog</h1>
                      <p className='text-[#868686] text-[9px]'>Application Counseling & Final Review</p>
                    </div>
                  </div>
                </div>

              </div>




            </div>


          </div>
        </div>
      </>
    );
  }
}

export default NabBar;
