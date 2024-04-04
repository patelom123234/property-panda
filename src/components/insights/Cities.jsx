import PropTypes from "prop-types";
import Styles from "./Cities.module.css";
import Ahmedabad from "../../assets/ahmedabad.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

const cityData = [
  {
    city: "Banglore",
    state: "Karnataka",
    country: "India",
    img: Ahmedabad,
  }, {
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    img: Ahmedabad,
  },
  {
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    img: Ahmedabad,
  },
  {
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    img: Ahmedabad,
  }, {
    city: "Banglore",
    state: "Karnataka",
    country: "India",
    img: Ahmedabad,
  },{
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    img: Ahmedabad,
  }, {
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    img: Ahmedabad,
  }, 
  // ... other data
];

const Cities = ({ heading, subheading }) => {
  return (
    <div className={Styles.city_container}>
      <h2 className={Styles.cities_heading}>{heading}</h2>
      <p className={Styles.cities_paragraph}>{subheading}</p>
      <Swiper
        spaceBetween={10}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          250: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          300: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          370: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
      >
        {cityData.map((city, index) => (
          <SwiperSlide key={index}>
            <City {...city} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const City = ({ city, img }) => {
  return (
    <div className={`${Styles.city_div}`}>
      <img src={img} alt="city_img" className={Styles.city_img} />
      <p className={Styles.city_name}>{city}</p>
    </div>
  );
};

City.propTypes = {
  city: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

Cities.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
};

export default Cities;