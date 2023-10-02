// import{ useState } from "react";
// import Modal from "../../components/modals/Modal";
// import { Doctor } from "../../types";

// type DoctorInfoProps = {
//   doctorData: Doctor[];
//   openModal: (doctor: Doctor) => void;
// };

// const DoctorInfo = ({ doctorData, openModal }: DoctorInfoProps) => {
//   const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
//   const [isOpen, setIsOpen] = useState(false);

//   const closeModal = () => {
//     setSelectedDoctor(null);
//     setIsOpen(false);
//   };

//   return (
//     <main>
//       <div>
//         {doctorData.map((doctor) => (
//           <div key={doctor.key}>
//             <img src={doctor.img} alt={doctor.name} />
//             <p>{doctor.name}</p>
//           </div>
//         ))}
//       </div>
//       {isOpen && selectedDoctor && (
//         <Modal closeModal={closeModal}>
//           <div>
//             <div>{selectedDoctor.name}</div>
//             <div>{selectedDoctor.field}</div>
//           </div>
//         </Modal>
//       )}
//     </main>
//   );
// };

// export default DoctorInfo;


import { useState } from "react";
import Modal from "../../components/modals/Modal";
import { doctorData } from "./doctorData";
import { Doctor } from "../../types";

const DoctorInfo = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const openModal = (doctor : Doctor) => {
    setSelectedDoctor(doctor);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
  };

  return (
    <main>
      <div>
        {doctorData.map((doctor) => (
          <div key={doctor.key} onClick={() => openModal(doctor)}>
            <img src={doctor.img} alt={doctor.name} />
            <p>{doctor.name}</p>
          </div>
        ))}
      </div>
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

export default DoctorInfo;
