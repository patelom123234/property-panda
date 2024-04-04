// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css'; // Update import to Swiper bundle
import logo1 from '/images/homeloanlogo/hdfcbank.png';
import logo2 from '/images/homeloanlogo/baroda.png';
import logo3 from '/images/homeloanlogo/axis.png';
import logo4 from '/images/homeloanlogo/icicibank.png';
import logo5 from '/images/homeloanlogo/kotak.png';
import logo6 from '/images/homeloanlogo/sbi.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const LoanLogoSlider = () => {
  // Logos array
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <Swiper
      spaceBetween={1}
      modules={[ Pagination, Autoplay]}

      slidesPerView={1}
      autoplay={{ delay: 1000 }} // Autoplay with a delay of 2 seconds between slides
      breakpoints={{
        300: { slidesPerView: 1.5 },
        500: { slidesPerView: 2.5 },
        768: { slidesPerView: 3.5 },
        1024: { slidesPerView: 4 },
        1200: { slidesPerView: 5 },
        1400: { slidesPerView: 6 },
      }}

      onSwiper={(swiper) => {
        swiper.on('reachBeginning', () => {
          swiper.navigation.prevEl.classList.add('disabled'); // Add disabled class to prev button
        });
        swiper.on('fromEdge', () => {
          swiper.navigation.prevEl.classList.remove('disabled'); // Remove disabled class from prev button
        });
      }}
    >
      {/* Generate SwiperSlides for each logo */}
      {logos.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt={`Logo ${index + 1}`} style={logoStyle} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const logoStyle = {
  maxWidth: '100%', // Decrease logo size
  height: '70px',
  width : '180px',
  padding : '10px',
  border: '2px solid #ccc', // Add border
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Add box shadow
};

export default LoanLogoSlider;
