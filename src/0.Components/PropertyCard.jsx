import React from "react";
import banner from "../0.assets/Bannar.jpg";

const PropertyCard = () => {
  return (
    <div className="border rounded overflow-hidden mb-8 w-[400px]">
      <img src={banner} alt="Property" className="w-full h-auto" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Property</h3>
        <p>Location: City or Neighborhood</p>
        <p>Bedrooms: 3</p>
        <p>Bathrooms: 2</p>
        <p>Price: $2000/month</p>
        <p className="text-gray-700">
          Description: A brief description highlighting key features.
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
