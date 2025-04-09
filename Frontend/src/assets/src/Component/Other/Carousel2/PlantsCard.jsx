import React from "react";
import Button from "./Button";
import { useParams } from "react-router-dom";

const PlantCard = ({ id, name, price, image }) => {
  return (
    <div className="cursor-pointer  max-w-[200px] group sm:max-w-[300px] md:max-w-[340px]  lg:max-w-[220px] mx-auto flex flex-col items-center justify-between shadow-lg overflow-hidden bg-white">
      {/* Image Section */}
      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-52 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Details Section */}
      <div className="w-full px-3 py-4 text-center">
        <p className="text-sm sm:text-base font-medium text-gray-800">{name}</p>

        <div className="mt-1 text-base sm:text-lg font-semibold">
          <span className="text-green-600 mr-2">₹35</span>
          <span className="text-gray-500 line-through text-sm">{price}</span>
        </div>

        {/* Reviews */}
        <div className="flex justify-center items-center mt-2 text-yellow-500 text-sm sm:text-base">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="fa fa-star checked mr-0.5" />
          ))}
          <span role="img" aria-label="star" className="ml-1">🌟</span>
          <span className="text-gray-700 ml-1">49 Reviews</span>
        </div>

        {/* Button */}
        <div className="mt-4">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
