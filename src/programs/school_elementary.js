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

const Elementary = () => {
    return (
        <>
            <div className='ml-[4%] mr-[4%]'>
                <section className=''>
                    <div className="">
                        <img src={bg_img} alt="school_img" className='w-full h-[600px]' />

                        <h3 className="absolute lg:text-8xl sm:text-8xl sm:top-[350px] sm:ml-[20px] text-4xl font-bold text-white">Elementary School</h3>

                        <div className="lg:absolute sm:static sm:right-[100px] sm:top-[150px] sm:w-full lg:w-[500px] lg:mt-0 mt-6">
                            <div className="bg-[#2A3543] py-6 lg:px-9 px-4 xl:text-2xl text-base text-white text-justify">
                                Education is the foundation for success in a child’s life, making it vitally important to start your child off on the right foot. Don’t wait until
                                it’s too late; elementary school is a time when children learn the basics that lay the infrastructure for greater accomplishments later in life.
                                Struggling at this important stage of education can lead to even harsher difficulties, especially due to how core subjects like math build on
                                previous knowledge. Which is why we’re here to help.
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
                            <h4 className="xl:text-8xl text-5xl font-bold text-primary text-[#2A3543]">Grade 1-5 Diagnostic Test</h4>
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
                        <h4 className="text-[#2A3543] lg:text-[64px] text-8xl text-center font-bold sm:leading-[5rem] leading-[3rem]">Offered K-6 Subjects</h4>
                        <div className="grid grid-cols-5 pt-16 gap-y-16">
                            <div className="lg:col-span-1 col-span-5 flex justify-center">
                                <div className="tutor_details w-48 max-w-full flex flex-col items-center">
                                    <div className="tutor_icon h-40 flex justify-center">
                                        <img src={grade_1} alt="img" className="max-w-full" />
                                    </div>
                                    <h4 className="text-3xl font-bold lg:pt-12 pt-6">Grade 1</h4>
                                    <ul className="text-sm font-bold text-info grid gap-y-3 pl-4 mt-5">
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'> Grade 1 Math </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 1 English </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:col-span-1 col-span-5 flex justify-center">
                                <div className="tutor_details w-48 max-w-full flex flex-col items-center">
                                    <div className="tutor_icon h-40 flex justify-center">
                                        <img src={grade_3} alt="img" className="max-w-full" />
                                    </div>
                                    <h4 className="text-3xl font-bold lg:pt-12 pt-6">Grade 2</h4>
                                    <ul className="text-sm font-bold text-info grid gap-y-3 pl-4 mt-5">
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 1 Math </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 1 English </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:col-span-1 col-span-5 flex justify-center">
                                <div className="tutor_details w-48 max-w-full flex flex-col items-center">
                                    <div className="tutor_icon h-40 flex justify-center">
                                        <img src={grade_2} alt="img" className="max-w-full" />
                                    </div>
                                    <h4 className="text-3xl font-bold lg:pt-12 pt-6">Grade 3</h4>
                                    <ul className="text-sm font-bold text-info grid gap-y-3 pl-4 mt-5">
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 1 Math </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 1 English </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:col-span-1 col-span-5 flex justify-center">
                                <div className="tutor_details w-48 max-w-full flex flex-col items-center">
                                    <div className="tutor_icon h-40 flex justify-center">
                                        <img src={grade_1} alt="img" className="max-w-full" />
                                    </div>
                                    <h4 className="text-3xl font-bold lg:pt-12 pt-6">Grade 4</h4>
                                    <ul className="text-sm font-bold text-info grid gap-y-3 pl-4 mt-5">
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 1 Math </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 1 English </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:col-span-1 col-span-5 flex justify-center">
                                <div className="tutor_details w-48 max-w-full flex flex-col items-center">
                                    <div className="tutor_icon h-40 flex justify-center">
                                        <img src={grade_3} alt="img" className="max-w-full" />
                                    </div>
                                    <h4 className="text-3xl font-bold lg:pt-12 pt-6">Grade 5</h4>
                                    <ul className="text-sm font-bold text-info grid gap-y-3 pl-4 mt-5">
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 1 Math </a>
                                        </li>
                                        <li className="list-disc">
                                            <a href="#" className='text-[#6893F1]'>  Grade 1 English </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="important_links lg:mt-52 mt-9">
                    <div className="">
                        <div className="grid grid-cols-12 xl:pl-10">
                            <div className="xl:col-span-8 col-span-12 flex items-center">
                                <h4 className="sm:text-[64px] text-3xl font-bold sm:leading-[5rem] leading-[3rem]">
                                    Improve Test-taking Skills with
                                    <br className="xl:block hidden" /><span className="bg-[#2A3543] text-white p-1"> MMT Prep </span>
                                </h4>
                            </div>
                            <div className="xl:col-span-4 col-span-12 xl:mt-0 mt-10 mr-[15px]">
                                <ul className="grid gap-y-2">
                                    <li>
                                        <a href="#" className="xl:text-4xl text-3xl font-bold h-16 bg-[#2A3543] text-white flex hover:flex items-center justify-center"> SUMA </a>
                                    </li>
                                    <li>
                                        <a href="#" className="xl:text-4xl text-3xl font-bold h-16 bg-[#2A3543] text-white flex hover:flex items-center justify-center"> CogAT </a>
                                    </li>
                                    <li>
                                        <a href="#" className="xl:text-4xl text-3xl font-bold h-16 bg-[#2A3543] text-white flex hover:flex items-center justify-center"> SCAT </a>
                                    </li>
                                    <li>
                                        <a href="#" className="xl:text-4xl text-3xl font-bold h-16 bg-[#2A3543] text-white flex hover:flex items-center justify-center"> MAP </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mb-[100px] ml-[4%] mr-[4%]">
                    <h4 className="text-[#2A3543] lg:text-[64px] text-8xl text-center font-bold sm:leading-[5rem] leading-[3rem] mt-[250px]">Teaching Philosophy</h4>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingOne">
                                <button class="accordion-button relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                    aria-expanded="false" aria-controls="flush-collapseOne">
                                    Elementary School in the Education Process
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show" aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body py-4 px-5">What makes education in elementary school unique is the way it is taught in comparison to the upper levels. For example, various subjects are taught to students each day for very short amounts of time. They are exposed to new material without very much engagement for the purpose of giving students as much experience and opportunities in order to start building a strong foundation of basic core skills. It is only later, in high school and middle school, where students take those core skills and begin to hone them in specific subjects.
                                    Thus, we focus on assisting our elementary school students in mastering these skills that will continue to prove themselves critically important going forward in the future.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingTwo">
                                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                    aria-expanded="false" aria-controls="flush-collapseTwo">
                                    How Mathematics Should be Taught in Elementary School
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body py-4 px-5">Research has proven that visuals can help students monumentally in their studies, especially when it comes to mathematics. These visuals, which can often just be simple drawings or little stories, allow students to better understand a concept and assists them in retaining the subject matter. Remembering the basics in math in elementary school is vital for understanding more difficult concepts in the future.
                                    In addition, it is important to keep students engaged, not only visually, but mentally. Stimulating a young child’s mind with constant inquiries as to why an idea or approach makes sense also allows for better memory recall and comprehension. It also has the added benefit of giving the educator an idea of how the student is learning.</div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingThree">
                                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                    aria-expanded="false" aria-controls="flush-collapseThree">
                                    How Reading Comprehension Should be Taught in Elementary School
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body py-4 px-5">Kids like to get their hands dirty. By interacting with their environment and having various experiences is how they learn and understand best. So why should it be different when learning literacy inside the classroom? The semantics approach is one such strategy that combines both education and experience by choosing to focus on meaning rather than just content. It asks all the “why” questions to further help your student comprehend the material instead of just memorizing. One such semantic method would be using phonetics which refers to the study of the pronunciations of words and correlates those sounds to words. It familiarizes the student with these sounds which allow them to “sound out” words they aren’t familiar with and gives them the opportunity to figure them out for themselves. This analysis of sounds, and pronunciations is one such experience that allows the student to problem solve and gain valuable skills.</div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingFour">
                                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                    aria-expanded="false" aria-controls="flush-collapseFour">
                                    Creating an Compassionate Learning Environment
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body py-4 px-5">Kids can be very perceptive when it comes to emotions, especially when it comes to adults. As a result, the emotional environment around them can have a huge impact on their learning. Which is why MMT Prep upholds a firm belief that compassion and kindness is important and should be expressed at all times for the comfort and education of the students we instruct.
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

export default Elementary;