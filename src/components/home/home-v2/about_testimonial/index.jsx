// import React from "react";
// import Testimonial from "../Testimonial";
import Funfact from "./Funfact";
// import Testimonial from "../Testimonial";
// import ProductSingle from "./ProductSingle";

// import VideoBox from "./VideoBox";

const TestimonialAbout = () => {
  return (
    <div className="row mt80 mt0-md">
      <div className="col-md-6 col-xl-6">
        <div className="position-relative">
          <div className="img-box-7">
            <img
              className="w-100 cover img-1"
              src="/Podcast.jpg"
              alt="about"
              style={{ height: "750px", maxWidth: "100%" }}
            />
          </div>
          <div className="img-box-8 position-relative">
            <img
              className="img-1 spin-right"
              src="/images/about/element-1.jpg"
              alt="about"
            />
          </div>
          {/* <VideoBox /> */}
          {/* <div className="img-box-10 position-relative"> */}
          {/* <ProductSingle /> */}
          {/* </div> */}
        </div>
      </div>
      {/* End col */}

      <div className="col-lg-6 col-xl-6">
        <div className="testimonial-style4 position-relative pt-0">
          <h3 className="sub-title mb25 mt10">Our Talkcast Station</h3>
          <span className="icon fas fa-quote-left" />
          <h5 className="title mb25">
            There are many variations 200 Latin words to generate Lorem Ipsum
            which looks reasonable. The generated Lorem Ipsum is therefore
            always free from repetition, injected humour, or non-characteristic
            words etc. There are many variations All necessary, making this the
            first true generator on the Internet. It uses a dictionary of over
            200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The
            generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
          </h5>
          <h6 className="author fz14">Dianne Russell</h6>
          <p className="desig mb-0">Bank of America</p>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default TestimonialAbout;
