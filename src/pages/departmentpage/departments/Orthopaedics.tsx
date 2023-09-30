import {useEffect} from "react";

const Orthopaedics = () => {
 useEffect(() => {
   document.title = "Orthopaedics";
   window.scrollTo(0, 0);
 }, []);

  return (
    <main className="max-w-[1250px] mx-auto mt-24">
      <div className="px-3 md:px-7 ">
        <div>
          <h1 className="text-xl text-center md:text-start md:text-3xl font-bold md:font-semibold text-black/80 my-3">
            DEPARTMENT OF ORTHOPAEDICS
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
          <div className="max-w-[1000px] mx-auto mt-5 flex">
            <img
              src="https://www.lasuth.org.ng/assets/img/gallery/ortho3.jpg"
              alt="Orthopaedics-img"
              className="w-full mr-2 hidden lg:flex"
            />
            <img
              src="https://www.lasuth.org.ng/assets/img/gallery/ortho1.jpg"
              alt="orthopaedics-img"
              className="w-full "
            />
          </div>

          <div className="text-gray-500">
            <p className="my-5 mt-7">
              The department of orthopaedics was created out of the department
              of surgery in 2016. The Lagos State University Teaching Hospital
              evolved from that of the old General Hospital, Ikeja in 2003 when
              the latter transformed to the teaching hospital of the recently
              established College of Medicine of Lagos State University.
            </p>

            <div className="my-5">
              <h1 className="my-1 text-xl font-bold">VISION</h1>
              <p>
                To be a leading department of orthopaedics amongst its peers in
                Nigeria in teaching, research and community orthopaedic
                services.
              </p>
            </div>

            <div className="my-7 ">
              <h1 className="my-1 text-xl font-bold">MISSION</h1>
              <ul className="mx-3" style={{ listStyle: "circle" }}>
                <li className="my-1">
                  To make orthopaedics attractive to medical students
                </li>
                <li className="my-1">
                  To train orthopaedic residents to be leaders and respected
                  orthopaedic surgeons well versed in teaching, research and
                  clinical surgery
                </li>
                <li className="my-1">
                  To treat patients with skilled hands and compassion while
                  ensuring orthopaedic services are rendered in an atmosphere of
                  mutual respect and team-work spirit with other health care
                  workers and administrative staff.
                </li>
                <li className="my-1">
                  To provide a thorough curriculum which ensures holistic
                  orthopaedic surgical training while putting into consideration
                  the surgeon's welfare and, by extension, their families.
                </li>
              </ul>
            </div>

            <div className="my-4 mb-10 text-gray-600">
              <p className="text-xl font-bold my-3">
                Orthopaedic Subspecialties
              </p>
              <ul className="mx-3" style={{ listStyle: "disc" }}>
                <li className="my-1">- General Orthopaedics</li>
                <li className="my-1">- Trauma</li>
                <li className="my-1">- Paediatric Orthopaedics</li>
                <li className="my-1">
                  - Arthroplasty and Orthopaedic Oncology
                </li>
                <li className="my-1">- Arthroscopy and Sport Medicine</li>
                <li className="my-1">- Spine Surgery</li>
                <li className="my-1"> Limb Reconstruction</li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row text-gray-600">
              <div className="md:mr-6 ">
                <img
                  src="https://www.lasuth.org.ng/assets/img/team/HOD%20Ortho.jpg"
                  alt="Doctor"
                  className="w-full lg:w-60"
                />
              </div>
              <div className="flex-1 mt-4">
                <h1 className="uppercase text-lg md:text-2xl my-1 font-bold">
                  Prof. O. A. Adewole MBChB, FWACS{" "}
                </h1>{" "}
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
                <p className="my-2">Years of Experience: 35 years</p>
                <p className="my-2">
                  Email Address: adewale.o@oriental-hospital.org.ng
                </p>
                <p className="my-2">Telephone: +234-800-000-0000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Orthopaedics;
