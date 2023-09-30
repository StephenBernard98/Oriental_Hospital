import { useEffect } from "react";

const CommunityHealth = () => {
  useEffect(() => {
    document.title = "Community Health";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-[1250px] mx-auto mt-24">
      <div className="px-3 md:px-7 ">
        <div>
          <h1 className="text-xl text-center md:text-start md:text-3xl font-bold md:font-semibold text-black/80 my-3">
            COMMUNITY HEALTH & PRIMARY HEALTH CARE
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
            Community Health & Primary Health Care Department strives to provide
            excellent preventive, promotive, curative and rehabilitative health
            services mostly to people in her immediate environment (Lagos State
            Residents), whilst also training public health specialists to meet
            the health needs of all Nigerians.
          </p>

          <p className="my-4 text-gray-600">
            Our core processes include conducting various clinics which fall
            under the department within and outside the hospital, Training
            resident doctors in Community Health, Community outreaches and
            sensitization of the public on public health issues, Conducting
            research of public health importance, Production of the hospital's
            Epidemiology Bulletin, Departmental meetings, Weekly seminars,
            Managerial and Technical support to Rauf Aregbesola (urban) and
            Agbowa (rural) PHCs in Lagos State.
          </p>

          <div className="my-4 mb-6 text-gray-600">
            <p>The department unit includes:</p>
            <ul className=" mx-3" style={{ listStyle: "disc" }}>
              <li className="my-2">
                - Immunoprophylaxis and Child Welfare Clinic
              </li>
              <li className="my-2">- Chest Clinic (DOTS)</li>
              <li className="my-2">- Staff Clinic</li>
              <li className="my-2">- Epidemiology</li>
              <li className="my-2">
                - Youth Friendly Centre (a.k.a. Hello Lagos).
              </li>
            </ul>
          </div>

          <div className="my-4 mb-6 text-gray-600">
            <p>
              Our staff strength comprises of Five (5) Consultants, Nineteen
              (19) Resident Doctors, Nine (9) Medical Officers and Five (5)
              Administrative Officers. Our Weekly activities:
            </p>
            <ul className=" mx-3" style={{ listStyle: "square" }}>
              <li className="my-2">
                - Immunoprophylaxis and Child Welfare Clinic: Monday - Friday
              </li>
              <li className="my-2">
                - Chest (Tuberculosis Clinic): Monday - Friday
              </li>
              <li className="my-2">
                - Consultant Clinic Days: Monday and Thursday
              </li>
              <li className="my-2">- Staff Clinic: Monday - Friday</li>
              <li className="my-2">- Epidemiology Unit: daily</li>
              <li className="my-2">
                - Youth Friendly Centre: Provides adolescent friendly health
                services.
              </li>
              <li>
                - Managerial support and Medical consultations at Rauf
                Aregbesola and Agbowa PHCs: daily.
              </li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row text-gray-600">
            <div className="md:mr-6 ">
              <img
                src="https://persecondnews.com/wp-content/uploads/2019/04/Dr.-Foye.jpg"
                alt="Doctor"
                className="w-96"
              />
            </div>
            <div className="flex-1 mt-4">
              <h1 className="uppercase text-xl md:text-2xl my-1 font-bold">
                Dr. Foye Ikyaator
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
              <p className="my-2">Years of Experience: 24 years</p>
              <p className="my-2">
                Email Address: ikyaator21@oriental-hospital.org.ng
              </p>
              <p className="my-2">Telephone: +234-800-565-1200</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CommunityHealth;
