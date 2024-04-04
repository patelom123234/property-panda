import React from "react";

const PropertyDetails = () => {
  const columns = [
    [
      {
        label: "Balconies",
        value: "1",
      },
      {
        label: "Super Built-up Area",
        value: "2100",
      },
      {
        label: "No. of Floor",
        value: "7",
      },
      {
        label: "No. of Blocks",
        value: "2",
      },
      {
        label: "Other Rooms",
        value: "Store Room",
      },
      
    ],
    [
      {
        label: "Furnishing",
        value: "Unfurnished",
      },
      {
        label: "Status",
        value: "Under Construction",
      },
      {
        label: "Balconies",
        value: "3",
      },
      {
        label: "Bathroom",
        value: "3",
      },
      {
        label: "Area",
        value: "205 Sqyrd",
      },
    ],
  ];

  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`col-md-6 col-xl-4${
            columnIndex === 1 ? " offset-xl-2" : ""
          }`}
        >
          {column.map((detail, index) => (
            <div key={index} className="d-flex justify-content-between">
              <div className="pd-list">
                <p className="fw600 mb10 ff-heading dark-color">
                  {detail.label}
                </p>
              </div>
              <div className="pd-list">
                <p className="text mb10">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
