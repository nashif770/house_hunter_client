import React, { useEffect, useState } from "react";
import PropertyCard from "../../../../0.Components/PropertyCard";
import SearchBar from "../../../../0.Components/SearchBar";

const AllProperties = () => {
    const [houses, setHouses] = useState([]);
    const [searchedHouse, setSearchedHouse] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("houses.json")
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);

  const fetchHouses = async () => {
    try {
      const response = await fetch(`houses.json?page=${currentPage}`);
      const data = await response.json();
      setHouses((prevHouses) => [...prevHouses, ...data]);
      setSearchedHouse((prevSearchedHouse) => [...prevSearchedHouse, ...data]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching houses:", error);
    }
  };

  console.log("houses", houses);

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
    setSearchedHouse(filteredHouses)
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Search for Houses</h2>
      <div className="mb-4">
        <SearchBar getSearchData={getSearchData}></SearchBar>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {
            searchedHouse?.map((houses)=>(
                <PropertyCard key={houses.id} houseInfo={houses}></PropertyCard>
            ))
        }
      </div>
    </div>
  );
};

export default AllProperties;
