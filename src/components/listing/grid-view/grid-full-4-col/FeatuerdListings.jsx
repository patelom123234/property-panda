import React from "react";
import { Link } from "react-router-dom";

const FeaturedListings = ({ data, colstyle }) => {
  return (
    <>
      {data.map((listing, index) => (
        <React.Fragment key={listing.id}>
          <div
            className={`${
              colstyle ? "col-sm-6 col-lg-4 col-xl-3" : "col-sm-12 col-lg-6"
            }`}
          >
            <div
              className={`${
                colstyle
                  ? "listing-style1"
                  : "listing-style1 listCustom listing-type"
              }`}
            >
              <div className="list-thumb">
                <img
                  style={{ height: "170px" }}
                  className="w-100 cover"
                  src={listing.image}
                  alt="listings"
                />
                <div className="sale-sticker-wrap">
                  {!listing.forRent && (
                    <div className="list-tag fz12">
                      <span className="flaticon-electricity me-2" /> FEATURED
                    </div>
                  )}
                </div>
                <div className="list-price">
                  {listing.price} / <span>mo</span>
                </div>
              </div>
              <div className="list-content">
                <h6 className="list-title">
                  <Link to={`/single-v7/${listing.id}`}>{listing.title}</Link>
                </h6>
                <p className="list-text">{listing.location}</p>
                <div className="list-meta d-flex align-items-center">
                  <a href="#">
                    <span className="flaticon-bed" /> {listing.bed} bed
                  </a>
                  <a href="#">
                    <span className="flaticon-shower" /> {listing.bath} bath
                  </a>
                  <a href="#">
                    <span className="flaticon-expand" /> {listing.sqft} sqft
                  </a>
                </div>
                <hr className="mt-2 mb-2" />
                <div className="list-meta2 d-flex justify-content-between align-items-center">
                  <span className="for-what">For Rent</span>
                  <div className="icons d-flex align-items-center">
                    <a href="#">
                      <span className="flaticon-fullscreen" />
                    </a>
                    <a href="#">
                      <span className="flaticon-new-tab" />
                    </a>
                    <a href="#">
                      <span className="flaticon-like" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {(index + 1) % 10 === 0 && (
            <hr
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "gray",
              }}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default FeaturedListings;
