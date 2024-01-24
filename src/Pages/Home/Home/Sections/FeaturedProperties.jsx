import React from "react";

import PropertyCard from "../../../../0.Components/PropertyCard";

const FeaturedProperties = () => {
  return (
    <section className="w-full mx-auto p-1">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Featured Properties
      </h2>

      <div className="flex flex-wrap gap-4 justify-center">
        <PropertyCard></PropertyCard>
        <PropertyCard></PropertyCard>
        <PropertyCard></PropertyCard>
        <PropertyCard></PropertyCard>
        <PropertyCard></PropertyCard>
        <PropertyCard></PropertyCard>
      </div>
      {/* Repeat similar structure for Property 2 and Property 3 */}

      <div className="text-center">
        <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          View More
        </a>
      </div>
    </section>
  );
};

export default FeaturedProperties;
