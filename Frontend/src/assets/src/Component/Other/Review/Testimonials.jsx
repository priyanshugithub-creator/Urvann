import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Testimonials() {
  const testimonials = [
    {
      client_name: "Akshitha S Ratheesh",
      desc: "Had an amazing shopping experience with multiple orders delivered in a day. Looking forward to buying more.",
      stars: 5,
    },
    {
      client_name: "Shaurya Rathi",
      desc: "Ordered 17 types of flower plants and seeds. Delivery was quick and packaging excellent. Plants arrived healthy and as described.",
      stars: 4,
    },
    {
      client_name: "Seema Thapiyal",
      desc: "Appreciates the convenience and quality. Enjoys pursuing her gardening hobby thanks to Urvann.",
      stars: 5,
    },
    {
      client_name: "Rohit Koul",
      desc: "Very satisfied with the wide variety and quality of products. Delivery service is also impressive.",
      stars: 4,
    },
    {
      client_name: "Madhu Bala",
      desc: "Loves the freshness and condition of delivered plants. Found the entire process smooth and hassle-free.",
      stars: 5,
    },
    {
      client_name: "Rakhi Rastogi",
      desc: "Found Urvann reliable with affordable prices. Appreciates the packaging and healthy plants.",
      stars: 3,
    },
  ];

  const renderStars = (count) => {
    const totalStars = 5;
    return (
      <div className="text-[#2C6D31] text-2xl">
        {[...Array(totalStars)].map((_, i) =>
          i < count ? <span key={i}>★</span> : <span key={i}>☆</span>
        )}
      </div>
    );
  };

  return (
    <div className="mx-2">
    <h1 className="text-center popular-categories-title">CLIENT SAYS</h1>
      <div className="pt-10 pb-10">
        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#DDDDDD] text-sm h-72 flex flex-col items-center justify-around p-4">
                {renderStars(testimonial.stars)}
                <p className="text-center">{testimonial.desc}</p>
                <h1 className="text-center font-bold text-[#3D4152]">
                  {testimonial.client_name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
