// import React from "react";
import listings from "@/data/listings";

const iconMap = {
  'flaticon-bed': '\ue000',
  'flaticon-shower': '\ue001',
  'flaticon-event': '\ue002',
  // Add more icon mappings as needed
};

const OverView = ({ id }) => {
  const data = listings.filter((elm) => elm.id === id)[0] || listings[0];
  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Property Type",
      value: data.bed,
    },
    {
      icon: "flaticon-shower",
      label: "Property status",
      value: data.bath,
    },
    {
      icon: "flaticon-event",
      label: "Property configuration",
      value: data.yearBuilding,
    },
  ];

  return (
    <div className="d-flex flex-column flex-lg-row w-100 justify-content-between align-items-start align-items-lg-center mb-4">
      <div className="d-flex flex-wrap mb-3 mb-lg-0">
        {overviewData.map((item, index) => (
          <div
            key={index}
            className="d-flex align-items-center mr-4 mb-3"
            style={{ minWidth: "200px" }}
          >
            <span
              className={`icon ${item.icon} mr-2`}
              style={{
                width: "40px",
                height: "40px",
                color: "white",
                fontSize: "20px",
                border: "1px solid white",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight:'10px'
              }}
            />
            <div>
              <h6 className="mb-0 text-white">{item.label}</h6>
              <p className="text mb-0 fz15 text-white">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex flex-column align-items-end">
        <div className="d-flex align-items-center mb-3 gap-1">
          <a
            className="icon mr-2"
            href="#"
            style={{
              width: "40px",
              height: "40px",
              color: "white",
              fontSize: "20px",
              border: "1px solid white",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="flaticon-like" />
          </a>
          <a
            className="icon mr-2"
            href="#"
            style={{
              width: "40px",
              height: "40px",
              color: "white",
              fontSize: "20px",
              border: "1px solid white",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="flaticon-new-tab" />
          </a>
          <a
            className="icon mr-2"
            href="#"
            style={{
              width: "40px",
              height: "40px",
              color: "white",
              fontSize: "20px",
              border: "1px solid white",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="flaticon-share-1" />
          </a>
          <a
            className="icon"
            href="#"
            style={{
              width: "40px",
              height: "40px",
              color: "white",
              fontSize: "20px",
              border: "1px solid white",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="flaticon-printer" />
          </a>
        </div>

        <div className="d-flex align-items-center gap-1">
        <a
  className="icon mr-2"
  href="#"
  style={{
    width: "40px",
    height: "40px",
    color: "#ffd800", // Change the color here
    fontSize: "20px",
    // border: "1px solid #ffd800", 
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <span style={{ fontFamily: 'Flaticon', fontSize: '20px' }}>
    {iconMap['flaticon-bed']}
    <i className="fi fi-rr-star"></i>
  </span>
  <img src='/favicon_star.png' style={{ width: '30px', height: '30px', color: 'white' }} alt="Star Icon" />
  
</a>

          <a
            className="icon mr-2"
            href="#"
            style={{
              width: "40px",
              height: "40px",
              color: "#ffd800", // Change the color here
              fontSize: "20px",
              // border: "1px solid #ffd800", // Change the color here
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="flaticon-star-fill" />
            <img src='/favicon_star.png' style={{ width: '30px', height: '30px', color: 'white' }} alt="Star Icon" />

          </a>
          <a
            className="icon mr-2"
            href="#"
            style={{
              width: "40px",
              height: "40px",
              color: "#ffd800", // Change the color here
              fontSize: "20px",
              // border: "1px solid #ffd800", // Change the color here
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="flaticon-star-fill" />
            <img src='/favicon_star.png' style={{ width: '30px', height: '30px', color: 'white' }} alt="Star Icon" />

          </a>
          <a
            className="icon mr-2"
            href="#"
            style={{
              width: "40px",
              height: "40px",
              color: "#ffd800", // Change the color here
              fontSize: "20px",
              // border: "1px solid #ffd800", // Change the color here
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="flaticon-star-fill" />
            <img src='/favicon_star.png' style={{ width: '30px', height: '30px', color: 'white' }} alt="Star Icon" />

          </a>
          <a
            className="icon"
            href="#"
            style={{
              width: "40px",
              height: "40px",
              color: "#ffd800", // Change the color here
              fontSize: "20px",
              // border: "1px solid #ffd800", // Change the color here
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="flaticon-star-fill" />
            <img src='/favicon_star.png' style={{ width: '30px', height: '30px', color: 'white' }} alt="Star Icon" />

          </a>
        </div>
      </div>
    </div>
  );
};

export default OverView;