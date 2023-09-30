import {useEffect} from 'react'

const Dentistry = () => {
    useEffect(() => {
      document.title = "Dentist Department";
      window.scrollTo(0, 0);
    }, []);

  return (
    <main className="max-w-[1250px] mx-auto mt-24">
      <div className="px-3 md:px-7 text-gray-500">
        <div>
          <h1 className="uppercase text-xl text-center md:text-start md:text-3xl font-bold md:font-semibold text-black/80 my-3">
            Hospital dental services
          </h1>
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
          <p className="my-4">
            The Department have different cadres of staff; Consultant Family
            Dentists, Dental Officers, Dental Therapists, Dental Technologists
            and Dental echnicians.
          </p>

          <p className="my-4">
            The hospital clinic has 4 dental chairs and a mobile x-ray machine.
            Procedures are carried out daily
          </p>

          <p className="my-4">
            The hospital clinic runs from 8:00am to 4:00pm Monday to Friday.
          </p>

          <p className="my-4">
            Emergencies are attended to from 4pm every day and throughout the
            weekend.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row md:text-lg text-gray-600">
          <div className="md:mr-6 ">
            <img
              src="https://tribuneonlineng.com/wp-content/uploads/2022/01/Dr-Favour.jpg"
              alt="Doctor"
              className="w-full lg:w-60"
            />
          </div>
          <div className="flex-1 mt-4">
            <h1 className="uppercase text-xl md:text-2xl my-1 font-bold">
              Dr. Favour Ikhile
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
            <p className="my-2">Years of Experience: 13 years</p>
            <p className="my-2">
              Email Address: ikhileFav232@oriental-hospital.org.ng
            </p>
            <p className="my-2">Telephone: +234-800-934-7354</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dentistry
