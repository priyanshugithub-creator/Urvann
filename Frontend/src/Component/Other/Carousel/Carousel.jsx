import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Carousel.css";

export default function Carousel() {
  const navigate = useNavigate();

  // Your three carousel images
  const images = [
    { src: "caraousel1.avif", path: "/browse/flowering-plants" },
    { src: "caraousel2.avif", path: "/browse/plants" },
    { src: "caraousel3.avif", path: "/browse/indoor-plants" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide effect - changes every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="full-width-carousel ">
      <div className="carousel-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => navigate(image.path)}
          >
            <img src={image.src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button
        className="carousel-button prev"
        onClick={prevSlide}
        aria-label="Previous image"
      >
        &lt;
      </button>

      <button
        className="carousel-button next"
        onClick={nextSlide}
        aria-label="Next image"
      >
        &gt;
      </button>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => {
              setCurrentIndex(index);
              navigate(images[index].path);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

