import React from "react";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <Fade>
      <div id="Contact" className="md:max-w-[70%] max-w-[90%]  m-auto mb-5 ">
        <h3 className="text-center text-xl  font-bold  "> Send us a message</h3>
        <p className="text-center mb-4">We're standing by! </p>
        <div className="grid md:grid-cols-2  gap-2">
          <img
            loading="lazy"
            className=" h-full w-full object-cover  "
            src="Contact.jpg"
            alt="/"
          />
          <form>
            <div className="grid grid-cols-2 gap-3">
              <input
                className="border p-2 "
                type="text"
                placeholder="First Name"
              />
              <input
                className="border p-2 "
                type="text"
                placeholder="Last Name"
              />
              <input className="border p-2 " type="email" placeholder="Email" />
              <input className="border p-2 " type="tel" placeholder="Phone " />
              <input
                className="border p-2 col-span-2"
                type="text"
                placeholder="Address "
              />
              <textarea
                className="border p-2 col-span-2  resize-none "
                placeholder="write your message here"
                cols="30"
                rows="5"
              ></textarea>
              <button className="col-span-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Fade>
  );
};

export default Contact;
