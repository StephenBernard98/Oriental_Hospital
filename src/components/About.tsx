import { Link } from "react-router-dom";

const About = () => {
  return (
    <main>
      <div className="max-w-[1300px] m-auto -mt-10 md:-mt-80 lg:mt-8  xl:mt-2">
        <div className="">
          <div>
            <h1 className="text-center py-2 font-bold font-mooli text-4xl  capitalize">
              Our Departments
            </h1>
            <p className="text-center text-xl lg:text-2xl ">
              We offer services from a wide range of medical needs
            </p>

            <div className="md:mx-10 md:px-10 mx-4  h-ma items-center md:grid md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col justify-between mx-4 items-center py-3 px-7 mr-5 mt-10 mb-10  rounded text-center cursor-pointer ">
                <img
                  className="w-32 bg-primary p-5 rounded-2xl my-2"
                  src="https://themewagon.github.io/orthoc/images/s1.png"
                  alt="cardiology"
                />
                <h1 className="my-2 uppercase font-bold font-mooli text-xl">
                  Cardiology
                </h1>
                <p>
                  We expertly deal with the diagnosis and treatment of diseases
                  and abnormalities involving the heart and blood vessels.
                </p>
              </div>

              <div className="flex flex-col justify-between mx-4 md:h-80 lg:h-max lg:mx-0 items-center py-3 px-7 mr-5 mt-10 mb-10 rounded text-center cursor-pointer ">
                <img
                  className="w-32 h-32 bg-primary p-5 rounded-2xl my-2"
                  src="https://themewagon.github.io/orthoc/images/s2.png"
                  alt="Diagnosis"
                />
                <h1 className="my-2 uppercase font-bold font-mooli text-xl">
                  Diagnosis
                </h1>
                <p className=" text-lg">
                  We identify the nature of an illness or other problems by
                  examination of the symptoms.
                </p>
              </div>

              <div className="flex flex-col justify-between mx-4 items-center py-3 px-7 mr-5 mt-10 mb-10 rounded text-center cursor-pointer ">
                <img
                  className="w-32 bg-primary p-5 rounded-2xl my-2"
                  src="https://themewagon.github.io/orthoc/images/s3.png"
                  alt="Surgery"
                />
                <h1 className="my-2 uppercase font-bold font-mooli text-xl">
                  Surgery
                </h1>
                <p>
                  Our expert surgeons handles all kinds of surgery in the
                  medical field and prevent travel expenses for international
                  care
                </p>
              </div>

              <div className="flex flex-col justify-between mx-4 items-center py-3 px-7 mr-5 mt-10 mb-10 rounded text-center cursor-pointer ">
                <img
                  className="w-32 h-28 bg-primary p-5 rounded-2xl my-2"
                  src="https://themewagon.github.io/orthoc/images/s4.png"
                  alt="First Aid"
                />
                <h1 className="my-2 uppercase font-bold font-mooli text-xl">
                  First Aid
                </h1>
                <p>
                  Our highly trained nurses are on standby to administer
                  First-Aid to injured patients all round the clock to improve
                  health rate
                </p>
              </div>
            </div>
          </div>
          <section className="about">
            <div className="flex flex-col lg:flex-row justify-between items-center ml-7 my-4 mx-4 mt-14">
              <img
                src="https://www.anda.net.au/wp-content/uploads/2018/11/Nigerian-Doctors-The-Exodus-Will-Be-Televised-2.jpg"
                alt="Doctor"
                className="object-contain lg:w-1/2 md:h-80 mr-5 rounded-4xl md:rounded-2xl mb-4"
              />
              <div className="">
                <h1 className="md:my-5 text-3xl text-center lg:text-start  uppercase font-mooli font-bold">
                  About Us
                </h1>
                <p className="my-5 text-inherit ">
                  We foster personal and professional growth of our members
                  through continous education​. We seek
                  collaborative research opportunities in the international
                  medical community and contribute to improved health care in
                  Nigeria and the world at large. We help develop good
                  understanding of health matters in the African continent and
                  the world over and we encourage the development of practical
                  solutions to Nigerian health care problems through strategic
                  initiative and field activities in the country.
                </p>
                <div className="text-center md:text-left mb-3">
                  <Link to="/about">
                  <button className="bg-primary text-white py-2 text-lg px-8 font-semibold rounded-lg hover:bg-transparent hover:border hover:border-primary hover:text-primary duration-200 text-center">
                    Read More
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
