import React, { useRef } from 'react';
import PlantCard from './PlantsCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel3 = () => {

  const plants = [
    { id: 1, name: "Aloe Vera", price: "₹80", image:"/plant_images/1.avif" },
    { id: 2, name: "Fiddle Leaf Fig", price: "₹199", image:"/plant_images/1.avif" },
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

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth / 1.2;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Left Button */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full hidden md:block"
      >
        <ChevronLeft />
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar px-4 py-6"
      >
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="flex-none w-[90%] sm:w-[80%] md:w-[48%] lg:w-[23%]"
          >
            <PlantCard name={plant.name} price={plant.price} image={plant.image}  />
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full hidden md:block"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Carousel3;

