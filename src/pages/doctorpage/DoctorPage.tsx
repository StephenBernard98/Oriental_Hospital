import { useState, useEffect } from "react";
import { doctorData } from "./doctorData";
import "../doctorpage/doctorPage.css";
import { Doctor } from "../../types";
import Modal from "../../components/modals/Modal";
import { RiCloseCircleLine } from "react-icons/ri";

const DoctorPage = () => {
  const [doctor, setDoctor] = useState(doctorData);
  const [selectedDoctor, setSelectedDoctor] = useState<null | Doctor>(null);

  useEffect(() => {
    document.title = "Doctor's Page";
    window.scrollTo(0, 0);
  }, []);

  const openModal = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
  };

  return (
    <main className="mt-[4.5rem] md:mt-20">
      <div className="relative">
        <div className="absolute z-10 top-[40%] left-3 lg:left-10 text-xl md:text-4xl font-mooli text-white font-extrabold">
          <h1 className="px-2 md:px-6">Oriental Hospital</h1>
          <h1 className="px-10 md:px-20 py-1 md:py-2">Doctors</h1>
        </div>
        <div className="element flex justify-end">
          <img
            src="https://www.evercare.ng/wp-content/uploads/2021/02/doctor-banner.jpg"
            alt="doctors-group"
            className="banner__img lg:h-96 relative"
          />
        </div>
      </div>
      <section className="max-w-[1250px]  mx-auto mt-7">
        <div>
          <h1 className="font-bold text-2xl text-center text-gray-500 mb-3 md:mb-5">Click Image for Info</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-5">
            {doctor.map((doctors) => (
              <div
                key={doctors.key}
                className="flex justify-center items-center"
              >
                <div className="text-green-800 p-3">
                  <img
                    src={doctors.img}
                    alt="doctors"
                    onClick={() => openModal(doctors)}
                    className="cursor-pointer"
                  />
                  <p className="mt-2 font-semibold">{doctors.name}</p>
                  <p className="text-gray-500">{doctors.field}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedDoctor && (
        <Modal>
          <div className="relative">
            <RiCloseCircleLine
              onClick={closeModal}
              className="cursor-pointer absolute text-3xl md:text-5xl lg:text-3xl top-2 right-0 stroke-1 lg:stroke-none text-gray-900 lg:text-gray-500"
            />
            <div className="flex flex-col lg:flex-row text-gray-600">
              <div className="md:mr-6 ">
                <img src={selectedDoctor.img} alt="Doctor" className="w-full" />
              </div>
              <div className="flex-1 mt-4">
                <h1 className="uppercase text-xl md:text-2xl my-1 font-bold text-primary">
                  {selectedDoctor.name}
                </h1>{" "}
                <p className="my-2 text-base">{selectedDoctor.field}</p>
                <hr
                  style={{
                    color: "#c7c4c4",
                    backgroundColor: "#c7c4c4",
                    height: ".5px",
                    border: "none",
                    marginBottom: "1rem",
                  }}
                />
                {selectedDoctor.about.split("\n").map((paragraph, index) => (
                  <div key={index}>
                    <p>{paragraph}</p>
                    {index < selectedDoctor.about.split("\n").length - 1 && (
                      <br />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default DoctorPage;
