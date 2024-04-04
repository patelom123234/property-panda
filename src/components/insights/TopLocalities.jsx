import React from "react";
import { SellingHeader } from "./TopSellingPlace";
import Styles from "./TopLocalities.module.css";
import Ahmedabad from "../../assets/ahmedabad.png";
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Autoplay]);

const locality_data = [
  {
    locality_name: "South Bopal",
    locality_image: Ahmedabad,
  },
  {
    locality_name: "Another Locality",
    locality_image: Ahmedabad,
  },
  {
    locality_name: "Sindhubhavan",
    locality_image: Ahmedabad,
  },
  {
    locality_name: "Shilaj",
    locality_image: Ahmedabad,
  },
  // Add more localities as needed
];

export default function TopLocalities() {
  return (
    <div className={Styles.localities_container_full}>
      <div className={Styles.localities_container}>
        <SellingHeader heading="Top Localities" subHeading="Unlocking Real Estate Potential in Every Neighborhood" />
        <div className = {Styles.localities_div}>
        <Swiper
          spaceBetween={30}
          breakpoints={{
            300: {
              slidesPerView: 1.2,
              spaceBetween: 1,
            },
            350: {
              slidesPerView: 1.5,
              spaceBetween: 1,
            },
            400: {
              slidesPerView: 1.8,
              spaceBetween: 1,
            },
            450: {
              slidesPerView: 2.1,
              spaceBetween: 1,
            },500: {
              slidesPerView: 2.3,
              spaceBetween: 1,
            },
            560: {
              slidesPerView: 2.9,
              spaceBetween: 1,
            },
            650: {
              slidesPerView: 3.5,
              spaceBetween: 1,
            },
            768: {
              slidesPerView: 1.2,
            },
            // 1024: {
            //   slidesPerView: 2.4,
            // },
            900: {
              slidesPerView: 1.3,
            },
            1024: {
              slidesPerView: 1.5,
            },
            1200: {
              slidesPerView: 1.7,
            },
            1300: {
              slidesPerView: 2.3,
            },
          }}
          autoplay={{ delay: 3000 }} // Set the desired delay for autoplay
        >
          {locality_data.map((locality, index) => (
            <SwiperSlide key={index}>
              <Locality locality_data={locality} />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </div>
  );
}

function Locality({ locality_data }) {
  const { locality_name, locality_image } = locality_data;
  return (
    <div className={Styles.locality_item}>
      <img src={locality_image} alt={locality_name} />
      <h3>{locality_name}</h3>
    </div>
  );
}

TopLocalities.propTypes = {
  locality_data: PropTypes.arrayOf(
    PropTypes.shape({
      locality_name: PropTypes.string.isRequired,
      locality_image: PropTypes.string.isRequired, // Assuming it's a string, not img
    })
  ).isRequired,
};

Locality.propTypes = {
  locality_data: PropTypes.shape({
    locality_name: PropTypes.string.isRequired,
    locality_image: PropTypes.string.isRequired, // Assuming it's a string, not img
  }).isRequired,
};
