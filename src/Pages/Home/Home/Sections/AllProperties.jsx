import React, { useEffect, useState } from "react";
import PropertyCard from "../../../../0.Components/PropertyCard";
import SearchBar from "../../../../0.Components/SearchBar";

const AllProperties = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("houses.json")
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);

  const getSearchData = (data) => {
    // Call the onSearch prop with the current city value
    console.log("searched", data);
    const filteredHouses = houses.filter((house) => {
      for (const key in data) {
        if (data[key] && house[key].toLowerCase() !== data[key].toLowerCase()) {
          return false;
        }
      }
      return true;
    });
    console.log("Filtered Houses:", filteredHouses);
    setHouses(filteredHouses);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Search for Houses</h2>
      <div className="mb-4">
        <SearchBar getSearchData={getSearchData}></SearchBar>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {houses?.map((houses) => (
          <PropertyCard key={houses.id} houseInfo={houses}></PropertyCard>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-primary border-none bg-blue-500 text-white px-4 py-2 rounded-md">
          View More
        </button>
      </div>
    </div>
  );
};

export default AllProperties;
