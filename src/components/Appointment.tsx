import { useState, useEffect, FormEvent } from "react";
import { doctorData } from "../pages/doctorpage/doctorData";
import { Doctor } from "../types";
import Modal from "../components/modals/Modal";
import { RiCloseCircleLine } from "react-icons/ri";
import { useAuth } from "../context/Context";
import Protect from "../protected-routes/Protect";

const Appointment = () => {
  const [bookDoctor, setBookDoctor] = useState<null | Doctor>(null);
  const [confirmBooking, setConfirmBooking] = useState<null | Doctor>(null);
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [errMsg, setErrMsg] = useState(false);

  const auth = useAuth();

  useEffect(() => {
    document.title = "Appointment";
    window.scrollTo(0, 0);
  }, []);

  const openModal = (doc: Doctor) => {
    setBookDoctor(doc);
  };

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    if (email === "" || date === "") {
      setErrMsg(true);
    } else if (bookDoctor) {
      setConfirmBooking(bookDoctor);
       setEmail("");
       setDate("");
    }
    setBookDoctor(null);
  };

  return (
    <section className="max-w-[1250px] mx-auto mt-[4.5rem] md:mt-20 text-gray-600">
      <div>
        <div className="md:mt-24">
          <h1 className="font-bold text-xl md:text-2xl md:my-6 text-center text-gray-700">
            Book an Appointment with any of our Doctors
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {doctorData.map((doctor) => (
              <div key={doctor.key} className="m-5">
                <div className="flex items-center">
                  <img
                    src={doctor.img}
                    alt="doctor"
                    className="w-28 rounded mr-3"
                  />
                  <div className="p-1">
                    <p>{doctor.name}</p>
                    <p className="text-sm py-1">{doctor.field}</p>
                    <Protect>
                      <button
                        onClick={() => openModal(doctor)}
                        className="bg-primary text-base font-semibold px-4 py-1 my-1 text-white rounded"
                      >
                        Book Now
                      </button>
                    </Protect>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {bookDoctor && (
            <div>
              <Modal>
                <div className="text-gray-500">
                  <div>
                    <h1 className="text-gray-600 m-4 text-center text-xl font-bold">
                      {" "}
                      You are about to book <br />
                      name:
                      <span className="text-primary font-mooli uppercase ml-2 leading-9">
                        {bookDoctor.name}. <br />
                      </span>{" "}
                      field:
                      <span className="text-primary font-mooli ml-2">
                        {bookDoctor.field}
                      </span>
                    </h1>
                    <div className="flex items-center justify-center">
                      <img src={bookDoctor.img} alt="doctor" className="w-32" />
                    </div>
                  </div>
                  <h1 className="m-2 md:m-5 mt-6 font-semibold font-nunito text-center text-2xl text-primary ">
                    Please Fill the Form
                  </h1>
                  <form onSubmit={handleClick} className="mx-auto md:px-5 ">
                    <div className="flex md:pl-5 items-center mb-4">
                      <label className="text-xl font-bold" htmlFor="hospital">
                        Hospital:
                      </label>
                      <input
                        className="border-2 caret-transparent rounded disabled w-3/4 ml-10 py-2 outline-none px-3 text-extrabold text-xl cursor-not-allowed"
                        type="text"
                        name="hospital"
                        id="hospital"
                        value="Oriental Hospital"
                        autoComplete="off"
                      />
                    </div>
                    <div className="flex md:pl-5 items-center">
                      <label className="text-xl font-bold " htmlFor="username">
                        Username:
                      </label>
                      <input
                        className="border-2 rounded  w-3/4 ml-[1.55rem] py-2 outline-none px-3 text-extrabold text-xl "
                        type="text"
                        name="name"
                        id="name"
                        value={auth.user ? auth.user.name : ""}
                        autoComplete="off"
                      />
                    </div>
                    <div className="flex md:pl-5 items-center">
                      <label className="text-xl font-bold " htmlFor="username">
                        Email:
                      </label>
                      <input
                        className="border-2  rounded mt-3 w-3/4 ml-[4.3rem] py-2 outline-none px-3 text-extrabold text-xl"
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex md:pl-5 items-center mt-5">
                      <label className="text-xl font-bold " htmlFor="date">
                        Date:
                      </label>
                      <input
                        className="border-2 caret-transparent rounded w-3/4 ml-[4.7rem] py-2 outline-none px-3 text-extrabold text-xl "
                        type="date"
                        name="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="flex md:pl-5 items-center mt-5">
                      <label className="text-xl font-bold mr-3" htmlFor="date">
                        Text the Doc:
                      </label>
                      <textarea
                        placeholder="Anything the doctor should know? (Optional)"
                        name="text"
                        id="text"
                        cols={79}
                        rows={5}
                        className="border-gray-200 border-2 outline-none rounded p-3"
                      ></textarea>
                    </div>
                    <div className="flex justify-end m-4">
                      <button
                        onClick={() => setBookDoctor(null)}
                        className="mr-2 rounded px-8 py-2 text-primary border-[1.5px] border-primary bg-white hover:bg-primary hover:text-white font-semibold duration-500"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleClick}
                        className="rounded px-8 py-2 text-white bg-primary hover:bg-white hover:text-primary hover:border-[1.5px] hover:border-primary font-semibold duration-500 cursor-pointer"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </Modal>
            </div>
          )}
        </div>
        <div>
          {confirmBooking && (
            <div>
              <Modal>
                <div className="mt-8">
                  <div>
                    <h1 className="text--gray-600">
                      You have successfully booked {confirmBooking.name} 
                    </h1>
                    <p className="text--gray-600 mt-1 leading-7">
                      The doctor would respond to this booking via the email you
                      included in the form about payments and any other
                      necessary information
                    </p>
                    <div className="flex justify-end mt-2">
                      <button
                        onClick={() => setConfirmBooking(null)}
                        className="rounded px-8 py-2 text-white bg-primary hover:bg-white hover:text-primary hover:border-[1.5px] hover:border-primary font-semibold duration-500"
                      >
                        Okay
                      </button>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          )}
        </div>
        <div>
          {errMsg && (
            <Modal>
              <div className=" mx-5">
                <div className=" my-10">
                  <h1 className="text-lg text-gray-600">
                    Please fill in the email{" "}
                    <span className="font-extrabold">and</span> date field
                  </h1>
                  <div className="absolute top-9 lg:top-12 right-4 md:right-20 lg:right-64">
                    <RiCloseCircleLine
                      size={40}
                      className="cursor-pointer"
                      onClick={() => setErrMsg(false)}
                    />
                  </div>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </section>
  );
};

export default Appointment;
