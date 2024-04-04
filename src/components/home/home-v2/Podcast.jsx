

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const PodacastsData = [
  {
    id: 1,
    imageUrl: "/images/about/about-4.jpg",
    title:
      "There are many variations All necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    author: "Dianne Russell",
    designation: "Bank of America",
  },
  // {
  //   id: 2,
  //   imageUrl: "/images/about/about-4.jpg",
  //   title:
  //     "Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.",
  //   author: "John Doe",
  //   designation: "XYZ Company",
  // },
  // Add more Podacasts as needed
];

const Podacast = () => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".testimonila_next__active",
          prevEl: ".testimonila_prev__active",
        }}
        slidesPerView={1}
      >
        {PodacastsData.map((Podacast) => (
          <SwiperSlide key={Podacast.id}>
            <div className="item">
              <div className="row">
                {/* <div className="col-lg-5 col-xl-4 offset-xl-1">
                  <div className="testimonial-style4-img position-relative"> */}
                    {/* <img
                     
                      className="w-100 h-100 cover podcast-image-cover"
                      src={Podacast.imageUrl}
                      alt="Podacast"
                    /> */}
                  {/* </div>
                </div> */}
                {/* End .col */}

                <div className="col-lg-6 col-xl-6">
                  <div className="testimonial-style4 position-relative">
                    <h3 className="sub-title mb25">Our Talkcast Station</h3>
                    <span className="icon fas fa-quote-left" />
                    <h5 className="title mb25">There are many variations All necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</h5>
                    <h6 className="author fz14">Dianne Russell</h6>
                    <p className="desig mb-0">Bank of America</p>
                  </div>
                </div>
                {/* End .col */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="rounded-arrow arrow-with-border arrow-pos">
        <button className="testimonila_prev__active swiper_button _prev">
          <i className="far fa-chevron-left" />
        </button> */}
        {/* End prev */}

        {/* <button className="testimonila_next__active swiper_button _next">
          <i className="far fa-chevron-right" />
        </button> */}
        {/* End Next */}
      {/* </div> */}
      {/* End .col for navigation  */}
    </>
  );
};

export default Podacast;
