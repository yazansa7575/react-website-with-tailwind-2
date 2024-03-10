import React from "react";

const Gallery = () => {
  return (
    <div id="Gallery" className="md:max-w-[70%] max-w-[90%] mx-auto m-[50px]  ">
      <h3 className="mt-10 m-5 text-xl text-center font-bold">Gallery</h3>
      {/* Gallery */}
      <div className=" grid md:grid-cols-5 gap-2">
        <img
          loading="lazy"
          className="h-full w-full object-cover md:col-span-3 col-span-2 row-span-2 "
          src="./gallry (2).jpg"
          alt="/"
        />
        <img
          loading="lazy"
          className="h-full w-full object-cover "
          src="./gallry (1).jpg"
          alt="/"
        />
        <img
          loading="lazy"
          className="h-full w-full object-cover "
          src="./gallry (3).jpg"
          alt="/"
        />
        <img
          loading="lazy"
          className="h-full w-full object-cover "
          src="./gallry (4).jpg"
          alt="/"
        />
        <img
          loading="lazy"
          className="h-full w-full object-cover "
          src="./gallry (5).jpg"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Gallery;
