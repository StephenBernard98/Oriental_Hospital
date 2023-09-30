import { useEffect } from "react";

const IntensiveCare = () => {
  useEffect(() => {
    document.title = "Intensive Care";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="mt-20 px-3 md:px-5 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className=" lg:w-1/2 animate-slideLeftSlow text-gray-500 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl p-3 md:p-5 lg:p-6 text-center font-bold font-nunito text-black/70 tracking-wide">
            Intensive Care
          </h1>
          <p className="p-1 md:p-5 lg:py-3 lg:px-6 leading-7">
            Also known as Critical Care Unit (CCU), our ICU provides intensive
            care treatment to patients with severe and life-threatening illness
            and injuries that require close monitoring and support. Our team
            consisting of perioperative and anaesthetic nurses as well as our
            intensivists are in charge of the specialized care required for
            patients in the ICU. Our ICU has a higher staff-to-patient ratio and
            access to advanced medical resources, which results in good patient
            outcome.
          </p>
        </div>

        <div className=" flex lg:justify-end animate-slideSlow">
          <img
            src="https://i0.wp.com/thelecc.com/wp-content/uploads/2019/08/36563781_2105536276396178_3157816121030082560_n.jpg?w=940&ssl=1"
            alt="intensive-care"
            className="lg:w-[80%]  lg:rounded-bl-full lg:border-[40px] border-l-8 lg:border-t-0 lg:border-b-0 lg:border-r-0 border-primary mt-5 lg:mt-0"
          />
        </div>
      </div>

      <div className="p-1 md:p-5 lg:px-8 lg:py-5 leading-7 flex flex-col lg:flex-row justify-between ">
        <div className="text-gray-500 w-full mr-9 lg:mt-4 animate-slideLeftSlow">
          <p>
            Oriental ICU has a higher staff-to-patient ratio and access to
            advanced medical resources, which results in good patient outcome.
          </p>

          <p>
            The most seriously ill or injured patients are cared for by the
            critical care intensivists. These experts provide specialised care
            for patients who have experienced major surgery or trauma, as well
            as those with other critical medical needs Also known as Critical
            Care Unit (CCU), our ICU provides intensive care treatment to
            patients with severe and life-threatening illness and injuries that
            require close monitoring and support. Our team consisting of
            perioperative and anaesthetic nurses as well as our intensivists are
            in charge of the specialized care required for patients in the ICU.
          </p>

          <p>
            Oriental ICU has a higher staff-to-patient ratio and access to
            advanced medical resources, which results in good patient outcome.
            The most seriously ill or injured patients are cared for by the
            critical care intensivists. These experts provide specialised care
            for patients who have experienced major surgery or trauma, as well
            as those with other critical medical needs
          </p>
        </div>
        <div className="my-4 mb-6 text-gray-600 animate-slideSlow">
          <p>
            Led by Dr. Lanre Akanmu, our Department of Critical Care Medicine at
            Oriental is committed to outstanding patient care in neonatal,
            paediatric and adult ICU.
          </p>

          <p>
            We are leaders in critical care medicine delivery for successful
            outcomes. Our primary clinical priority is to deliver state of the
            art around-the-clock, multidisciplinary, compassionate, tertiary
            care to critically ill patients in our ICUs.
          </p>

          <div className="my-4 mb-6 text-gray-600">
            <p>
              We treat a wide range of sleep issues and disorders including:
            </p>
            <ul className=" mx-3" style={{ listStyle: "disc" }}>
              <li className="my-2">Obstructive Sleep Apnoea</li>
              <li className="my-2">Narcolepsy</li>
              <li className="my-2">Cardiac related sleep problems</li>
              <li className="my-2">Circadian Rhythm Sleep Disorders</li>
              <li className="my-2">Drowsy driving</li>
              <li className="my-2">Excessive sleepiness</li>
              <li className="my-2">Insomnia</li>
              <li className="my-2">Sleep apnea</li>
              <li className="my-2">
                Parasomnias: abnormal behaviours that occur during sleep, such
                as sleepwalking and sleep-related eating
              </li>
              <li className="my-2">Pediatric sleep problems</li>
              <li className="my-2">
                Restless leg syndrome and other sleep-related movement disorders
              </li>
              <li className="my-2">Snoring</li>
              <li className="my-2">Obsessive Compulsive Disorder</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IntensiveCare;
