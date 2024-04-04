
// // insight.jsx 
// import Ahmedabad from "../../src/assets/ahmedabad.png";
// import PropTypes from "prop-types";
// import Styles from "./Insights.module.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import { Autoplay} from 'swiper/modules';
// import "swiper/css";


// function Insights() {
  // const InsightData = [
  //   {
  //     img: Ahmedabad,
  //     discription: "Lorem ipsum dolor sit amet",
  //   },
  //   {
  //     img: Ahmedabad,
  //     discription: "Lorem ipsum dolor sit amet",
  //   },
  //   {
  //     img: Ahmedabad,
  //     discription: "Lorem ipsum dolor sit amet",
  //   },
  //   {
  //     img: Ahmedabad,
  //     discription: "Lorem ipsum dolor sit amet",
  //   },
  //   {
  //     img: Ahmedabad,
  //     discription: "Lorem ipsum dolor sit amet",
  //   },
  //   {
  //     img: Ahmedabad,
  //     discription: "Lorem ipsum dolor sit amet",
  //   },
  // ];

//   return (
//     <div className={Styles.insight_full}>
//     <div className={Styles.insight_container}>
//       <h2 className={Styles.insight_heading}>Insight Tools</h2>
//       <div className={Styles.all_insights}>
//       <Swiper
//         spaceBetween={10}
//         slidesPerView={5}
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay]}
//         breakpoints={{
//           250: {
//             slidesPerView:2,
//             spaceBetween :10,
//           },

//           300: {
//             slidesPerView: 2.3,
//             spaceBetween: 10,
//           },
//           390: {
//             slidesPerView: 2.7,
//             spaceBetween: 10,
//           },
//           430: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//           },
//           530 : {
//             slidesPerView: 4,
//             spaceBetween: 10,
//           },
//           620 : {
//             slidesPerView: 4.5,
//             spaceBetween: 10,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween:10,
//           },
//           900: {
//             slidesPerView: 3.5,
//           },
//           1024: {
//             slidesPerView: 4,
//           },
//           1200: {
//             slidesPerView: 5,
//           },
//           1400: {
//             slidesPerView: 6,
//           },
//         }}
//       >
//         {InsightData.map((InsightData, index) => (
//           <SwiperSlide key={index}>
//           <Insight key={index} {...InsightData} />
//           </SwiperSlide>
//         ))}
//         </Swiper>
//       </div>
//     </div>
//     </div>
//   );
// }

// function Insight({ img, discription }) {
//   return (
//     <div className={Styles.insight}>
//       <img src={img} alt="logo" className={Styles.insight_img} />
//       <p className={Styles.insight_description}>{discription}</p>
//     </div>
//   );
// }

// Insight.propTypes = {
//   discription: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
// };
// export default Insights;

// insight.jsx
import Ahmedabad from "../../assets/ahmedabad.png";
import PropTypes from "prop-types";
import Styles from "./Insights.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

function Insights() {
  const InsightData = [
    {
      img: Ahmedabad,
      discription: "Lorem ipsum dolor sit amet",
    },
    {
      img: Ahmedabad,
      discription: "Lorem ipsum dolor sit amet",
    },
    {
      img: Ahmedabad,
      discription: "Lorem ipsum dolor sit amet",
    },
    {
      img: Ahmedabad,
      discription: "Lorem ipsum dolor sit amet",
    },
    {
      img: Ahmedabad,
      discription: "Lorem ipsum dolor sit amet",
    },
    {
      img: Ahmedabad,
      discription: "Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <div className={Styles.insight_full}>
      <div className={Styles.insight_container}>
        <h2 className={Styles.insight_heading} style={{color:'white'}}>Insight Tools</h2>
        <div className={Styles.all_insights}>
          <Swiper
            spaceBetween={10}
            autoplay={{ delay: 2500 }}
            breakpoints={{
              250: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              300: {
                slidesPerView: 2.3,
                spaceBetween: 10,
              },
              390: {
                slidesPerView: 2.7,
                spaceBetween: 10,
              },
              430: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              530: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              620: {
                slidesPerView: 4.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              900: {
                slidesPerView: 3.5,
              },
              1024: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
              1400: {
                slidesPerView: 6,
              },
            }}
          >
            {InsightData.map((data, index) => (
              <SwiperSlide key={index}>
                <Insight {...data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

function Insight({ img, discription }) {
  return (
    <div className={Styles.insight}>
      <img src={img} alt="logo" className={Styles.insight_img} />
      <p className={Styles.insight_description}>{discription}</p>
    </div>
  );
}

Insight.propTypes = {
  discription: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Insights;