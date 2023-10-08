import { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const Contact = () => {
  const [video, setVideo] = useState(false);
  useEffect(() => {
    const min = 0.15;
    const secs = min * 60 * 1000;
    setTimeout(() => {
      setVideo(true);
    }, secs);
  }, []);

  return (
    <section>
      <div className=" max-w-[1250px] mx-auto m-16">
        <div className=" lg:flex lg:justify-around lg:items-start">
          <div className="flex flex-col justify-between px-8">
            <div>
              <h1 className="font-mooli text-4xl my-2 py-2 ">Contact Us</h1>
            </div>
            <form className="">
              <div className="md:flex md:justify-around md:items-center ">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="bg-gray-300 p-3 mr-3 text-black placeholder:text-black outline-none w-full mb-4 md:mb-0"
                />
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Your Number"
                  className="bg-gray-300 p-3 text-black placeholder:text-black outline-none w-full"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="bg-gray-300 w-full mt-5 p-3 text-black placeholder:text-black outline-none"
                  autoComplete="false"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="w-full mt-3 p-3 bg-gray-300 text-black placeholder:text-black outline-none"
                name="text"
                id="text_area"
                cols={30}
                rows={10}
              ></textarea>
              <button className="bg-primary text-white p-3 mt-3 lg:mt-1 rounded-md text-center w-full hover:bg-green-700  transition-all duration-300">
                SEND
              </button>
            </form>
          </div>
          <img
            src="https://avocure-uploads.s3.amazonaws.com/uploads/clinic/cover_pic_url/89/vi1.jpg"
            alt="hospital"
            className="w-[82%] md:w-[92%] lg:w-[45%] mx-8 mt-5"
          />
        </div>
      </div>

      {video && (
        <div className="relative">
          <div
            className={`fixed bottom-5 right-2 animate-slideLeftSlow ${
              !video && "hidden"
            }`}
          >
            <iframe
              width="400"
              height="200"
              src="https://www.youtube.com/embed/wybhg8PQs4Y?si=rLZbmctFlsWpUmH7&autoplay=1&mute=1"
              title="Dental Health"
              allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <RiCloseCircleLine
              onClick={() => setVideo(false)}
              size={30}
              className="absolute top-1 right-0 cursor-pointer text-white stroke-[0.4] md:stroke-[0.6] lg:stroke-[0.4]"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
