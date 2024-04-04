import React from "react";

const PropertyAddress = () => {
  const addresses = [
    {
      address: "10425 Tabor St",
      city: "Los Angeles",
      state: "California",
      zipCode: "90034",
      area: "Brookside",
      country: "United States",
    },
    {
      address: "10 Downing Street",
      city: "London",
      state: "Greater London",
      zipCode: "SW1A 2AA",
      area: "Westminster",
      country: "United Kingdom",
    },
  ];

  const buttons = [
    { icon: "fa-map-marker-alt", text: "Commute" },
    { icon: "fa-bus", text: "Transit" },
    { icon: "fa-shopping-cart", text: "Shopping" },
    { icon: "fa-utensils", text: "Dining" },
    { icon: "fa-hospital", text: "Hospital" },
    { icon: "fa-school", text: "School" },
  ];

  return (
    <>
      <div className="row">
        {/* Map */}
        <div className="col-md-12">
          <iframe
            className="position-relative bdrs12 mt30"
            loading="lazy"
            src={`https://maps.google.com/maps?q=${addresses[0].address}&t=m&z=14&output=embed&iwloc=near`}
            title={addresses[0].address}
            aria-label={addresses[0].address}
            style={{ height: "500px" }}
          />
        </div>
        {/* End Map */}

        {/* Button */}
        <div className="row text-center">
          {buttons.map((button, index) => (
            <div
              key={index}
              className="col-4 col-md-2 d-flex justify-content-center mb-3"
            >
              <button
                className="btn btn-rounded"
                style={{
                  backgroundColor: "white",
                  borderRadius: "100%",
                  width: "60px",
                  height: "60px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
                  fontSize: "1.2rem",
                }}
              >
              
                <span className="d-flex flex-column align-items-center">
                  <i className={`fas ${button.icon}`}></i>
                  <span style={{ fontSize: "0.6rem" }}>{button.text}</span>
                </span>
              </button>
            </div>
          ))}
        </div>
        {/* End Button */}
      </div>
    </>
  );
};

export default PropertyAddress;