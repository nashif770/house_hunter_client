import React from "react";
import banner from "../0.assets/Bannar.jpg";

const PropertyCard = ({ houseInfo }) => {
  console.log("property Card", houseInfo);

  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-lg mb-8 max-w-[400px]">
      <img
        src={houseInfo?.picture}
        alt="Property"
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {houseInfo?.name}
        </h3>
        <p className="text-gray-600 mb-2">{houseInfo?.address}</p>
        <p className="my-2">Availability: {houseInfo?.availabilityDate}</p>
        <div className="divider"></div>
        <div className="grid grid-cols-2 text-sm text-gray-700 mb-2">
          <p>Bedrooms: {houseInfo?.bedrooms}</p>
          <p>Bathrooms: {houseInfo?.bathrooms}</p>
          <p className="my-2">Room Size: {houseInfo?.roomSize} sqft</p>
        </div>
        <div className="flex justify-between text-sm text-gray-700 mb-2">
          <p>Rent/Month: BDT {houseInfo?.rentPerMonth}</p>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mr-2">
            Contact Us
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-full">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
