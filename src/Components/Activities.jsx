import React from "react";
import { Fade } from "react-awesome-reveal";

const Activities = () => {
  return (
    <Fade>
      <div className=" md:max-w-[70%] max-w-[90%]  py-4 m-auto mt-[-60px]  relative flex md:gap-2 md:flex-row flex-col  justify-center z-[98]  ">
        <div className=" relative my-3 shadow-md md:max-w-[33%]">
          <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
            <h1 className=" font-bold md:text-2xl text-xl text-white ">
              Restors
            </h1>
          </div>
          <img
            loading="lazy"
            src="./hero_1.jpg"
            alt=""
            className="  rounded-sm h-full w-full object-cover border-white border-4  "
          />
          <div className=" absolute h-full w-full bg-black/10 top-0 z-10"></div>
        </div>
        <div className=" relative my-3 shadow-md md:max-w-[33%]">
          <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
            <h1 className=" font-bold md:text-2xl text-xl text-white ">
              Restors
            </h1>
          </div>
          <img
            loading="lazy"
            src="./hero_2.jpg"
            alt=""
            className="  rounded-sm h-full w-full object-cover border-white border-4  "
          />
          <div className=" absolute h-full w-full bg-black/10 top-0 z-10"></div>
        </div>
        <div className=" relative my-3 shadow-md md:max-w-[33%]">
          <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
            <h1 className=" font-bold md:text-2xl text-xl text-white ">
              Restors
            </h1>
          </div>
          <img
            loading="lazy"
            src="./hero_3.jpg"
            alt=""
            className="  rounded-sm h-full w-full object-cover border-white border-4  "
          />
          <div className=" absolute h-full w-full bg-black/10 top-0 z-10"></div>
        </div>
      </div>
    </Fade>
  );
};

export default Activities;
