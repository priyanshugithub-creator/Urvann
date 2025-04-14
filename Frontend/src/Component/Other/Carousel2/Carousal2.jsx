import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import PlantCard from "./PlantsCard";

const Carousel2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4); // Default to 4 on desktop

  const plants = [
    { id: 1, name: "Aloe Vera", price: "₹80", image: "/plant_images/1.avif" },
    { id: 2, name: "Fiddle Leaf Fig", price: "₹199", image: "/plant_images/1.avif" },
    { id: 3, name: "Snake Plant", price: "₹149", image: "/plant_images/1.avif" },
    { id: 4, name: "Peace Lily", price: "₹175", image: "/plant_images/1.avif" },
    { id: 5, name: "Spider Plant", price: "₹129", image: "/plant_images/1.avif" },
    { id: 6, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 7, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 8, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 9, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 10, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 11, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 12, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 13, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 14, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 15, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
    { id: 16, name: "Pothos", price: "₹90", image: "/plant_images/1.avif" },
  ];

    const updateCardsPerView = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) {
      setCardsPerView(1); // 1 card on small screens
    } else if (screenWidth < 768) {
      setCardsPerView(2); // 2 cards on medium screens
    } else {
      setCardsPerView(4); // 4 cards on large screens
    }
  };

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalSlides = Math.ceil(plants.length / cardsPerView);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative w-full overflow-hidden px-4 py-6 mb-4 rounded-xl">
      <div className="overflow-hidden">
        <div
          className=" transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, groupIndex) => {
            const start = groupIndex * cardsPerView;
            const end = start + cardsPerView;
            const slidePlants = plants.slice(start, end);

            return (
              <div key={groupIndex} className=" flex flex-wrap justify-center gap-4 px-2 h-[28rem]">
                {slidePlants.map((plant) => (
                  <div className="w-full sm:w-1/2 lg:w-1/4 max-w-xs" key={plant.id}>
                    <PlantCard name={plant.name} price={plant.price} image={plant.image} />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 h-[2rem] w-[2rem] rounded-full shadow-md hover:bg-gray-100 transition"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 h-[2rem] w-[2rem] rounded-full shadow-md hover:bg-gray-100 transition"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Carousel2;
