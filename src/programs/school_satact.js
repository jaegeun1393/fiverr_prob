import React, { useState } from "react";
import StepIcon from "./imgs/icon.png";
import CurvedLine from "./imgs/vector.png";
import Image1 from "./imgs/image1.png";
import Image2 from "./imgs/image2.png";
import Image3 from "./imgs/image3.png";
import Image4 from "./imgs/image4.png";
import 'tw-elements';

import Footer from '../footer';

function SatAct() {
    const [popup, setPopup] = useState({
        popup1: false,
        popup2: false,
        popup3: false,
        popup4: false,
    });

    const [control, setcontrol] = useState({});

    const [section_title, setsection_title] = useState("Work One-On-One With Your Tutor To Rectify Weaknesses");

    const [section_des, setsection_des] = useState("You will spend time with your tutor executing your SAT prep plan. We know you’re busy, so our tutors make themselves available to fit your needs. Every week and every call will have an agenda so that your time is spent on the most high-impact activities..");


    const popupHandler = (id) => {
        setPopup((prevState) => {
            return {
                ...prevState,
                [id]: !prevState[id],
            };
        });
    };

    const change_st = (id) => {
        if (id == "st1") {
            setsection_title("Work One-On-One With Your Tutor To Rectify Weaknesses");
            setsection_des("You will spend time with your tutor executing your SAT prep plan. We know you’re busy, so our tutors make themselves available to fit your needs. Every week and every call will have an agenda so that your time is spent on the most high-impact activities..");
        }
        else if (id == "st2") {
            setsection_title("Create An Initial, Highly Personalized SAT Prep Plan");
            setsection_des("You will be paired with a dedicated 99th percentile SAT tutor with experience coaching candidates like yourself. During the kickoff, they will identify your learning style and prepare a personalized study plan. This will evolve into a customized private SAT tutoring plan that focuses on improving your weaknesses.");
        }
        else if (id == "st3") {
            setsection_title("Work One-On-One With Your Tutor To Rectify Weaknesses");
            setsection_des("You will spend time with your tutor executing your SAT prep plan. We know you’re busy, so our tutors make themselves available to fit your needs. Every week and every call will have an agenda so that your time is spent on the most high-impact activities..");

        }
        else if (id == "st4") {
            setsection_title("Regular Assessments Through Practice Tests And Simulations");
            setsection_des("Your tutor will monitor your progress on a weekly basis and recommend changes to your study plan as needed. We don’t want you to spend time on a topic or concept you’ve already mastered. At the same time, we might need to spend more time on certain topics where you feel less confident. We use practice tests and simulation exercises to monitor your progress. The rigor of your customized plan makes sure test day feels like a breeze.");

        }
        else if (id == "st5") {
            setsection_title("You’re Ready To Ace The SAT!");
            setsection_des("After extensive one-on-one sessions, targeted feedback, and practice tests, you’re ready to take the SAT!");

        }
    }

    return (
        <div className="">
            {/* Section 1  */}
            <div className="landing-bg h-[20rem] lg:h-screen w-full flex items-center md:px-[5%]">
                <div className="flex flex-col lg:flex-row justify-center w-full lg:items-center p-5 text-white lg:space-x-12">
                    <div className="relative">
                        <div className="text-[2rem] lg:text-[8rem] relative z-[50] font-bold">
                            SAT / ACT
                        </div>
                        <div className="hidden lg:block absolute left-[-15%] top-[-18%] bg-[#2A3543] w-[170px] h-[170px]"></div>
                    </div>
                    <div className="lg:text-[1.5rem] lg:max-w-[320px] lg:mt-12">
                        Our <span className="font-bold">99th percentile</span> SAT tutors
                        help you increase your score with personalized, virtual tutoring
                        that focuses on identifying and improving in areas you need help
                        with most.
                    </div>
                </div>
            </div>
            {/* Section 1 End  */}

            {/* Section 2  */}
            <div className="p-5 lg:p-12 lg:py-24 flex flex-col items-center text-center">
                <div className="font-bold lg:text-[1.5rem]">
                    SAT prep that delivers results without any stress or hassle
                </div>
                <div className="mt-5 md:mt-12 flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-12 lg:space-x-24 xl:space-x-36">
                    <div className="flex flex-col space-y-5 items-center">
                        <div className="text-[3rem] font-bold drop-shadow-md rounded-full bg-[#FFEEC2] w-[190px] h-[190px] flex items-center justify-center">
                            <div>99th</div>
                        </div>
                        <div className="font-medium">Percentile Tutors</div>
                    </div>
                    <div className="flex flex-col space-y-5 items-center">
                        <div className="text-[3rem] font-bold drop-shadow-md rounded-full bg-[#CBECEA] w-[190px] h-[190px] flex items-center justify-center">
                            <div>200</div>
                        </div>
                        <div className="font-medium">
                            Point Increase On Average For
                            <br /> 100+ Hours Of SAT Tutoring
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5 items-center">
                        <div className="text-[3rem] font-bold drop-shadow-md rounded-full bg-[#F8E2DD] w-[190px] h-[190px] flex items-center justify-center">
                            <div>10+</div>
                        </div>
                        <div className="font-medium">Years Of Experience</div>
                    </div>
                </div>
            </div>
            {/* Section 2 End  */}

            {/* Section 3  */}
            <div className="p-5 lg:p-12 bg-[#E0E9E9] 2xl:px-[10%]">
                <div className="lg:text-[2.5rem] text-center">
                    How Our Private SAT Tutoring Service Works
                </div>
                <div className="grid grid-cols-2 gap-5 md:grid-cols-5 xl:flex xl:gap-0 items-center mt-5 lg:mt-12">
                    <div className="w-full p-6 bg-white flex flex-col items-center space-y-5 drop-shadow-md" onClick={()=>change_st("st1")}>
                        <img className="w-[4rem] h-[4rem]" src={StepIcon} alt="" />
                        <div>Step 1</div>
                    </div>
                    <img className="w-full hidden xl:block" src={CurvedLine} alt="" />
                    <div className="w-full p-6 bg-white flex flex-col items-center space-y-5 drop-shadow-md" onClick={()=>change_st("st2")}>
                        <img className="w-[4rem] h-[4rem]" src={StepIcon} alt="" />
                        <div>Step 2</div>
                    </div>
                    <img className="w-full hidden xl:block" src={CurvedLine} alt="" />
                    <div className="w-full p-6 bg-white flex flex-col items-center space-y-5 drop-shadow-md" onClick={()=>change_st("st3")}>
                        <img className="w-[4rem] h-[4rem]" src={StepIcon} alt="" />
                        <div>Step 3</div>
                    </div>
                    <img className="w-full hidden xl:block" src={CurvedLine} alt="" />
                    <div className="w-full p-6 bg-white flex flex-col items-center space-y-5 drop-shadow-md" onClick={()=>change_st("st4")}>
                        <img className="w-[4rem] h-[4rem]" src={StepIcon} alt="" />
                        <div>Step 4</div>
                    </div>
                    <img className=" w-full hidden xl:block" src={CurvedLine} alt="" />
                    <div className="col-span-2 md:col-span-1 w-full p-6 bg-white flex flex-col items-center space-y-5 drop-shadow-md" onClick={()=>change_st("st5")}>
                        <img className="w-[4rem] h-[4rem]" src={StepIcon} alt="" />
                        <div>Step 5</div>
                    </div>
                </div>
                <div className="mt-5 lg:mt-12 p-5 md:p-12 bg-white drop-shadow-lg flex items-center flex-col md:flex-row md:space-x-12 lg:space-x-16">
                    <img src={StepIcon} alt="" />
                    <div className="text-[1.25rem] mt-5 md:mt-0">
                        <div className="font-bold">{section_title}</div>
                        <div className="mt-5">
                            {section_des}
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 3 End  */}

            {/* Section 4  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 p-5 lg:p-12 text-white 2xl:px-[10%]">
                {/* Box 1  */}
                <div
                    onClick={() => popupHandler("popup1")}
                    className="p-5 md:px-12 md:py-8 bg-[#2A3543] cursor-pointer"
                >
                    <div className="font-semibold text-[1.25rem] lg:text-[1.75rem]">
                        Learn SAT Content With Proven Strategies For Success
                    </div>
                    <div className="mt-2">
                        While learning section-specific content is an excellent first step,
                        our experts teach you proven strategies to absorb and apply what you
                        learn to any question type. Our tutors are committed to providing
                        the private tutoring you need to make the most of your time and
                        boost your score.
                    </div>
                </div>
                {/* Popup Box 1  */}
                <div
                    onClick={() => popupHandler("popup1")}
                    className={`${popup.popup1 ? "opacity-1 visible" : "opacity-0 invisible"
                        } transition-all fixed left-0 top-0 w-full flex items-center justify-center z-[9999] h-screen p-12`}
                    style={{ background: "rgba(0,0,0,0.3)" }}
                >
                    <img className="max-h-[95%]" src={Image1} alt="" />
                </div>
                {/* Box 1 End  */}

                {/* Box 2  */}
                <div
                    onClick={() => popupHandler("popup2")}
                    className="p-5 md:p-12 bg-[#2A3543] cursor-pointer flex flex-col justify-center"
                >
                    <div className="font-semibold text-[1.25rem] lg:text-[1.75rem]">
                        A Personalized SAT Study Plan
                    </div>
                    <div className="mt-2">
                        No two students are the same; that’s why your study plan is always
                        tailored to your needs and schedule.
                    </div>
                </div>
                {/* Popup Box 2  */}
                <div
                    onClick={() => popupHandler("popup2")}
                    className={`${popup.popup2 ? "opacity-1 visible" : "opacity-0 invisible"
                        } transition-all fixed left-0 top-0 w-full flex items-center justify-center z-[9999] h-screen p-12`}
                    style={{ background: "rgba(0,0,0,0.3)" }}
                >
                    <img className="max-h-[95%]" src={Image2} alt="" />
                </div>
                {/* Box 2 End  */}

                {/* Box 3  */}
                <div
                    onClick={() => popupHandler("popup3")}
                    className="p-5 md:p-12 bg-[#2A3543] cursor-pointer"
                >
                    <div className="md:text-center font-semibold text-[1.25rem] lg:text-[1.75rem]">
                        1-On-1 Continued Support
                    </div>
                    <div className="mt-2">
                        We understand that SAT prep isn’t always a walk in the park. That’s
                        why your tutor is passionate about providing the continued support
                        and encouragement you need through weekly check-ins at every stage
                        of your tutoring plan.
                    </div>
                </div>
                {/* Popup Box 3  */}
                <div
                    onClick={() => popupHandler("popup3")}
                    className={`${popup.popup3 ? "opacity-1 visible" : "opacity-0 invisible"
                        } transition-all fixed left-0 top-0 w-full flex items-center justify-center z-[9999] h-screen p-12`}
                    style={{ background: "rgba(0,0,0,0.3)" }}
                >
                    <img className="max-h-[95%]" src={Image3} alt="" />
                </div>
                {/* Box 3 End */}

                {/* Box 4  */}
                <div
                    onClick={() => popupHandler("popup4")}
                    className="p-5 md:p-12 bg-[#2A3543] cursor-pointer"
                >
                    <div className="md:text-center font-semibold text-[1.25rem] lg:text-[1.75rem]">
                        Authentic Materials
                    </div>
                    <div className="mt-2">
                        <li>Comprehensive list of previous SAT & ACT tests</li>
                        <li>Personalized Topics SAT question Generator</li>
                        <li>Dynamic Worksheet Generator</li>
                    </div>
                </div>
                <div
                    onClick={() => popupHandler("popup4")}
                    className={`${popup.popup4 ? "opacity-1 visible" : "opacity-0 invisible"
                        } transition-all fixed left-0 top-0 w-full flex items-center justify-center z-[9999] h-screen`}
                    style={{ background: "rgba(0,0,0,0.3)" }}
                >
                    <img className="max-h-[95%]" src={Image4} alt="" />
                </div>
                {/* Box 4 End  */}
            </div>
            {/* Section 4 End  */}

            {/* Section 5  */}
            <div className="p-5 lg:p-12 bg-[#FBEBD6] flex flex-col items-center text-center mt-[100px] mb-[100px]">
                <div className="text-[1.5rem] lg:text-[2rem]">
                    Wondering How Else We Can Help?
                </div>
                <div className="mt-5 md:text-[1.2rem]">
                    We provide support across the entire application cycle.
                </div>
                <div className="flex flex-col md:flex-row md:space-x-5 lg:space-x-16 mt-6">
                    <div className="p-5 bg-white drop-shadow-lg flex flex-col space-y-5 items-center">
                        <div className="font-semibold text-[1.2rem]">
                            Complete End-To-End Application
                        </div>
                        <div>
                            Support Support every aspect of your application, from
                            school-selection, resume, and personal state
                        </div>
                        <div className="cursor-pointer hover:brightness-110 w-fit px-12 py-3 rounded-full bg-[#325851] text-white font-bold">
                            Learn More
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 p-5 bg-[#325851] drop-shadow-lg flex flex-col space-y-5 items-center">
                        <div className="font-semibold text-white text-[1.2rem]">
                            Complete End-To-End Application
                        </div>
                        <div className="text-white">
                            Support Support every aspect of your application, from
                            school-selection, resume, and personal state
                        </div>
                        <div className="cursor-pointer hover:brightness-110 w-fit px-12 py-3 rounded-full bg-white text-[#325851] font-bold">
                            Learn More
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 5 End  */}

            <Footer />
        </div>
    );
}

export default SatAct;