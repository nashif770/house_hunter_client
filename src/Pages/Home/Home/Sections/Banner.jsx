import React from "react";
import banner from '../../../../0.assets/Bannar.jpg'

const Banner = () => {
  return (
    <div
      className="flex justify-center items-center space-x-4 mt-2 mb-2 bg-cover bg-center "
      style={{ backgroundImage: `url(${banner})`, height: "720px" }}
    >
      <div className="text-white text-center p-6 rounded-lg backdrop-blur-[1px]">
        <h1 className="text-5xl font-bold py-3 pb-4 rounded-md">
          House Renters
        </h1>
        <p className="text-lg font-bold">
          A Premier House Rental Portal in Bangladesh
        </p>
        <h2 className="text-3xl font-bold my-12">
          Discover House Rentals with Us
        </h2>
      </div>
    </div>
  );
};

export default Banner;
