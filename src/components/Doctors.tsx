const Doctors = () => {
  return (
    <section>
      <div className=" mt-14 md:mt-16 lg:mt-20 bg-primary">
        <div className=" mx-auto lg:max-w-[1000px] md:max-w-[850px]">
          <div>
            <h1 className="text-3xl md:text-4xl tracking-wide font-mooli py-6 text-center uppercase text-white font-extrabold">
              Our Medical Team
            </h1>
            <p className="text-center text-white p-2 ">
              Our medical team is carefully chosen from worldwide experts in the medical industry. From dentist to optician, from gynacologist to peadiatrician. Every single field is covered. Neurosurgeons, optomologist and radiologist. We got you covered.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-9">
            <div className="text-center bg-white/90 my-5 mx-5 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl cursor-pointer hover:scale-110 duration-500">
              <img
                src="https://i0.wp.com/africans-in-america.com/wp-content/uploads/2022/02/61038969.295.jpg?resize=300%2C200&ssl=1"
                alt="doctor-one"
                className="w-96 md:w-80 rounded-tl-xl rounded-tr-xl"
              />
              <p className="px-4 pt-3 font-mooli text-lg">Ernest Chukwu</p>
              <p className="p-1 pb-3 text-lg ">Doctor</p>
            </div>
            <div className="text-center bg-white/90 my-5 mx-5 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl cursor-pointer hover:scale-110 duration-500">
              <img
                src="https://www.ahu.edu/sites/default/files/styles/fc_800x533/public/media/rn-vs-bsn.jpg?h=9e499333&itok=Cs5LQe4i"
                alt="doctor-one"
                className="md:w-80 rounded-tl-xl rounded-tr-xl"
              />
              <p className="px-4 pt-3 font-mooli text-lg"> Nkechi Alex</p>
              <p className="p-1 pb-3 text-lg ">Nurse</p>
            </div>

            <div className="text-center bg-white/90 my-5 mx-5 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl cursor-pointer hover:scale-110 duration-500">
              <img
                src="https://persecondnews.com/wp-content/uploads/2019/04/Dr.-Foye.jpg"
                alt="doctor-one"
                className="md:w-80 rounded-tl-xl rounded-tr-xl"
              />
              <p className="px-4 pt-3 font-mooli text-lg">Foye Ikyaator</p>
              <p className="p-1 pb-3 text-lg ">Doctor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
