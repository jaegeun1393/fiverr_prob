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
                Q. What is the ideal time to start and work on my BS/MD application?
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show" aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-5">Creating applications to get accepted into BS/MD programs is no easy task. There are many different key elements–resumes, essays, personal statements, short prompt essays, recommendation letters–that will need to be constructed and polished to these top school’s standards. Perfection can’t be rushed and so an immense amount of time and effort will be demanded of you.

                Every application is different when considering when you should start in order to finish when desired, as it depends on what schools you are applying to, how developed your professional skills are already, and how much time you can set aside from your personal life.

                We have worked with a diverse range of candidates who completed their applications in many different time frames; anywhere from a few months to a few years. However, in our experience, it’s best that applicants give themselves at least three to four months before the submission deadline.

                We are willing to work with applicant candidates as early as a few years prior in order to give them as much support as they need.
              </div>
            </div>
          </div>

          <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-headingTwo">
              <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                aria-expanded="false" aria-controls="flush-collapseTwo">
                Q. Are any applicant scholarships or discounts offered?
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-5">
                At MMT Prep, our main focus revolves around guiding students to their dream BS/MD programs and the last thing we want is to have financial circumstances be the reason why our candidates don’t succeed.

                To prevent this from happening, we offer a small number of candidates partial or full scholarships or financial aid help. These opportunities are only offered after you begin services with us and are dependent on your potential and need as a candidate. For more information, consult your advisor once you have begun working with them.</div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
              <h2 class="accordion-header mb-0" id="flush-headingThree">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                  aria-expanded="false" aria-controls="flush-collapseThree">
                  Q. How is application support given and conducted?
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">At MMT Prep, you’ll receive support from staff members from various specialties such as writing, admissions, interview guidance, and a main advisor tasked with overseeing your whole process. Your advisor is a mentor who has loads of experience with the BS/MD admissions application process and is passionate about guiding candidates to the program that best suits them. Their job is to keep you on track with the quality of your work, reviewing drafts, and deadlines.</div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
              <h2 class="accordion-header mb-0" id="flush-headingFour">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                  aria-expanded="false" aria-controls="flush-collapseFour">
                  Q. How does using your service maximize my chances of admission?
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">MMT Prep’s instructors have the experience and the expertise needed to help every applicant perfect their applications. In addition, we conduct extensive, up to date research on America’s prestigious BS/MD programs in order to keep every client aware of any changing circumstances, and the standards that each institution expects from an application. This maximizes the chances of acceptance as we tailor each application according to these expectations.
                </div>
              </div>
            </div>
          </div>

          <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-headingFive">
              <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                aria-expanded="false" aria-controls="flush-collapseFive">
                Q. How does MMT Prep select its staff?
              </button>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-5">MMT Prep has a highly selective, extensive, screening process for our BS/MD advisor candidates. Very few pass our standard in order to ensure that our students get the best quality support possible. The process includes required, high amounts of experiences, mock consultations that are assessed closely, and excellent communication skills. In addition, every member of our staff is continuously monitored and given feedback in order to keep quality at its best.
              </div>
            </div>
          </div>

          <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-heading6">
              <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6"
                aria-expanded="false" aria-controls="flush-collapse6">
                Q. How many applicants do advisors work with?
              </button>
            </h2>
            <div id="flush-collapse6" class="accordion-collapse collapse" aria-labelledby="flush-heading6"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-5">Creating and perfecting an application demands copious amounts of time and effort, which makes it vital to have an advisor that is able to commit to those requirements. However, how many candidates an advisor takes on is dependent on factors such as their position and other obligations they may have at our facility. For example, one advisor may be tasked with staying on top of research on institutions–as they have ever changing statistics and policies–and another may be given the job of creating templates, guides, and other resources that would aid students in the process. Thus, depending on their workloads and expertise, some may take on more students than others. Or perhaps take on students according to how big of a workload each student needs support for. Regardless of the circumstances of each advisor, MMT’s focus is as always, providing the best quality support possible for each of our applicants.
              </div>
            </div>
          </div>

          <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-heading7">
              <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base sm:text-2xl text-xl bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7"
                aria-expanded="false" aria-controls="flush-collapse7">
                Q. Are parents able to involve themselves in the application process?
              </button>
            </h2>
            <div id="flush-collapse7" class="accordion-collapse collapse" aria-labelledby="flush-heading7"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-5">Yes, parents are free to involve themselves.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}