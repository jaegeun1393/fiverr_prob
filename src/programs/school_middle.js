import React from 'react';
import 'tw-elements';

import tutoring1 from "./imgs/tutoring1.svg"
import tutoring2 from "./imgs/tutoring2.svg"
import tutoring3 from "./imgs/tutoring3.svg"
import tutoring4 from "./imgs/tutoring4.svg"

import step_1 from "./imgs/step_1.svg"
import step_2 from "./imgs/step_2.svg"
import step_3 from "./imgs/step_3.svg"
import step_4 from "./imgs/step_4.svg"

import grade_1 from "./imgs/grade_1.png"
import grade_2 from "./imgs/grade_2.png"
import grade_3 from "./imgs/grade_3.png"

import bg_img from "./imgs/bg_img.jpg"

import Footer from '../footer';

const Middle = () => {
    return (
        <>
            <div className='ml-[4%] mr-[4%]'>

                <section className=''>
                    <div className="">
                        <img src={bg_img} alt="school_img" className='w-full h-[600px]' />

                        <h3 className="absolute lg:text-8xl sm:text-8xl sm:top-[350px] sm:ml-[20px] text-4xl font-bold text-white">Middle School</h3>

                        <div className="lg:absolute sm:static sm:right-[100px] sm:top-[150px] sm:w-full lg:w-[700px] lg:mt-0 mt-6">
                            <div className="bg-[#2A3543] py-6 lg:px-9 px-4 xl:text-2xl text-base text-white text-justify">
                                <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
                                    <div className="carousel-inner relative w-full overflow-hidden">
                                        <div className="carousel-item active relative float-left w-full h-min-[600px]">
                                            <p className="block w-full">
                                                Middle school is a period of transition and the beginning of a student’s journey into honing in their abilities. So, in order to provide the
                                                best support possible for our students, we have narrowed down what we believe to be the main factors of what a middle school student needs
                                                from their tutoring experience.
                                                <br /><br />
                                                Keep in mind that middle school children may not yet have the social skills needed to effectively interact with instructors from generations
                                                above them. Our tutors are much closer in age to your child than most of your child’s teachers in school, and as an outside resource, are able
                                                to communicate better as there is less of a social difference. This results in relationships that are not solely about subjects in school but
                                                also about meaningful connections and interactions.
                                            </p>
                                        </div>
                                        <div className="carousel-item relative float-left w-full h-min-[600px]">
                                            <p className="block w-full">
                                                Middle school is a prime time to start assisting your child in any subject they may need help in due to this time being a transition period, where students often begin to become disengaged as they are figuring out other aspects of their lives, socially, mentally, and emotionally.
                                                <br /><br />
                                                While these are important, we believe that it is also equally vital to keep your student on track and prevent them from neglecting the vital foundation of education that they started in elementary. Time is of the utmost importance and the transition to high school, where time begins to run out, is on the horizon at this stage.
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        className="hidden carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                                        type="button"
                                        data-bs-target="#carouselExampleControls"
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="hidden carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                                        type="button"
                                        data-bs-target="#carouselExampleControls"
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="tutoring_section text-primary bg-[#FDF6E3] lg:mt-52 mt-9 pt-3 pb-16 ">
                    <div className="">
                        <h4 className="lg:text-6xl text-3xl font-bold text-center text-[#2A3543]">Tutoring Plan</h4>
                        <div className="grid grid-cols-12 pt-16 gap-y-16">
                            <div className="lg:col-span-3 sm:col-span-6 col-span-12 text-center flex justify-center">
                                <div className="tutor_details w-56 max-w-full">
                                    <div className="tutor_icon h-40 flex justify-center">
                                        <img src={tutoring1} alt="img" className="max-w-full" />
                                    </div>
                                    <p className="mt-6 text-xl">PERSONALIZED ONSITE / ONLINE TUTORING</p>
                                </div>
                            </div>
                            <div className="lg:col-span-3 sm:col-span-6 col-span-12 text-center flex justify-center">
                                <div className="tutor_details w-56 max-w-full">
                                    <div className="tutor_icon h-40 flex justify-center">
                                        <img src={tutoring2} alt="img" className="max-w-full" />
                                    </div>
                                    <p className="mt-6 text-xl">CAREFULLY DESIGNED SESSIONS PLAN & COURSES</p>
                                </div>
                            </div>
                            <div className="lg:col-span-3 sm:col-span-6 col-span-12 text-center flex justify-center">
                                <div className="tutor_details w-56 max-w-full">
                                    <div className="tutor_icon h-40 flex justify-center">
                                        <img src={tutoring3} alt="img" className="max-w-full" />
                                    </div>
                                    <p className="mt-6 text-xl">LEARN FROM THE SUBJECT EXPERT TUTORS</p>
                                </div>
                            </div>
                            <div className="lg:col-span-3 sm:col-span-6 col-span-12 text-center flex justify-center">
                                <div className="tutor_details w-56 max-w-full">
                                    <div className="tutor_icon h-40 flex justify-center">
                                        <img src={tutoring4} alt="img" className="max-w-full" />
                                    </div>
                                    <p className="mt-6 text-xl">INDIVIDUALIZED WORKSHEETS/ HOMEWORK AFTER EVERY SESSION</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="step_section lg:mt-36 mt-9">
                    <div className="">
                        <h4 className="lg:lg:text-6xl text-3xl text-center"><b>4 Easy</b> Steps to start with <b>MMT Prep!</b></h4>
                    </div>
                    <div className="text-gray bg-[#FDF6E3] lg:mt-11 mt-9 py-12 lg:min-h-[386px]">
                        <div className="">
                            <div className="step_content grid grid-cols-12 lg:gap-x-10 gap-x-4 lg:gap-y-0 gap-y-8">
                                <div className="lg:col-span-3 sm:col-span-6 col-span-12 text-center flex justify-center">
                                    <div className="tutor_details text-center">
                                        <div className="tutor_icon h-28 flex justify-center">
                                            <img src={step_1} alt="img" className="max-w-full" />
                                        </div>
                                        <h4 className="text-xl font-bold mt-2.5">STEP 1</h4>
                                        <p className="text-xl">Consult with the <br className="sm:block hidden" />Academic Consultant</p>
                                    </div>
                                </div>
                                <div className="lg:col-span-3 sm:col-span-6 col-span-12 text-center flex justify-center">
                                    <div className="tutor_details text-center">
                                        <div className="tutor_icon h-28 flex justify-center">
                                            <img src={step_2} alt="img" className="max-w-full" />
                                        </div>
                                        <h4 className="text-xl font-bold mt-2.5">STEP 2</h4>
                                        <p className="text-xl">Design the Personalized <br className="sm:block hidden" />Academic Pathway</p>
                                    </div>
                                </div>
                                <div className="lg:col-span-3 sm:col-span-6 col-span-12 text-center flex justify-center">
                                    <div className="tutor_details text-center">
                                        <div className="tutor_icon h-28 flex justify-center">
                                            <img src={step_3} alt="img" className="max-w-full" />
                                        </div>
                                        <h4 className="text-xl font-bold mt-2.5">STEP 3</h4>
                                        <p className="text-xl">Attend the <br className="sm:block hidden" />session</p>
                                    </div>
                                </div>
                                <div className="lg:col-span-3 sm:col-span-6 col-span-12 text-center flex justify-center">
                                    <div className="tutor_details text-center">
                                        <div className="tutor_icon h-28 flex justify-center">
                                            <img src={step_4} alt="img" className="max-w-full" />
                                        </div>
                                        <h4 className="text-xl font-bold mt-2.5">STEP 4</h4>
                                        <p className="text-xl">Start the Weekly <br className="sm:block hidden" />Meeting with <br className="sm:block hidden" />designated Tutors</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mx-0 flex min-w-full flex-col items-center">
                            <button className="bg-[#2A3543] mt-8 justify-center py-2 px-4 text-[20px] text-white rounded-2xl"> Schedule a Free Session </button>
                        </div>
                    </div>
                </section>

                <section className=" lg:mt-52 mt-9">
                    <div className="grid grid-cols-12">
                        <div className="lg:col-span-6 col-span-12 flex items-center">
                            <h4 className="xl:text-8xl text-5xl font-bold text-primary text-[#2A3543]">Grade 6-8 Diagnostic Test</h4>
                        </div>
                        <div className="lg:col-span-6 col-span-12 lg:pl-10 lg:pt-0 pt-6">
                            <div className="font-bold xl:text-5xl text-2xl xl:leading-[4rem] text-white bg-[#2A3543] lg:py-20 py-5 lg:pl-20 pl-5 pr-5 h-full">
                                Math diagnostic test<br />Science diagnostic test<br />ELA diagnostic test
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grade_section lg:mt-52 mt-9 pt-3 pb-16">
                    <div className="">
                        <h4 className="text-[#2A3543] lg:text-[64px] text-8xl text-center font-bold sm:leading-[5rem] leading-[3rem]">Offered K-9 Subjects</h4>
                        <div className="grid grid-cols-3 pt-16 gap-y-16">
                            <div className="lg:col-span-1 col-span-5 flex justify-center">
                                <div className="tutor_details w-48 max-w-full flex flex-col items-center">
                                    <div className="tutor_icon h-40 flex justify-center">
                                        <img src={grade_1} alt="img" className="max-w-full" />
                                    </div>
                                    <h4 className="text-3xl font-bold lg:pt-12 pt-6">Grade 6</h4>
                                    <ul className="text-sm font-bold text-info grid gap-y-3 pl-4 mt-5">
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'> Grade 6 Math </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 6 English </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 6 Science </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:col-span-1 col-span-5 flex justify-center">
                                <div className="tutor_details w-48 max-w-full flex flex-col items-center">
                                    <div className="tutor_icon h-40 flex justify-center">
                                        <img src={grade_3} alt="img" className="max-w-full" />
                                    </div>
                                    <h4 className="text-3xl font-bold lg:pt-12 pt-6">Grade 7</h4>
                                    <ul className="text-sm font-bold text-info grid gap-y-3 pl-4 mt-5">
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 7 Math </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 7 English </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 7 Science </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:col-span-1 col-span-5 flex justify-center">
                                <div className="tutor_details w-48 max-w-full flex flex-col items-center">
                                    <div className="tutor_icon h-40 flex justify-center">
                                        <img src={grade_2} alt="img" className="max-w-full" />
                                    </div>
                                    <h4 className="text-3xl font-bold lg:pt-12 pt-6">Grade 8</h4>
                                    <ul className="text-sm font-bold text-info grid gap-y-3 pl-4 mt-5">
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 8 Math </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 8 English </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 8 Science </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="important_links lg:mt-24 mt-9">
                    <div className="">
                        <div className="grid grid-cols-12">
                            <div className="xl:col-span-7 col-span-12 flex items-center">
                                <h4 className="sm:text-[64px] text-3xl font-bold sm:leading-[5rem] leading-[3rem]">
                                    Improve Test-taking Skills with
                                    <br className="xl:block hidden" /><span className="bg-[#2A3543] text-white p-1"> MMT Prep </span>
                                </h4>
                            </div>
                            <div className="xl:col-span-5 col-span-12 xl:mt-0 mt-10">
                                <ul className="grid sm:grid-rows-3 grid-rows-6 grid-flow-col gap-4 h-full">
                                    <li>
                                        <a href="#" className="xl:text-4xl text-3xl font-bold h-16 bg-[#2A3543] text-white flex hover:flex items-center justify-center"> SUMA </a>
                                    </li>
                                    <li>
                                        <a href="#" className="xl:text-4xl text-3xl font-bold h-16 bg-[#2A3543] text-white flex hover:flex items-center justify-center"> CogAT </a>
                                    </li>
                                    <li>
                                        <a href="#" className="xl:text-4xl text-3xl font-bold h-16 bg-[#2A3543] text-white flex hover:flex items-center justify-center"> MAP </a>
                                    </li>
                                    <li>
                                        <a href="#" className="xl:text-4xl text-3xl font-bold h-16 bg-[#2A3543] text-white flex hover:flex items-center justify-center"> SSAT </a>
                                    </li>
                                    <li>
                                        <a href="#" className="xl:text-4xl text-3xl font-bold h-16 bg-[#2A3543] text-white flex hover:flex items-center justify-center"> ISEE </a>
                                    </li>
                                    <li>
                                        <a href="#" className="xl:text-4xl text-3xl font-bold h-16 bg-[#2A3543] text-white flex hover:flex items-center justify-center"> PSAT </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mb-[100px] ml-[4%] mr-[4%]">
                    <h4 className="text-[#2A3543] lg:text-[64px] text-8xl text-center font-bold sm:leading-[5rem] leading-[3rem] mt-[250px]">Teaching Philosophy</h4>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="flush-headingOne">
                                <button className="accordion-button relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                    aria-expanded="false" aria-controls="flush-collapseOne">
                                    Tutoring: Not Just Another Job
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse border-0 collapse show" aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body py-4 px-5">
                                    We believe that tutoring is not just about teaching and working through practice problems. Tutoring should involve and take into consideration who your student is as a person. As such, we focus not only on your student’s report card but also on the bond between your child and their tutor. A child cannot learn under someone they do not trust or cannot express their emotions around. So even the most trivial of conversations that take place in sessions are considered important.
                                    A student will work harder under an educator who makes it clear that they see them as more than just another job. In addition, their tutor can become a pillar of support that can mentor students, not only with their grades but also with social problems that your child may be struggling with. Having another support system is important in this stage of life as your child will be navigating a new social world and most likely will not have the support they need from school as many schools do not have the capabilities to give your student the attention they deserve.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="flush-headingTwo">
                                <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                    aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Goal Setting and its Impact
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body py-4 px-5">
                                    As a student in middle school, it can be hard to feel motivated because the future still seems far off. However, without proper goals, a child can begin to disengage from education due to a feeling of aimlessness; they feel as though there is no point or achievement. Therefore, it is absolutely vital that your child is given quantifiable, clear goals that they can slowly work towards. These goals can include anything from a certain achievement in an extracurricular, a specific grade in a class, or gaining experience in a certain subject. At MMT, we assist you and your child to set these goals with our knowledge in various fields to keep our students motivated and moving forward to their future.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="flush-headingThree">
                                <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                    aria-expanded="false" aria-controls="flush-collapseThree">
                                    Encouragement for the Future
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body py-4 px-5">
                                    Proper encouragement is needed to keep your child motivated and moving forward. And the best encouragement you can give your student revolves around instilling the concept that the work they put in now, will reward them years later. We find out what subjects captivate your student and begin encouraging them with those interests in mind. For example, if they express a desire to learn more about having a career in the STEM field, our instructors explain to them and show them how mastering subjects such as basic mathematics will benefit them later on.
                                </div>

                            </div>
                        </div>

                        <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="flush-headingFour">
                                <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                    aria-expanded="false" aria-controls="flush-collapseFour">
                                    Pacing
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body py-4 px-5">
                                    In elementary school, the amount of work given is often small and insignificant, which makes the transition to middle school all the more daunting with its seemingly large number of assignments. Rarely do schools moderate the amount of homework given, and overwhelm their students without taking this transition into consideration. However, we at MMT believe in pacing. Our tutors break down large assignments and concepts into easily digestible parts that will not only keep your student on track, but actually learning. This method of division prevents the development of procrastination–which is often attributed to feelings of being overwhelmed–and keeps your student motivated as they feel accomplished when they finish small parts of projects.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="flush-headingFive">
                                <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                    aria-expanded="false" aria-controls="flush-collapseFive">
                                    It’s All About Your Child
                                </button>
                            </h2>
                            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body py-4 px-5">
                                    MMT Prep places an emphasis on an education that takes into consideration your child, not only as a student, but as a whole person. Our tutors strive to learn and understand who your child is; their interests, their dislikes, their personality, in order to take those qualities into account and adapt their teaching method to a style that best suits them. Understanding your child will also enable our instructors to make every interaction valuable and worthwhile in their sessions, further strengthening the connection between them, allowing our tutors to become an invaluable support to your child in many areas of their life. All of these factors will contribute further to providing your student with the best education and the most out of their lessons.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Middle;