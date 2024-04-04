import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { EffectCoverflow } from "swiper/core";

// Install the required modules
SwiperCore.use([EffectCoverflow]);

const FeaturedHomes = () => {
  const featuredHomesData = [
    {
      id: 1,
      imageUrl: "/images/listings/as-6.jpeg",
      title: "Apartments for sale",
      description: "22 Properties",
    },
    {
      id: 2,
      imageUrl: "/images/listings/as-7.jpeg",
      title: "Apartments for sale",
      description: "22 Properties",
    },
    {
      id: 3,
      imageUrl: "/images/listings/as-8.jpeg",
      title: "Apartments for sale",
      description: "22 Properties",
    },
    {
      id: 4,
      imageUrl: "/images/listings/as-9.jpeg",
      title: "Apartments for sale",
      description: "22 Properties",
    },
    {
      id: 5,
      imageUrl: "/images/listings/as-6.jpeg",
      title: "Apartments for sale",
      description: "22 Properties",
    },
    {
      id: 6,
      imageUrl: "/images/listings/as-7.jpeg",
      title: "Apartments for sale",
      description: "22 Properties",
    },
  ];
  const swiperStyles = {
    width: "100%",
    margin: "0 auto",
    paddingBottom: "50px",
  };

  const titleStyles = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    // color: "white",
    margin: "0.5rem 0",
  };

  const descriptionStyles = {
    fontSize: "1rem",
    margin: "0.5rem 0",
    // color: "white",
  };

  return (
    <div style={swiperStyles}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {featuredHomesData.map((home) => (
          <SwiperSlide key={home.id} style={{ width: "100%" }}>
            <Link to="/grid-full-4-col">
              <div className="swiper-slide-content">
                <img
                  src={home.imageUrl}
                  alt={home.title}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
                <div
                  style={{
                    textAlign: "center",
                    padding: "2px",
                    background: "#D3D3D3",
                    color: "white",
                  }}
                >
                  <h6 style={titleStyles}>{home.title}</h6>
                  <p style={descriptionStyles}>{home.description}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedHomes;

// import React from 'react';import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import { EffectCoverflow, Pagination } from 'swiper';
// import { Link } from "react-router-dom";

// const FeaturedHomes = () => {
//   const featuredHomesData = [
//     {
//       id: 1,
//       imageUrl: "/images/listings/as-6.jpeg",
//       title: "Apartments for sale",
//       description: "22 Properties",
//     },
//     {
//       id: 2,
//       imageUrl: "/images/listings/as-7.jpeg",
//       title: "Single family homes for sale",
//       description: "22 Properties",
//     },
//     {
//       id: 3,
//       imageUrl: "/images/listings/as-8.jpeg",
//       title: "Office for sale",
//       description: "22 Properties",
//     },
//     {
//       id: 4,
//       imageUrl: "/images/listings/as-9.jpeg",
//       title: "Villas for sale",
//       description: "22 Properties",
//     },
//     {
//       id: 5,
//       imageUrl: "/images/listings/as-6.jpeg",
//       title: "Apartments for sale",
//       description: "22 Properties",
//     },
//     {
//       id: 6,
//       imageUrl: "/images/listings/as-7.jpeg",
//       title: "Single family homes for sale",
//       description: "22 Properties",
//     },
//   ];

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import { EffectCoverflow, Pagination } from 'swiper';
// import { Link } from "react-router-dom";

// const FeaturedHomes = () => {
//   const featuredHomesData = [
//     {
//       id: 1,
//       imageUrl: "/images/listings/as-6.jpeg",
//       title: "Apartments for sale",
//       description: "22 Properties",
//     },
//     {
//       id: 2,
//       imageUrl: "/images/listings/as-7.jpeg",
//       title: "Single family homes for sale",
//       description: "22 Properties",
//     },
//     {
//       id: 3,
//       imageUrl: "/images/listings/as-8.jpeg",
//       title: "Office for sale",
//       description: "22 Properties",
//     },
//     {
//       id: 4,
//       imageUrl: "/images/listings/as-9.jpeg",
//       title: "Villas for sale",
//       description: "22 Properties",
//     },
//     {
//       id: 5,
//       imageUrl: "/images/listings/as-6.jpeg",
//       title: "Apartments for sale",
//       description: "22 Properties",
//     },
//     {
//       id: 6,
//       imageUrl: "/images/listings/as-7.jpeg",
//       title: "Single family homes for sale",
//       description: "22 Properties",
//     },

//   ];

//   return (
//     <div style={{ height: '100%' }}>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={{
//           clickable: true,
//           el: '.swiper-pagination',
//         }}
//         mousewheel={true}
//         draggable={true}
//         initialSlide={0} // Start from the first slide
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//         style={{
//           width: '100%',
//           paddingTop: '50px',
//           paddingBottom: '50px',
//         }}
//       >
//         {featuredHomesData.map((home) => (
//           <SwiperSlide key={home.id} style={{ width: 'auto' }}>
//             <div className="item">
//               <Link to="/grid-full-4-col">
//                 <div className="apartment-style2 text-center mb30">
//                   <div className="apartment-img">
//                     <img
//                       className="w-100"
//                       src={home.imageUrl}
//                       alt={home.title}
//                       style={{
//                         display: 'block',
//                         maxWidth: '300px',
//                         maxHeight: '300px',
//                         objectFit: 'cover',
//                       }}
//                     />
//                   </div>
//                   <div className="apartment-content">
//                     <h6 className="title mb-0">{home.title}</h6>
//                     <p className="text mb-0">{home.description}</p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </SwiperSlide>
//         ))}
//         <div className="swiper-pagination"></div>
//       </Swiper>
//     </div>
//   );
// };

// export default FeaturedHomes;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// import slide_image_1 from '/images/listings/as-6.jpeg';
// import slide_image_2 from '/images/listings/as-6.jpeg';
// import slide_image_3 from '/images/listings/as-6.jpeg';
// import slide_image_4 from '/images/listings/as-6.jpeg';
// import slide_image_5 from '/images/listings/as-6.jpeg';
// import slide_image_6 from '/images/listings/as-6.jpeg';
// import slide_image_7 from '/images/listings/as-6.jpeg';

// function FeaturedHomes() {
//   return (
//     <div className="container">
//       <h1 className="heading">Flower Gallery</h1>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         <SwiperSlide>
//           <img src={slide_image_1} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_2} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_3} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_4} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_5} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_6} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_7} alt="slide_image" />
//         </SwiperSlide>

//         <div className="slider-controler">
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// }

// export default FeaturedHomes;
