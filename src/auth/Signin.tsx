import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../context/Context";
import { useLocation, useNavigate } from "react-router-dom";
import { PiEyeClosedLight } from "react-icons/pi";
import { BiSolidUser } from "react-icons/bi";

const Signin = () => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    auth.login({ name: user });
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", JSON.stringify(user));

    const destination = localStorage.getItem("destination");
    if (destination) {
      navigate(destination, { replace: true }); 
      localStorage.removeItem("destination");
    } else {
      window.history.back();
    }
  };

  return (
    <div>
      <div className="w-full z-10 mt-20">
        <div className="sm:max-w-[650px] max-w-[370px] mx-auto font-roboto bg-slate-300 mt-[4.5rem] md:mt-24 px-4 py-7 rounded-lg">
          <h1 className="font-extrabold  text-xl sm:text-2xl  md:text-3xl md:px-6 pt-4 text-primary text-center font-blackOps">
            Please Login to access your account
          </h1>
          <form
            onSubmit={handleSubmit}
            className=" sm:max-w-[450px] m-auto mt-3 md:mt-10 py-4 px-2 sm:px-4 md:px-6 lg:px-8 bg-transparent text-white"
          >
            <label
              htmlFor="user"
              className="font-bold inline-block pb-2 text-2xl text-primary"
            >
              Name:
            </label>
            <br />
            <div className="flex">
              <span className="bg-[#f7e9e9] flex items-center justify-center mb-2 rounded-bl rounded-tl">
                <BiSolidUser size={30} className="text-gray-500 ml-1" />
              </span>
              <input
                type="text"
                name="user"
                id="user"
                value={user}
                placeholder="input username"
                required
                onChange={(e) => setUser(e.target.value)}
                className="w-full rounded-tl-none outline-none font-normal rounded placeholder-gray-700 text-black  text-lg p-2 bg-[#f7e9e9] mb-2"
              />{" "}
            </div>
            <br />
            <label
              htmlFor="password"
              className="font-bold inline-block pb-2 text-2xl text-primary"
            >
              Password:
            </label>{" "}
            <br />
            <div className="flex ">
              <span className="bg-[#f7e9e9] flex items-center justify-center rounded-bl rounded-tl">
                <PiEyeClosedLight size={30} className="text-gray-500 ml-1" />
              </span>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder=" input password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-tl-none outline-none rounded placeholder-gray-700 text-black text-lg p-2 bg-[#f7e9e9] "
              />
            </div>
            <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col h-full mt-5">
              <div className=" flex lg:items-center lg:justify-between ">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="outline-none rounded-2xl"
                />{" "}
                <span className=" ml-0.5 text-primary text-sm mr-1 ">
                  Forgot password?
                </span>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-primary hover:bg-green-700 cursor-pointer rounded w-full mt-4 font-bold text-lg p-2 duration-300"
              disabled={!user || !password}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
