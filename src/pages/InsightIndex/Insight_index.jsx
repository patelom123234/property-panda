import Cities from "../../components/insights/Cities";
import DemistryModel from "../../components/insights/DemistryModel";
import Footer from "../../components/insights/Footer";
import Header from "../../components/insights/Header";
import Insights from "../../components/insights/Insights";
import InvestmentDivs from "../../components/insights/InvestmentDivs";
import Newslatter from "../../components/insights/Newsletter";
import SearchRelated from "../../components/insights/SearchRelated";
import TopSellingPlace from "../../components/insights/TopSellingPlace";

function Insight_index() {
    return (
        <> 
          <Header />
           <Cities heading="Cities" subheading="Unlocking Real Estate Potential in Every Neighborhood" />
          <DemistryModel />
          <TopSellingPlace heading="Top Localities" subHeading="Across India with highest apperciation" />
          <InvestmentDivs heading="Unlock Your Investment Potential" subheading="Find Your Perfect Place & Smart Investments"/>
          <Insights />
          <SearchRelated />
          <Newslatter />
          <Footer /> 
        </>
      );
}

export default Insight_index;

