import { useEffect } from "react";

const QualityAssurance = () => {
  useEffect(() => {
    document.title = "Quality Assurance";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-[1250px] mx-auto mt-24">
      <div className="px-3 md:px-7 ">
        <div>
          <h1 className="text-xl text-center md:text-start md:text-3xl font-bold md:font-semibold text-black/80 my-3">
            QUALITY ASSURANCE
          </h1>{" "}
          <hr
            style={{
              color: "#c7c4c4",
              backgroundColor: "#c7c4c4",
              height: ".5px",
              border: "none",
            }}
          />
        </div>
        <div>
          <p className="my-4 text-gray-600">
            Quality health care delivery is delivering the right care, to the
            right patient, in the right manner, in the right place, at the right
            time, all the time. It is important for organizations like Oriental
            hospital to understand the six dimensions of quality health care,
            which are stated below in order to get it right. The six dimensions
            of quality health care are:-
          </p>
        </div>
        <div className="my-4 mb-6 text-gray-600">
          <ul className=" mx-3" style={{ listStyle: "square" }}>
            <li className="my-2">
              {" "}
              Safety (no needless death): - Are patient safe in the hospital? Is
              death rate high?
            </li>
            <li className="my-2">
              {" "}
              Effectiveness (no needless pain or suffering): - Making sure the
              patient doesn’t go back the same way they came. Ask questions
              like, have we been able to alleviate the pain or suffering of our
              patients?
            </li>
            <li className="my-2">
              Patient Centeredness (no helplessness in those served): - Have we
              been able to render the necessary help required?
            </li>
            <li className="my-2">
              Timeliness (no unnecessary waiting): - Has the hospital been able
              to curb long waiting time?
            </li>
            <li className="my-2">
              Efficiency (no waste): - Doctors should prescribe only the
              necessary drugs. Ask questions like, have we been able to solve
              the issues of poly-pharmacy in the hospital?
            </li>
            <li className="my-2">
              Equity (no one is left out): - To get the quality healthcare
              required, Team spirit must be embraced.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="my-1 text-xl font-bold text-black/80">
            DEPARTMENTAL ACTIVITIES
          </h1>

          <p className="my-4 text-gray-600">
            Our departmental goal is to ensure excellent health care delivery to
            our teeming patients. We are to monitor the processes and procedures
            of activities in different departments and also set up a quality
            improvement plan which includes trainings and workshops.
          </p>

          <p className="my-4 text-gray-600">
            For effectiveness, we put up a quality assurance team (Quality
            Champions) with a representation from various departments in the
            hospital. We put up a roster for monitoring, evaluation and training
            using a carefully designed monitoring and evaluation survey forms
            for assessment. This has been a huge success because we were able to
            identify some gaps responsible for lack of satisfaction in the
            services rendered to our patients. Also, we were able to identify
            the poor attitude of some staff towards the patients.
          </p>
        </div>

        <div className="my-4 mb-6 text-gray-600">
          <h1 className="my-1 text-xl font-bold text-black/80">
            FRAME OF WORK
          </h1>
          <ol className=" mx-3" style={{ listStyle: "number" }}>
            <li className="my-2">
              Analysis and assessment of activities in various departments
            </li>
            <li className="my-2">Strategy formulation</li>
            <li className="my-2">Strategy execution</li>
            <li className="my-2"> Evaluation of the outcome</li>
          </ol>
        </div>

        <div className="my-4 mb-6 text-gray-600">
          <h1 className="my-1 text-xl font-bold text-black/80">
            SCOPE OF WORK
          </h1>
          <p className="text-lg">The scope of work includes:</p>
          <ol className=" mx-3" style={{ listStyle: "number" }}>
            <li className="my-2">
              Carrying out patients Satisfaction Surveys.
            </li>
            <li className="my-2">
              Auditing of activities in various departments.
            </li>
            <li className="my-2">
              Assisting departments in designing their process maps
            </li>
            <li className="my-2">
              Ensuring strict adherence to Clinical Governance Parameters
            </li>
            <li className="my-2">
              Ensuring strict adherence to the use of Standard operating
              procedures for departments
            </li>
            <li className="my-2">
              Getting Feedbacks on Standard Operating procedures 6. Measuring
              staff key performance indices (KPIs)
            </li>
            <li className="my-2"> Laying emphasis on Incidence Reporting</li>
            <li className="my-2">
              Carrying out daily monitoring exercises 10. Making recommendations
              to the Hospital Authority
            </li>
            <li className="my-2">
              Analysis and assessment of activities in various departments
            </li>
            <li className="my-2">Doing food handlers screening </li>
            <li className="my-2">
              Training and re-training of staff on attitudinal change
            </li>
            <li className="my-2">
              Member OF State Quality Improvement Committee
            </li>
            <li className="my-2">
              Attending Training and Workshops to improve our Skill
            </li>
          </ol>
        </div>

        <div className="flex flex-col md:flex-row text-gray-600">
          <div className="md:mr-6 ">
            <img
              src="https://www.lasuth.org.ng/assets/img/team/HOD%20QA.jpg"
              alt="Doctor"
              className="w-full lg:w-60"
            />
          </div>
          <div className="flex-1 mt-4">
            <h1 className="uppercase text-lg md:text-2xl my-1 font-bold">
              Dr. O. T. Adewunmi
            </h1>
            <hr
              style={{
                color: "#c7c4c4",
                backgroundColor: "#c7c4c4",
                height: ".5px",
                border: "none",
                marginBottom: "1rem",
              }}
            />
            <p className="my-2">Designation: Head of Department</p>
            <p className="my-2">Years of Experience: 25 years</p>
            <p className="my-2">
              Email Address: adewunmiopeyemi54@oriental-hospital.org.ng
            </p>
            <p className="my-2">Telephone: +234-818-479-7690</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default QualityAssurance;
