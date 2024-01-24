import React, { useEffect, useState } from "react";

import PropertyCard from "../../../../0.Components/PropertyCard";

const FeaturedProperties = () => {

  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("houses.json")
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);



  return (
    <section className="w-full mx-auto p-1">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Featured Properties
      </h2>

      <div className="flex flex-wrap gap-4 justify-center">
        {houses?.map((houses) => (
          <PropertyCard key={houses.id} houseInfo={houses}></PropertyCard>
        ))}
      </div>
      {/* Repeat similar structure for Property 2 and Property 3 */}

      
    </section>
  );
};

export default FeaturedProperties;
