import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import Styles from "./Neighborhoods.module.css";
import Ahmedabad from "../../assets/ahmedabad.png";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

const Neighborhood_data = [
    {
        N_name: 'Emerald 44',
        N_area: 'Khoraj',
        N_image: Ahmedabad,
      }, {
        N_name: 'Emerald 44',
        N_area: 'Khoraj',
        N_image: Ahmedabad,
      }, {
        N_name: 'Emerald 44',
        N_area: 'Khoraj',
        N_image: Ahmedabad,
      }, {
        N_name: 'Emerald 44',
        N_area: 'Khoraj',
        N_image: Ahmedabad,
      }, {
        N_name: 'Emerald 44',
        N_area: 'Khoraj',
        N_image: Ahmedabad,
      }, {
        N_name: 'Emerald 44',
        N_area: 'Khoraj',
        N_image: Ahmedabad,
      },
  // ... other data
];

const Neighborhoods = () => {
  return (
    <div className={Styles.neighborhood_container_full}>
      <div className={Styles.neighborhood_container}>
        <N_Header heading='Value of Money' subheading='Unlocking Real Estate Potential in Every Neighborhood' />
        <N_Main data={Neighborhood_data} />
      </div>
    </div>
  );
};

const N_Header = ({ heading, subheading }) => {
  return (
    <div className={Styles.n_header_full}>
      <div className={Styles.n_header_container}>
        <div className={Styles.n_header}>
          <h2>{heading}</h2>
          <p>{subheading}</p>
        </div>
      </div>
    </div>
  );
};

const N_Main = ({ data }) => {
  return (
    <div className={Styles.n_main_full}>
      <div className={Styles.n_main}>
        <Swiper
          spaceBetween={10}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            250: {
              slidesPerView: 1.2,
              spaceBetween: 5,
            },
            300: {
              slidesPerView: 1.5,
              spaceBetween: 5,
            },
            350: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            425: {
              slidesPerView: 2.4,
              spaceBetween: 10,
            },
            540: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            690: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1290: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Neighborhood item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Neighborhood = ({ item }) => {
  return (
    <div className={Styles.n_div}>
      <img src={item.N_image} alt={item.N_name} className={Styles.n_image} />
      <p className={Styles.n_name}>{item.N_name}</p>
      <p className={Styles.n_area}>{item.N_area}</p>
    </div>
  );
};

Neighborhood.propTypes = {
  item: PropTypes.shape({
    N_name: PropTypes.string.isRequired,
    N_area: PropTypes.string.isRequired,
    N_image: PropTypes.string.isRequired,
  }).isRequired,
};

N_Main.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      N_name: PropTypes.string.isRequired,
      N_area: PropTypes.string.isRequired,
      N_image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

N_Header.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
};

export default Neighborhoods;
export { N_Header };