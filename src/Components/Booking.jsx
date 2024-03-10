import React from "react";
import { Slide } from "react-awesome-reveal";

const Booking = () => {
  return (
    <Slide direction="down">
      <div
        id="Deals"
        className="md:max-w-[70%] max-w-[90%]  m-auto flex flex-col md:flex-col  gap-3"
      >
        <div className="flex  flex-col w-full ">
          <label
            htmlFor="Denstination"
            className=" text-lg font-bold text-gray-700"
          >
            Destination
          </label>
          <select
            id="Denstination"
            className=" text-lg  bg-black/10 p-1 text-gray-700"
          >
            <option>Maldive</option>
            <option>Cuzlomn</option>
            <option>Key West</option>
            <option>Haway</option>
          </select>
        </div>
        <div className="flex  flex-row gap-2  flex-wrap justify-between w-full ">
          <div className="flex  flex-col flex-1">
            <label
              htmlFor="Check-In"
              className=" text-lg font-bold text-gray-700"
            >
              Check-In
            </label>
            <input
              className=" text-lg  bg-black/10 p-1 text-gray-700"
              type="date"
              id="Check-In"
            />
          </div>
          <div className="flex  flex-col flex-1">
            <label
              htmlFor="Check-Out"
              className=" text-lg font-bold text-gray-700"
            >
              Check-Out
            </label>
            <input
              className=" text-lg  bg-black/10 p-1 text-gray-700"
              type="date"
              id="Check-Out"
            />
          </div>
        </div>
        <div className="flex  flex-col w-full ">
          <label className=" text-lg font-bold text-gray-700" htmlFor="search">
            Search
          </label>
          <button className="text-lg font-bold tracking-wide">
            Rate & Availabilities
          </button>
        </div>
      </div>
    </Slide>
  );
};

export default Booking;
