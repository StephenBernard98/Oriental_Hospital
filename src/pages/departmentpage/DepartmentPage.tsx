import medLogo from "../../assets/medBg.png";
import { useEffect, useState } from "react";
import "../departmentpage/departmentPage.css";
import { Link } from "react-router-dom";

const DepartmentPage = () => {
  const [logo, setLogo] = useState(true);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    document.title = "Department";
    window.scrollTo(0, 0);
  }, []);
  
  const handleClick = () => {
    setSlideOut(true);
    setTimeout(() => {
      setLogo(false);
    }, 2000);
  };

  return (
    <div className="mt-20">
      {logo && (
        <div className="bg-black/80 h-screen w-screen fixed top-0 left-0 z-20">
          <div className="w-full mx-auto flex justify-center">
            <div>
              <img
                src={medLogo}
                alt="health_department"
                className={`my-2 object-contain logo_slide_in mt-20 lg:mt-3
                 ${slideOut && "logo_slide_out"}`}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className={`bg-green-700 tracking-wider px-20 py-4 mt-7 rounded-lg hover:bg-green-800 text-white font-bold font-roboto duration-150 slide-in-button ${
                slideOut && "slide-out-button"
              } `}
              onClick={handleClick}
            >
              Enter
            </button>
          </div>
        </div>
      )}

      <section className="max-w-[1250px] lg:mx-auto mx-3">
        <div>
          <div className=" mt-24">
            <h1 className="text-2xl md:text-4xl text-center my-4 md:my-8 font-bold tracking-wide font-nunito">
              Clinical Departments
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3 lg:gap-5 ">
            <div className="bg-slate-100 p-5 rounded-lg flex flex-col relative items-center ">
              <img
                src="https://www.wcch.com/Content/Uploads/wcch/images/CHC_Exterior.jpg"
                alt="community-health-department"
                className="w-full cursor-pointer h-60 "
              />
              <h1 className="text-xl my-1 font-mooli mt-3 font-bold">
                Community Health
              </h1>
              <p className="p-1 text-center">
                Community Health & Primary Health Care Department strives to
                provide excellent preventive, promotive.
              </p>
              <Link to="/comm-health">
              <button className="bg-primary text-lg px-8 py-2 mt-1 rounded-xl hover-button">
                Read More
              </button>
              </Link>
            </div>

            <div className="bg-slate-100 p-5 rounded-lg flex flex-col  items-center">
              <img
                src="https://www.lasuth.org.ng/assets/img/service/ortho.jpg"
                alt="orthopaedics-department"
                className="w-full cursor-pointer h-60 "
              />
              <h1 className="text-xl my-1 font-mooli mt-3 font-bold">
                Orthopaedics
              </h1>
              <p className="p-1 text-center">
                The department of orthopaedics was created out of the department
                of surgery in 2016.
              </p>
              <button className="bg-primary text-lg px-8 py-2 mt-1 rounded-xl hover-button">
                Read More
              </button>
            </div>

            <div className="bg-slate-100 p-5 rounded-lg flex flex-col  items-center">
              <img
                src="https://www.lasuth.org.ng/assets/img/service/radiology.jpg"
                alt="radiology-department"
                className="w-full cursor-pointer h-60 "
              />
              <h1 className="text-xl my-1 font-mooli mt-3 font-bold">
                Radiology
              </h1>
              <p className="p-1 text-center">
                We provides comprehensive diagnostic imaging and interventional
                services, trains the next generation.
              </p>
              <button className="bg-primary text-lg px-8 py-2 mt-1 rounded-xl hover-button">
                Read More
              </button>
            </div>

            <div className="bg-slate-100 p-5 rounded-lg flex flex-col  items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9F2_C5EYKMyhSCMYSNA5zuUBq3pKm3YfqmORiZ8NHkI128yxR8lobR67IR19FqERbP8&usqp=CAU"
                alt="quality-assurance-department"
                className="w-full cursor-pointer h-60 "
              />
              <h1 className="text-xl my-1 font-mooli mt-3 font-bold">
                Quality Assurance
              </h1>
              <p className="p-1 text-center">
                Quality health care delivery is delivering the right care, to
                the right patient, in the right manner, in the right place
              </p>
              <button className="bg-primary text-lg px-8 py-2 mt-1 rounded-xl hover-button">
                Read More
              </button>
            </div>

            <div className="bg-slate-100 p-5 rounded-lg flex flex-col  items-center">
              <img
                src="https://www.lasuth.org.ng/assets/img/service/icu.jpg"
                alt="intensive-care-unit"
                className="w-full cursor-pointer h-60 "
              />
              <h1 className="text-xl my-1 font-mooli mt-3 font-bold">
                Intensive Care Unit
              </h1>
              <p className="p-1 text-center">
                Community Health & Primary Health Care Department strives to
                provide excellent preventive, promotive.
              </p>
              <button className="bg-primary text-lg px-8 py-2 mt-1 rounded-xl hover-button">
                Read More
              </button>
            </div>

            <div className="bg-slate-100 p-5 rounded-lg flex flex-col  items-center">
              <img
                src="https://www.lasuth.org.ng/assets/img/service/dental.jpg"
                alt="dentistry-department"
                className="w-full cursor-pointer h-60 "
              />
              <h1 className="text-xl my-1 font-mooli mt-3 font-bold">
                Dentistry
              </h1>
              <p className="p-1 text-center">
                Community Health & Primary Health Care Department strives to
                provide excellent preventive, promotive.
              </p>
              <button className="bg-primary text-lg px-8 py-2 mt-1 rounded-xl hover-button">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepartmentPage;
