import React, { useRef } from 'react';
import PlantCard from './PlantsCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel3 = () => {
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
        {[...Array(10)].map((_, idx) => (
          <div
            key={idx}
            className="flex-none w-[90%] sm:w-[80%] md:w-[48%] lg:w-[23%]"
          >
            <PlantCard />
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

