//
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
// import EnergyClass from "@/components/property/property-single-style/common/EnergyClass";
import FloorPlans from "@/components/property/property-single-style/common/FloorPlans";
// import HomeValueChart from "@/components/property/property-single-style/common/HomeValueChart";
// import InfoWithForm from "@/components/property/property-single-style/common/more-info";
import NearbySimilarProperty from "@/components/property/property-single-style/common/NearbySimilarProperty";
import PropertyAddress from "@/components/property/property-single-style/common/PropertyAddress";
import PropertyDetails from "@/components/property/property-single-style/common/PropertyDetails";
import PropertyFeaturesAminites from "@/components/property/property-single-style/common/PropertyFeaturesAminites";
import PropertyHeader from "@/components/property/property-single-style/single-v7/PropertyHeader";
// import PropertyNearby from "@/components/property/property-single-style/common/PropertyNearby";
// import PropertyVideo from "@/components/property/property-single-style/common/PropertyVideo";
import PropertyViews from "@/components/property/property-single-style/common/property-view";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
import ReviewBoxForm from "@/components/property/property-single-style/common/ReviewBoxForm";
// import VirtualTour360 from "@/components/property/property-single-style/common/VirtualTour360";
import AllReviews from "@/components/property/property-single-style/common/reviews";
import ContactWithAgent from "@/components/property/property-single-style/sidebar/ContactWithAgent";
import ScheduleTour from "@/components/property/property-single-style/sidebar/ScheduleTour";
import PropertyGallery from "@/components/property/property-single-style/single-v7/PropertyGallery";
// import React from "react";
import MortgageCalculator from "@/components/property/property-single-style/common/MortgageCalculator";
// import WalkScore from "@/components/property/property-single-style/common/WalkScore";
import OverView from "@/components/property/property-single-style/single-v7/OverView";

import MetaData from "@/components/common/MetaData";
import { useParams } from "react-router-dom";
import LoanLogoSlider from "@/components/property/property-single-style/common/LoanLogoSlider";
import DreamHouse from "@/components/property/property-single-style/common/DreamHouse";
import Cta2 from "@/components/home/home-v2/Cta2";

const metaInformation = {
  title: "Property Single V7 || Homez - Real Estate ReactJS Template",
};

const SingleV7 = () => {
  let params = useParams();
  return (
    <>
      <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* <!-- Start Property Singe Top --> */}
      <section className="pt60 pb0 bgc-blue">
        <div className="container">
          <div className="row">
            <PropertyHeader id={params.id} />
          </div>
          {/* End .row */}

          <div className="row  mt30">
            <PropertyGallery id={params.id} />
          </div>
          {/* End .row */}

          <div className="d-flex justify-content-space-between mt30 w100">
            <OverView id={params.id} />
          </div>

          {/* End .row */}
        </div>
      </section>
      {/* <!-- End Property Singe Top --> */}

      {/* Property All Single V7 */}
      <section className="pt60 pb90 bgc-white">
        <div className="container">
          <div className="row wrap">
            <div className="col-lg-8">
              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Property Description</h4>
                <ProperytyDescriptions />
                {/* End property description */}

                <h4 className="title fz17 mb30 mt50">
                  {" "}
                  <a
                    href="# active"
                    style={{
                      marginRight: "15px",
                      borderBottom: "1px solid blue",
                      color: "blue",
                    }}
                  >
                    1800 Sqft.
                  </a>
                  <a href="# active">1600 Sqft.</a>
                </h4>
                <div
                  className="row"
                  style={{
                    boxShadow: "0px 8px 8px -3px rgba(0, 0, 0, 0.25)",
                    padding: "20px 10px",
                  }}
                >
                  <PropertyDetails />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Features &amp; Amenities</h4>
                <div
                  className="row"
                  style={{
                    boxShadow: "0px 8px 8px -3px rgba(0, 0, 0, 0.25)",
                    padding: "20px 10px",
                  }}
                >
                  <PropertyFeaturesAminites />
                </div>
              </div>

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30 mt30">
                  Explore Neighbourhood- Map view
                </h4>
                <div
                  style={{
                    border: "1px solid gray",
                    padding: "5px",
                    width: "fit-content",
                    boxSizing: "borderBox",
                  }}
                >
                  <span style={{ fontFamily: "outfit", fontWeight: "bold" }}>
                    Travel Time
                  </span>
                  <input
                    style={{
                      border: "none",
                      borderBottom: "1px solid gray",
                      outline: "none",
                    }}
                  />
                </div>
                <div className="row">
                  <PropertyAddress />
                </div>
              </div>
              {/* End .ps-widget */}

              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Energy Class</h4>
                <div className="row">
                  <EnergyClass />
                </div>
              </div> */}
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30  overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Floor Plans</h4>
                <div className="row">
                  <div className="col-md-12">
                    <div className="accordion-style1 style2">
                      <FloorPlans />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 ">
                <h4 className="title fz17 mb30">Video</h4>
                <div className="row">
                  <PropertyVideo />
                </div>
              </div> */}
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">360° Virtual Tour</h4>
                <div className="row">
                  <VirtualTour360 />
                </div>
              </div> */}
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">What&apos;s Nearby?</h4>
                <div className="row">
                  <PropertyNearby />
                </div>
              </div> */}
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Walkscore</h4>
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="fw400 mb20">
                      10425 Tabor St Los Angeles CA 90034 USA
                    </h4>
                    <WalkScore />
                  </div>
                </div>
              </div> */}
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p60 pl30 mb30 overflow-hidden position-relative">
              <h4 className="title fz17 mb10">Brochure</h4>
              <p>Download Brochure from here</p>
                <div className="row">
                  <DreamHouse />
                </div>
              </div> */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 pt0  mb30 overflow-hidden position-relative">
                  <h4 className="title fz17">Leave A Review</h4>
                  <div className="row">
                    <ReviewBoxForm />
                  </div>
                </div> */}
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <div className="row">
                  <PropertyViews />
                </div>
              </div> */}
              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
    
          </div> */}
              {/* End .ps-widget */}
              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p60 mb30 overflow-hidden position-relative">
                <div className="row">
                  <DreamHouse />
                </div>
              </div> */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Home Value</h4>
                <div className="row" >
                  <HomeValueChart />
                </div>
              </div> */}
              {/* End .ps-widget */}

              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Get More Information</h4>
                <InfoWithForm />
              </div> */}
              {/* End .ps-widget */}

              {/* End .ps-widget */}

              {/* End .ps-widget */}
            </div>
            {/* End .col-8 */}

            <div className="col-lg-4">
              <div className="column">
                <div
                  className="default-box-shadow1 bdrs12 bdr1 p30  mb30-md bgc-white position-relative"
                  style={{ backgroundColor: "blue" }}
                >
                  <h4 className="form-title mb5" style={{ color: "white" }}>
                    Schedule a tour
                  </h4>
                  <p className="text" style={{ color: "white" }}>
                    Choose your preferred day
                  </p>
                  <ScheduleTour />
                </div>
                {/* End .Schedule a tour */}

                <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs12 p30">
                  <div
                    className="widget-wrapper p20 mb-0"
                    style={{
                      boxShadow: "0px 8px 8px -3px rgba(0, 0, 0, 0.25)",
                      padding: "20px 10px",
                      borderRadius: "15px",
                    }}
                  >
                    <h6 className="title fz17 mb30">Get More Information</h6>
                    <ContactWithAgent />
                  </div>
                </div>

                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 pt30 pl30  overflow-hidden position-relative">
                  <div className="row">
                    {/* <AllComments /> */}
                    <AllReviews />
                  </div>
                </div>

                {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Home Loan Calculator</h4>
                <div className="row">
                  <MortgageCalculator />
                </div>
              </div> */}

                {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 pt0  mb30 overflow-hidden position-relative">
                  <h4 className="title fz17">Leave A Review</h4>
                  <div className="row">
                    <ReviewBoxForm />
                  </div>
                </div> */}

                {/* <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs12">
                  <div className="widget-wrapper mb-0">
                    <DreamHouse />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* End .row */}
          <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
            <div className="row">
              <div className="col-lg-12">
                <PropertyViews />
              </div>
            </div>
          </div>
          <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb30">Floor Plans</h4>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="accordion-style1 style2">
                        <FloorPlans />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb30">Home Loan Calculator</h4>
                  <div className="row">
                    <MortgageCalculator />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div className="ps-widget bgc-white bdrs12 default-box-shadow2  mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb10">Brochure</h4>
                  <p>Download Brochure from here</p>
                  <div className="row">
                    <DreamHouse />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ps-widget bgc-white bdrs12 default-box-shadow2  mb30 overflow-hidden position-relative">
                  <h4 className="title fz17">Leave A Review</h4>
                  <div className="row">
                    <ReviewBoxForm />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt30 align-items-center justify-content-between">
            <div className="col-auto">
              <div className="main-title">
                <h2 className="title">Home Loan Property</h2>
                {/* <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p> */}
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  {/* <button className="featured-prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button> */}
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination featured-pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  {/* <button className="featured-next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button> */}
                </div>
                {/* End Next */}
              </div>
              {/* End .col for navigation and pagination */}
            </div>
            {/* End .col for navigation and pagination */}
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="property-city-slider">
                <LoanLogoSlider />
              </div>
            </div>
          </div>

          <div className="row mt30 align-items-center justify-content-between">
            <div className="col-auto">
              <div className="main-title">
                <h2 className="title">Featured Property</h2>
                {/* <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p> */}
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="featured-prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination featured-pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="featured-next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
              {/* End .col for navigation and pagination */}
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div className="property-city-slider">
                <NearbySimilarProperty />
              </div>
            </div>
          </div>

          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Property All Single V7  */}

      <Cta2 />

      {/* Start Our Footer */}
      <section className="footer-style1 pt120 pb-0 mt60">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default SingleV7;
