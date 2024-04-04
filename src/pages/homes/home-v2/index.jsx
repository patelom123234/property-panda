import MobileMenu from "@/components/common/mobile-menu";
import Partner from "@/components/common/Partner";
// import Agents from "@/components/home/home-v2/Agents";
import ApartmentType from "@/components/home/home-v2/ApartmentType";
import Explore from "@/components/home/home-v2/Explore";
// import ExploreCities from "@/components/home/home-v2/ExploreCities";
import FeaturedListings from "@/components/home/home-v2/FeatuerdListings";
import Header from "@/components/home/home-v2/Header";
import About from "@/components/home/home-v2/about";
import Testimonial_about from "@/components/home/home-v2/testimonial";
import Hero from "@/components/home/home-v2/hero";
// import React from "react";

import Footer from "@/components/common/default-footer";
import Cta from "@/components/home/home-v2/Cta";

import { Link } from "react-router-dom";

import MetaData from "@/components/common/MetaData";
import Service from "@/components/home/home-v2/Service";
import FeaturedHomes from "@/components/home/home-v2/FeaturedHomes";
// import Testimonial from "@/components/home/home-v2/Testimonial";
import TestimonialFive from "@/components/home/home-v2/Testimonial5";
// import Podacast from "@/components/home/home-v2/Podcast";
import Blog from "@/components/common/Blog";
// import Testimoninal_about from "@/components/home/home-v2/testimonial";
import TestimonialAbout from "@/components/home/home-v2/about_testimonial";
// import Cta2 from "@/components/home/home-v2/Cta2";
import Cta2 from "@/components/home/home-v2/Cta2";
import { useEffect, useRef, useState } from "react";
import LoginSignupModal from "@/components/common/login-signup-modal/index";

const metaInformation = {
  title: "Property-Panda || Real Estate Website",
};

const Home_V2 = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const modalRef = useRef(null);

  const handleLoginModalClose = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowLoginModal(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      handleLoginModalClose(event);
    };

    if (showLoginModal) {
      window.addEventListener("click", handleClickOutside, true);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside, true);
    };
  }, [showLoginModal]);

  return (
    <>
      {" "}
      <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      <Header />
      <Header
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
      {showLoginModal && (
        <LoginSignupModal
          setShowSignUpModal={setShowLoginModal}
          onClose={() => setShowLoginModal(false)}
        />
      )}
      {/* End Main Header Nav */}
      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}
      {/* Home Banner Style V2 */}
      <section className="home-banner-style2 p0">
        <div className="home-style2">
          <div className="container maxw1600">
            <div className="home2-hero-banner bdrs12"></div>
            <div className="row">
              <div className="col-xl-10 mx-auto">
                <Hero />
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
      </section>
      {/* End Home Banner Style V2 */}
      {/* Explore Apartment */}
      <section className="pb90 pb30-md">
        <div className="container">
          <div className="row justify-content-center" data-aos="fade">
            <div className="col-lg-12">
              <ApartmentType />
            </div>
          </div>
        </div>
      </section>
      {/* End Explore Apartment */}
      {/* Featured Listings */}
      <section className="pt0 pb0 pb30-md bgc-white">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Trending Property</h2>
                <p className="paragraph">
                  Unlocking Real Estate Potential in Every Neighborhood
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" to="/grid-full-4-col">
                  See All Properties
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          {/* End header */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <FeaturedListings />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Explore Featured Listings */}
      {/* Property Cities */}
      {/* <section className="pt0 pb90 pb50-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Explore Cities</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div> */}
      {/* End header */}
      {/* <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="cities_prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div> */}
      {/* End prev */}
      {/* <div className="col-auto">
                  <div className="pagination swiper--pagination cities_pagination__active" />
                </div> */}
      {/* End pagination */}
      {/* <div className="col-auto">
                  <button className="cities_next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div> */}
      {/* End Next */}
      {/* </div>
            </div> */}
      {/* End .col for navigation and pagination */}
      {/* </div> */}
      {/* End .row */}
      {/* <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <ExploreCities />
              </div>
            </div>
          </div> */}
      {/* End .row */}
      {/* </div>
      </section> */}
      {/* End property cities */}
      {/* About Us */}
      <section className="about-us">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">The Limelight</h2>
                <p className="paragraph">
                  Elevating Living to a Spotlight-Worthy Standard
                </p>
              </div>
            </div>
            {/* End header */}
            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}

            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}

            {/* End .col for navigation and pagination */}
          </div>

          <About />
        </div>
      </section>
      {/* End About Us */}
      {/* Featured Homes */}
      <section className="pt-0 pb90 pb30-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Virtual Property Showcase</h2>
                <p className="paragraph">
                  Embark on a Journey Through Virtual Home Realities.
                </p>
              </div>
            </div>
            {/* End header */}
            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}

            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}

            {/* End .col for navigation and pagination */}
          </div>

          {/* End .row */}
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="explore-apartment-5col-slider">
                <FeaturedHomes />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Featured Homes */}
      {/* Explore Apartment */}
      <section className="p-0">
        <div className="how-we-help position-relative mx-auto bgc-thm-light maxw1600 pt120 pt60-md pb90 pb30-md bdrs12 mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 m-auto wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="main-title text-center">
                  <h2 className="title explore-apartment-heading">
                    How Property Panda Help you
                  </h2>
                  <p className="paragraph explore-apartment-paragraph">
                    Unlocking Real Estate Potential in Every Neighborhood
                  </p>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <Explore />
            </div>
          </div>
        </div>
      </section>
      {/* End Explore Apartment */}
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="main-title text-center">
                <h2 className="title">Podcast</h2>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
                </p>
              </div>
            </div>
          </div>
          {/* <Testimonial /> */}
          <TestimonialAbout />
        </div>
      </section>
      {/* Customers Podcast */}
      {/*End Customers Podcast */}
      {/* CTA Banner */}
      <section className="pt30 pb-0">
        <div className="cta-banner5 bgc-f7  maxw1850 pt100 pt60-lg pb90 pb30-lg position-relative overflow-hidden mx20-lg m-auto">
          <div className="container">
            <div className="row">
              <div className="col-md-11 wow fadeInUp" data-aos-delay="100">
                <div className="main-title">
                  <h2 className="title text-capitalize ">
                    Let’s find the right selling{" "}
                    <br className="d-none d-md-block" /> option for you
                  </h2>
                  <p className="text cta-banner-home-second-paragraph">
                    Aliquam lacinia diam quis lacus euismod
                  </p>
                </div>
              </div>
            </div>
            {/* End .row */}
            {/* <Cta/> */}
            {/* <Cta2/> */}

            <div className="row" data-aos="fade-up" data-aos-delay="200">
              <Service />
            </div>
          </div>
        </div>
      </section>
      {/* End CTA Banner */}
      {/* Our Testimonials */}
      {/* $$$$$$$$ */}
      {/* <section className="pt90 pt60-md pb40-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="title">People Love Living with Realton</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {/* End header */}
      {/* <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="testimonila_prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div> */}
      {/* End prev */}
      {/* <div className="col-auto">
                  <div className="pagination swiper--pagination testimonila_pagination__active" />
                </div> */}
      {/* End pagination */}
      {/* <div className="col-auto">
                  <button className="testimonila_next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div> */}
      {/* End Next */}
      {/* </div>
            </div> */}
      {/* End .col for navigation and pagination */}
      {/* </div> */}
      {/* End .row */}
      {/* <div className="row">
            <div className="col-lg-12">
              <div
                className="testimonial-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              > */}
      {/* <Testimonial />
              </div>
            </div>
          </div>
        </div> */}
      {/* </section> */}
      {/* $$$$$$$$$$$$$ */}
      <section className="pb50-md">
        <div className="container maxw1600">
          <div className="row  justify-content-center text-center align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="title">Testimonial</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {/* End header */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div
                className="testimonial-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <TestimonialFive />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Testimonials */}
      {/* <section className="our-testimonial p-0">
        <div className="cta-banner2 bgc-f7 maxw1600 mx-auto pt110 pt60-md pb110 pb60-md bdrs12 position-relative">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="main-title text-center">
                  <h2>Testimonials</h2>
                  <p className="paragraph">
                    10,000+ unique online course list designs
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-8 m-auto"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="testimonial-style2">
                  <Testimonial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End Our Testimonials */}
      {/* Exclusive Agents */}
      {/* <section className="pb90">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Our Exclusive Agetns</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {/* End header */}
      {/* <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="agent_prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div> */}
      {/* End prev */}
      {/* 
                <div className="col-auto">
                  <div className="pagination swiper--pagination agent_pagination__active" />
                </div> */}
      {/* End pagination */}
      {/* <div className="col-auto">
                  <button className="agent_next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div> */}
      {/* End Next */}
      {/* </div>
            </div> */}
      {/* End .col for navigation and pagination */}
      {/* </div> */}
      {/* End .row */}
      {/* <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <Agents />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Exclusive Agents */}
      {/* <section className='pt-0 mb0-md pb90 pb30-md'>
        <div className="pt"></div>
      </section> */}
      {/* Explore Blog */}
      <section className="pt-0 mb0-md pb90 pb30-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto" data-aos="fade-up">
              <div className="main-title text-start text-md-center">
                <h2 className="title">From Our Blog</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <Blog />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Explore Blog */}
      {/* Our CTA */}
      <Cta />
      {/* End Our CTA */}
      {/* Our Partners */}
      <section className="our-partners pt90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="100">
              <div className="main-title text-center">
                <h6>Trusted by the world’s best</h6>
              </div>
            </div>
            {/* End .col-12 */}

            <div
              className="col-lg-12 text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Partner />
            </div>
            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Our Partners */}
      <Cta2 />
      {/* Start Our Footer */}
      <section className="footer-style1 at-home2 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V2;
