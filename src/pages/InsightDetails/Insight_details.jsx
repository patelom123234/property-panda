import Cities from "../../components/insights/Cities";
// // import DemistryModel from "../components/DemistryModel";
import Footer from "../../components/insights/Footer";
import Header from "../../components/insights/Header";
import HotSelling from "../../components/insights/HotSelling";
import React from 'react';
// import Insights from "../components/Insights";
// // import InvestmentDivs from "../components/InvestmentDivs";
import Neighborhoods from "../../components/insights/Neighborhoods";
// import SearchRelated from "../components/SearchRelated";
import TopLocalities from "../../components/insights/TopLocalities";
import TopSellingPlace from "../../components/insights/TopSellingPlace";
// import { Container } from 'react-bootstrap';
import TopBuilders from "../../components/insights/TopBuilders";

function Insight_details() {
    return (
        <React.Fragment>
            {/* <Container> */}

          <Header />
           <Cities heading="Sub areas" subheading="Unlocking Real Estate Potential in Every Neighborhood" />
          <Neighborhoods/>  
          <TopSellingPlace isDetails={true}  heading="City Average Price / sq, yd" subHeading="Unlocking Real Estate Potential in Every Neighborhood"/>
          <TopBuilders/>
          <TopLocalities/>
          <HotSelling/>
          {/* <Insights />
         */}

          <Footer />  
          {/* </Container> */}

        </React.Fragment>
      );
}

export default Insight_details;
