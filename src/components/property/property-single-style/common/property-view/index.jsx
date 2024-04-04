import React from "react";
import PropertyPriceChart from "./PropetyPriceChart";
// import WeeklyLineChart from "./WeeklyLineChart";

const PropertyViews = () => {
  return (
    <div className="col-md-12">
      <div className="navtab-style1">
        <div className="d-sm-flex align-items-center justify-content-between">
          <h4 className="title fz17 mb20">Property Views</h4>
        </div>
        {/* End nav-tabs */}

        <div className="tab-content" id="myTabContent2">
          {/* <div
            className="tab-pane fade show active"
            id="hourly"
            role="tabpanel"
            aria-labelledby="hourly-tab"
            style={{ height: "500px", maxHeight: "100%" }}
          >
            <HoursBarChart />
          </div> */}
          {/* End tab-pane */}

          <div
            className="tab-pane fade w-100 show active"
            id="weekly"
            role="tabpanel"
            aria-labelledby="weekly-tab"
            // style={{ height: "600px" }}
          >
            <div className="chart-container">
              {/* <WeeklyLineChart /> */}
              <PropertyPriceChart/>
            </div>
          </div>
          {/* End tab-pane */}

          {/* <div
            className="tab-pane fade"
            id="monthly"
            role="tabpanel"
            aria-labelledby="monthly-tab"
            style={{ height: "500px", maxHeight: "100%"}}
          >
            <MonthlyPieChart />
          </div> */}
          {/* End tab-pane */}
        </div>
      </div>
    </div>
  );
};

export default PropertyViews;
