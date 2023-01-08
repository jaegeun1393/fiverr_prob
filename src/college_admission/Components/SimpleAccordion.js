import * as React from 'react';

export default function SimpleAccordion() {
  return (
    <>
      <div className="mb-[100px] ml-[4%] mr-[4%]">
        <h4 className="text-[#2A3543] lg:text-[64px] text-8xl text-center font-bold sm:leading-[5rem] leading-[3rem] mt-[250px]">FAQ</h4>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-headingOne">
              <button class="accordion-button relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                aria-expanded="false" aria-controls="flush-collapseOne">
                Q. When is the ideal time I should get started and work on my application?
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show" aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-5">The best and most ideal time for you to start working on your application is as early as possible. Every minute of high school is precious time that could be spent working on your college admissions application and increasing your chances of being accepted into the school of your dreams. We offer our services to students as young as elementary school, but most of our students come to us as a sophomore or junior high school student. Don’t worry if you’re a senior who already started their applications, we’re happy to help regardless of where you are in the process.
              </div>
            </div>
          </div>

          <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-headingTwo">
              <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                aria-expanded="false" aria-controls="flush-collapseTwo">
                Q. Who are my advisors?
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-5">
                MMT’s staff is made up of experts hailing from prestigious colleges across America whose specialties include engineering, pre-medicine, pre-dental, and the arts. In addition, our instructors have a variety of valuable work experiences from places such as the Intel Corporation, Oregon Institute of Technology, and Kaiser Permanente. MMT Prep firmly believes that by having a diverse background of expertise, we can help students find their own, unique pathways to success.</div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
              <h2 class="accordion-header mb-0" id="flush-headingThree">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                  aria-expanded="false" aria-controls="flush-collapseThree">
                  Q. How will I meet my advisors?
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">Our company prides itself on our ability to meet any client’s needs with accessibility. Whether your circumstances require you to meet in person or online via our customized platform, we are confident in our abilities to support you. In addition, regardless of whether you are a student that prefers to come in person or through the wifi, we offer an extensive array of tools that can support your application–such as a resume builder–with around the clock online access.</div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
              <h2 class="accordion-header mb-0" id="flush-headingFour">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                  aria-expanded="false" aria-controls="flush-collapseFour">
                  Q. What are the prices for each option?
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">The cost varies depending on the particular requirements of your student.

                  We are happy to customize a package to suit your unique requirements.

                  Get started today by scheduling a consultation.
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}