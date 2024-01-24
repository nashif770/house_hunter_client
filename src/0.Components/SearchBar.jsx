import React from "react";
import { useForm } from "react-hook-form";

const SearchBar = ({ getSearchData }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleSearch = (data) => {
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );
    getSearchData(filteredData);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className="flex flex-wrap gap-4 justify-center"
    >
      <div className="form-control flex flex-row items-center">
        <label className="label">
          <span className="label-text text-1xl mx-3">City</span>
        </label>
        <input
          type="text"
          name="city"
          className="input input-bordered  h-[35px] w-[100px]"
          {...register("city", { required: false })}
        />
      </div>
      <div className="form-control flex flex-row items-center">
        <label className="label">
          <span className="label-text text-1xl mx-3">Bedrooms</span>
        </label>
        <input
          type="number"
          name="bedrooms"
          className="input input-bordered  h-[35px] w-[100px]"
          {...register("bedrooms", { required: false })}
        />
      </div>
      <div className="form-control flex flex-row items-center">
        <label className="label">
          <span className="label-text text-1xl mx-3">Bathrooms</span>
        </label>
        <input
          type="number"
          name="bathrooms"
          className="input input-bordered  h-[35px] w-[100px]"
          {...register("bathrooms", { required: false })}
        />
      </div>
      <div className="form-control flex flex-row items-center">
        <label className="label">
          <span className="label-text text-1xl mx-3">Room Size</span>
        </label>
        <input
          type="text"
          name="roomsize"
          className="input input-bordered  h-[35px] w-[100px]"
          {...register("roomsize", { required: false })}
        />
      </div>
      <div className="form-control flex flex-row items-center">
        <label className="label">
          <span className="label-text text-1xl mx-3">Rent</span>
        </label>
        <input
          type="text"
          name="rent"
          className="input input-bordered  h-[35px] w-[100px]"
          {...register("rent", { required: false })}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
