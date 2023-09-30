import {useEffect} from 'react'

const Radiology = () => {
 useEffect(() => {
   document.title = "Radiology";
   window.scrollTo(0, 0);
 }, []);

  return (
    <main className="max-w-[1250px] mx-auto mt-24">
      <div className="px-3 md:px-7 ">
        <div>
          <h1 className="text-xl text-center md:text-start md:text-3xl font-bold md:font-semibold text-black/80 my-3">
            RADIOLOGY DEPARTMENT
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

        <div className="max-w-[1250px] mx-auto mt-5 flex ">
          <img
            src="https://www.lasuth.org.ng/assets/img/gallery/radiologypg1.jpg"
            alt="MRI-machine"
            className="w-full mr-2"
          />
          <img
            src="https://www.lasuth.org.ng/assets/img/gallery/radiologypg2.jpg"
            alt="radiology-equipment"
            className="w-full hidden lg:flex"
          />
        </div>

        <div className="text-gray-500">
          <p className="my-5 mt-7">
            Radiology Department is configured to provide excellent services in
            Diagnostics and Intervention Imaging; Oncology health services to
            Lagos State Residents, whilst also training resident doctors to meet
            the health needs of all Nigerians.
          </p>

          <p className="my-5 mt-7">
            Our core processes include conducting various services with the use
            of high end on Imaging equipment which include 3D ultrasound,
            conventional X-ray machine, Fluoroscopy machine, Mammography
            machine, Computed Tomography Scanners and Magnetic Resonance
            scanner.
          </p>

          <p className="my-5 mt-7">
            The Department has a public private partnership with Phillips
            Project Centre (PPC), a wholly owned Nigerian company Departmental
            meetings, Weekly seminars, Managerial and Technical support to PPC
            in Lagos State.
          </p>
        </div>

        <div className="my-4 mb-6 text-gray-600">
          <p>The department activities includes:</p>
          <ul className=" mx-3" style={{ listStyle: "circle" }}>
            <li className="my-1">
              - Diagnostic & Interventional Ultrasound Services
            </li>
            <li className="my-1">
              - Mammography sessions (Screening, Diagnostic & Interventional)
            </li>
            <li className="my-1">
              - Fluoroscopy for special investigations like
              Hysterosalpingography, Barium Studies
            </li>
            <li className="my-1">- CT sessions</li>
            <li className="my-1">- MRI services</li>
            <li className="my-1">- Oncology services</li>
          </ul>
        </div>

        <div className="my-4 mb-6 text-gray-600">
          <p>
            Our staff strength comprise (12) Consultants-9 Radiologists &
            3Radiotherapists, Nineteen (19) Resident Doctors, and Five (3)
            Administrative Officers. Our Weekly activities:
          </p>
          <ul className=" mx-3" style={{ listStyle: "square" }}>
            <li className="my-2">
              - Diagnostic & Interventional Ultrasound Service (MON - FRI)
            </li>
            <li className="my-2">
              - Chest (Tuberculosis Clinic): Monday - Friday
            </li>
            <li className="my-2">
              - Consultant Clinic Days: Monday and Thursday
            </li>
            <li className="my-2">
              - Conventional or Plain X-ray services (MON - FRI)
            </li>
            <li className="my-2">
              - Mammography sessions (Screening, Diagnostic & Interventional)
              (MON - FRI)
            </li>
            <li className="my-2">
              - Fluoroscopy for special investigations like
              Hysterosalpingography, Barium Studies (MON - FRI)
            </li>
            <li>- CT sessions (MON - FRI)</li>
            <li>- MRI services (MON - FRI)</li>
            <li>- Oncology services (MON - FRI)</li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row md:text-lg text-gray-600">
          <div className="md:mr-6 ">
            <img
              src="https://www.lasuth.org.ng/assets/img/team/HOD%20Radiology.jpg"
              alt="Doctor"
              className="w-full lg:w-60"
            />
          </div>
          <div className="flex-1 mt-4">
            <h1 className="uppercase text-xl md:text-2xl my-1 font-bold">
              DR. A. O. AKANJI
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
            <p className="my-2">Area of Speciality: Radiography</p>
            <p className="my-2">Years of Experience: 24 years</p>
            <p className="my-2">
              Email Address: aakanji@oriental-hospital.org.ng
            </p>
            <p className="my-2">
              Telephone: +234-909-900-0992 , +234-806-983-7827
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Radiology
