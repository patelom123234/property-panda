import Styles from "./SearchRelated.module.css";
function SearchRelated() {
  return (
    <div className={Styles.search_container_full}>
    <div className={Styles.search_container}>
      <h2>Related to your search</h2>
      <div className={Styles.p_container}>
        <div className={Styles.p_insight}>
          <h3>Property Insight</h3>
          <p>Price p_trends</p>
          <p>locality</p>
          <p>BHK Wise</p>
          <p>Avg Price</p>
          <p>Tools</p>
          <p>Localities Ahmedabad</p>
          <p>Property Rates in Ahmedabad</p>
        </div>
        <div className={Styles.p_localities}>
          <h3>Popular Localities in Ahmedabad</h3>
          <p>Gota</p>
          <p>Chandkheda</p>
          <p>South Bopal</p>
          <p>Thaltej</p>
          <p>Shela</p>
          <p>SG Highway</p>
        </div>                                                  
        <div className={Styles.p_trends}>
          <h3>Popular Trends in Ahmedabad</h3>
          <p>Price Trends in Bopal</p>
          <p>locality</p>
          
        </div>
      </div>
      </div>
    </div>
  );
}

export default SearchRelated;
