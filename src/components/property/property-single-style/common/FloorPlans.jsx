import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Pagination, Autoplay, Mousewheel } from "swiper";

const floorPlanData = [
  {
    id: "first-floor",
    title: "Floor",
    imageSrc: "/images/listings/listing-single-1.png",
  },
  {
    id: "second-floor",
    title: "Floor",
    imageSrc: "/images/listings/listing-single-1.png",
  },
  {
    id: "third-floor",
    title: "Floor",
    imageSrc: "/images/listings/listing-single-1.png",
  },
];

const FloorPlans = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
        el: ".swiper-pagination", // Add this line
        renderBullet: (index, className) => {
          return `<span class="${className} custom-bullet"></span>`;
        },
      }}
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false,
      // }}
      mousewheel={true}
      modules={[Pagination, Mousewheel]}
      className="floor-plans-container"
    >
      {floorPlanData.map((floorPlan) => (
        <SwiperSlide key={floorPlan.id}>
          <div className="floor-plan-item" style={{height:'525px'}}>
            <div className="mb-4" style={{height:'525px'}}>
              <img
                className="w-100 h-100 cover"
                src={floorPlan.imageSrc}
                alt="listing figure"
                style={{ borderRadius: "15px" }}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-pagination" style={{ marginTop: "20px" }} />
    </Swiper>
  );
};

export default FloorPlans;