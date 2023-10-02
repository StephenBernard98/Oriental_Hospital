import { useState, useEffect } from "react";
import { doctorData } from "./doctorData";
import "../doctorpage/doctorPage.css";
import { Doctor } from "../../types";
import Modal from "../../components/modals/Modal"; 


const DoctorPage = () => {
  const [doctor, setDoctor] = useState(doctorData);
  const [selectedDoctor, setSelectedDoctor] = useState<null | Doctor>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Doctor's Page";
    window.scrollTo(0, 0);
  }, []);

   const openModal = (doctor : Doctor) => {
     setSelectedDoctor(doctor);
  };
  
   const closeModal = () => {
     setSelectedDoctor(null);
     setIsModalOpen(false);
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
                  />
                  <p className="mt-2">{doctors.name}</p>
                  <p className="text-gray-500">{doctors.field}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     {selectedDoctor && (
        <Modal closeModal={closeModal}>
          <div>
            <div>{selectedDoctor.name}</div>
            <div>{selectedDoctor.field}</div>
            {/* Add other doctor information here */}
          </div>
        </Modal>
        
      )}
    </main>
  );
};

export default DoctorPage;
