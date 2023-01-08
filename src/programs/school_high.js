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

const High = () => {
    return (
        <>
            <div className='ml-[4%] mr-[4%]'>

                <section className=''>
                    <div className="">
                        <img src={bg_img} alt="school_img" className='w-full h-[600px]' />

                        <h3 className="absolute lg:text-8xl sm:text-8xl sm:top-[350px] sm:ml-[20px] text-4xl font-bold text-white">High School</h3>

                        <div className="lg:absolute sm:static sm:right-[100px] sm:top-[150px] sm:w-full lg:w-[700px] lg:mt-0 mt-6">
                            <div className="bg-[#2A3543] py-6 lg:px-9 px-4 xl:text-2xl text-base text-white text-justify">
                                <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
                                    <div className="carousel-inner relative w-full overflow-hidden">
                                        <div className="carousel-item active relative float-left w-full h-min-[600px]">
                                            <p className="block w-full">
                                                The home stretch, otherwise known as High School. This is a period known for its grueling workloads, high hopes, and struggles with motivation as your student approaches the finish line of their primary K-12 education.
                                                <br /><br />
                                                In this period, students are often in need of help more than ever. It is understandable that their motivation and energy may begin to wane at this stage due to how much progress they’ve made and how much effort they’ve put in so far.
                                                <br /><br />
                                                However, it is also the most dangerous stage to be losing speed and progress. It is all too easy for a student’s efforts so far to go to waste as they approach their next steps in education, and they desperately need support to make one final push.
                                            </p>
                                        </div>
                                        <div className="carousel-item relative float-left w-full h-min-[600px]">
                                            <p className="block w-full">
                                                That’s where we step in and step up for your child. Our teaching plans are designed to keep your student engaged with their learning, prevent them from procrastinating, stay motivated, and keep their eyes firmly fixed on their future.
                                                <br /><br />
                                                We remind them of why they are here and what lies in store for them, values that so many high school students lose track of, leading to a severe decrease in motivation. Our support will keep your student moving forward, while also preventing your student from feeling too overwhelmed with the workload demanded of them.
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
                            <h4 className="xl:text-8xl text-5xl font-bold text-primary text-[#2A3543]">Grade 9-12 Diagnostic Test</h4>
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
                        <div className="grid grid-cols-4 pt-16 gap-y-16">
                            <div className="lg:col-span-1 col-span-5 flex justify-center">
                                <div className="tutor_details w-48 max-w-full flex flex-col items-center">
                                    <div className="tutor_icon h-40 flex justify-center">
                                        <img src={grade_1} alt="img" className="max-w-full" />
                                    </div>
                                    <h4 className="text-3xl font-bold lg:pt-12 pt-6">Grade 9</h4>
                                    <ul className="text-sm font-bold text-info grid gap-y-3 pl-4 mt-5">
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'> Grade 9 Math </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 9 English </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 9 Science </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:col-span-1 col-span-5 flex justify-center">
                                <div className="tutor_details w-48 max-w-full flex flex-col items-center">
                                    <div className="tutor_icon h-40 flex justify-center">
                                        <img src={grade_3} alt="img" className="max-w-full" />
                                    </div>
                                    <h4 className="text-3xl font-bold lg:pt-12 pt-6">Grade 10</h4>
                                    <ul className="text-sm font-bold text-info grid gap-y-3 pl-4 mt-5">
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 10 Math </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 10 English </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 10 Science </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:col-span-1 col-span-5 flex justify-center">
                                <div className="tutor_details w-48 max-w-full flex flex-col items-center">
                                    <div className="tutor_icon h-40 flex justify-center">
                                        <img src={grade_2} alt="img" className="max-w-full" />
                                    </div>
                                    <h4 className="text-3xl font-bold lg:pt-12 pt-6">Grade 11</h4>
                                    <ul className="text-sm font-bold text-info grid gap-y-3 pl-4 mt-5">
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 11 Math </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 11 English </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 11 Science </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:col-span-1 col-span-5 flex justify-center">
                                <div className="tutor_details w-48 max-w-full flex flex-col items-center">
                                    <div className="tutor_icon h-40 flex justify-center">
                                        <img src={grade_1} alt="img" className="max-w-full" />
                                    </div>
                                    <h4 className="text-3xl font-bold lg:pt-12 pt-6">Grade 12</h4>
                                    <ul className="text-sm font-bold text-info grid gap-y-3 pl-4 mt-5">
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'> Grade 12 Math </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 12 English </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 12 Science </a>
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
                                <ul className="grid sm:grid-rows-4 grid-rows-6 grid-flow-col gap-4 h-full">
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
                                    <li>
                                        <a href="#" className="xl:text-4xl text-3xl font-bold h-16 bg-[#2A3543] text-white flex hover:flex items-center justify-center"> AP exams </a>
                                    </li>
                                    <li>
                                        <a href="#" className="xl:text-4xl text-3xl font-bold h-16 bg-[#2A3543] text-white flex hover:flex items-center justify-center"> SAT / ACT </a>
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
                                    The Key is Motivation
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse border-0 collapse show" aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body py-4 px-5">
                                    After years of experience working with high school students, we have come to understand what makes and keeps students in this stage motivated, and work to incorporate these factors into every aspect of our teaching. One of the biggest factors has been proven to be human interaction, particularly the relationship between student and educator. According to research, when we are given expectations by an individual whom we hold in respect and like, we are far more inclined to want to meet those expectations and follow their habits than when faced with an individual that invokes negative emotions. This human behavior is important because when we pair your child with one of our expert tutors, we set an example for your student to follow and learn from. In turn, our instructors will focus on earning and keeping that respect to further inspire and motivate your child.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="flush-headingTwo">
                                <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                    aria-expanded="false" aria-controls="flush-collapseTwo">
                                    It Goes Both Ways
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body py-4 px-5">
                                    It is human nature to be more inclined to learn from and listen to other individuals who hold them in an equal or similar esteem, who respect who they are as a person. No learning can be properly done without some bond of trust between educator and student; your student may be too wary otherwise and miss valuable pieces of information. Which is why our instructors at MMT focus on earning that respect and likeability first and foremost. They focus on getting to know your student and make it clear that they are there as a source of support for your student, in order to establish a relationship that will aid them throughout their sessions.                                </div>
                            </div>
                        </div>

                        <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="flush-headingThree">
                                <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                    aria-expanded="false" aria-controls="flush-collapseThree">
                                    The Importance of a Growth Mindset
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body py-4 px-5">
                                    Failures can often be hard to bounce back from without a proper mindset. It can become all too easy to fall into thoughts of despair, believing that every result will turn out the same regardless of the amount of effort put in. Our goal is to inspire what we call the Growth Mindset in our students. The growth mindset revolves around the line of thinking that effort does have an impact on the end results of a challenge, and that mistakes are only opportunities for growth. We firmly believe that as long as a student can stick to this mindset, they have the capability to improve and reach their goals. Turning feedback and mistakes into new stepping stones is what we do here at MMT.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="flush-headingFour">
                                <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                    aria-expanded="false" aria-controls="flush-collapseFour">
                                    Motivate? No, Inspire
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body py-4 px-5">
                                    It is a well known fact that there is no learning without proper motivation. Therefore, it is important to first establish a good foundation of motivation before attempting to teach. And the most effective way to keep students persevering is by inspiring them rather than through rewards, or by force. As a result, our tutors focus on being honest, trustworthy role models who serve as a goal and an example for their students. Inspiration is the fuel for memory retention, motivation, and tenacity.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="flush-headingFive">
                                <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                    aria-expanded="false" aria-controls="flush-collapseFive">
                                    Success, Likability and Relationships
                                </button>
                            </h2>
                            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body py-4 px-5">
                                At MMT Prep, we believe that it starts with us. Our instructors are the ones who will be teaching your children and they will be responsible for the important process of inspiring, motivating, and instructing students for their futures, which is a heavy responsibility. In addition, success, trust, and likeability has been proven to be closely intertwined with one another. So it is absolutely important to us that each student gets along with and forms a bond of trust with their educator. Tutors at MMT make it their priority to get to know each of their students as much as they can, and work hard to develop a relationship that contains mutual respect for both the teacher and student. We put in the time and effort in every single session to get caught up with your child and use this information constantly in real time in order to always implement the best teaching strategy possible. In addition, consistently putting in work to always maintain an amicable and trusting relationship with your child boosts productivity, communication, and above all, confidence, which is proven to boost academic results in any and all areas.                                </div>
                            </div>
                        </div>

                        <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="flush-heading6">
                                <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6"
                                    aria-expanded="false" aria-controls="flush-collapse6">
                                    The Right Answers
                                </button>
                            </h2>
                            <div id="flush-collapse6" className="accordion-collapse collapse" aria-labelledby="flush-heading6"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body py-4 px-5">
                                    Instructors don’t need to rely on vague, inherited methods of teaching anymore with the research and technology we have now. And at MMT Prep, we have developed learning strategies that are, we believe, the best and most effective methods when educating a child. We utilize plans that involve defined goal setting, repetition, pacing, concept understanding, and comprehension; strategies that should be utilized at any school, public or private, but aren’t.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="flush-heading7">
                                <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7"
                                    aria-expanded="false" aria-controls="flush-collapse7">
                                    Quality Over Quantity
                                </button>
                            </h2>
                            <div id="flush-collapse7" className="accordion-collapse collapse" aria-labelledby="flush-heading7"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body py-4 px-5">
                                    Consistency, rather than quantity, is proven to be more effective when it comes to education. Which is why all of our lesson plans and strategies have been perfectly designed to monitor, improve, and test your child without overwhelming them. Repetition has been proven to improve memory retention, especially when that repetition is spread out over time and given at a singular time weekly. As such, we also strive to be as patient as possible with our students due to an understanding of how a human’s cognitive ability functions. Furthermore, we take this understanding and choose to take advantage of it, maximizing efficiency when tutoring our students.                                </div>
                            </div>
                        </div>

                        <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="flush-heading8">
                                <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8"
                                    aria-expanded="false" aria-controls="flush-collapse8">
                                    The Importance of the Whys
                                </button>
                            </h2>
                            <div id="flush-collapse8" className="accordion-collapse collapse" aria-labelledby="flush-heading8"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body py-4 px-5">
                                    Although doing dozens and dozens of practice problems to master a concept may be effective for test scores, all of that effort can be counted as fruitless if the student does not understand the “whys” of that concept. Ideas build off of each other, this is a well known fact. So in the case that a student spends all of their time robotically practicing how to solve a problem, instead of ever bothering to understand why the solved problem makes sense, the student has learned nothing. They will find it difficult to take this concept and add it to their foundation of knowledge. Unfortunately, this kind of “learning” is all too common in an education system where grades are often seen as the only thing that matters, which results in many a student disliking or avoiding a subject they could have excelled in or been passionate about, if they had only been taught to look further than what was surface level.                                </div>
                            </div>
                        </div>

                        <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="flush-heading9">
                                <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse9"
                                    aria-expanded="false" aria-controls="flush-collapse9">
                                    Practice Makes Perfect
                                </button>
                            </h2>
                            <div id="flush-collapse9" className="accordion-collapse collapse" aria-labelledby="flush-heading9"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body py-4 px-5">
                                    Once the quality of a concept has been achieved, it’s time to nail it into your brain. It’s not enough to perfectly solve a question once. A student must practice that problem many, many, many times over. The majority of the subjects in school require correct repetition of their concepts in order to master them in anticipation of harder problems in the future and when taking exams. So, at MMT Prep, we make sure to keep students reviewing with practice problems that target areas of weakness they might have so that they’ll have the best shot at approaching unknown problems. Repetition also promotes efficiency when dealing with similar problems so students don’t waste time tediously calculating known basics.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="flush-heading10">
                                <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse10"
                                    aria-expanded="false" aria-controls="flush-collapse10">
                                    Asking the Hard Questions
                                </button>
                            </h2>
                            <div id="flush-collapse10" className="accordion-collapse collapse" aria-labelledby="flush-heading10"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body py-4 px-5">
                                    It’s human nature to reject the idea that they might be wrong or don’t understand an idea immediately. That prideful nature is the thing that keeps that hand down in the classroom, has students pretending that they don’t need help until the day of the exam, and procrastinating assignments. Which is why it’s up to educators to start asking their students the hard questions they so often avoid. Asking a simple question of “How well do you think you know this concept? Show me” can often provide vital information to both student and educator as to where the student stands and where they need to improve. Mistakes can only be turned into improvement, which makes it imperative that identification of those mistakes is done often.                                </div>
                            </div>
                        </div>

                        <div className="border-b-0 accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 className="accordion-header mb-0" id="flush-heading11">
                                <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse11"
                                    aria-expanded="false" aria-controls="flush-collapse11">
                                    Not a One Man Race
                                </button>
                            </h2>
                            <div id="flush-collapse11" className="accordion-collapse collapse" aria-labelledby="flush-heading11"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body py-4 px-5">
                                    Tutoring is a two way street, not an individual project. Both the tutor and the student are a team. And in order for a team to make progress effectively, both parties must be aware of what is going on at all times. Here at MMT Prep, we clearly and concisely make it apparent as to what the goals for each session and the goals for the overall picture are. Stressing this and making sure the student is informed as to why and what they should be doing, also builds confidence in both the relationship between student and tutor, which in turns proceeds to motivate the high school student, who most likely has very little control and knowledge in their progress in life normally. This strategy of keeping communication and openly, consistently, emphasizing goals has been proven to boost academic grades and scores.                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default High;