// import ahmedabad from "../../src/assets/ahmedabad.png";
import ahmedabad from "../../assets/ahmedabad.png";
import styles from "./InvestmentDivs.module.css";
import PropTypes from "prop-types";


function InvestmentDivs({heading, subheading}) {
  return (
    <div className={styles.investment_full}> 
    <div className={styles.investment_container}>
      <InvestmentHeading heading={heading} subheading={subheading}/>
      
      <div className={styles.investment_divs}>

        <div className={styles.for_buyers}>
          <img src={ahmedabad} alt="logo" className={styles.img_single} />
          <h2>For Buyers</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, voluptas laborum quas quae quos
            voluptates dolorum quibusdam, quia, voluptas laborum quas quae quos
            voluptates dolorum
          </p>
        </div>

        <div className={styles.for_investors}>
          <img src={ahmedabad} alt="logo" className={styles.img_single} />
          <h2>For Investors</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, voluptas laborum quas quae quos
            voluptates dolorum quibusdam, quia, voluptas laborum quas quae quos
            voluptates dolorum
          </p>
        </div>

        <div className={styles.for_builders}>
          <img src={ahmedabad} alt="logo" className={styles.img_single} />
          <h2>For Builders</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, voluptas laborum quas quae quos
            voluptates dolorum quibusdam, quia, voluptas laborum quas quae quos
            voluptates dolorum
          </p>
        </div>

      </div>
    </div>
    </div>
  );
}


function InvestmentHeading({heading, subheading}) {
  return (
    <div  className={styles.investment_header}><h2 className={styles.investment_heading}>{heading}</h2>
  <p className={styles.investment_paragraph}>{subheading}</p>
</div>
  );
}

InvestmentHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
};
InvestmentDivs.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
};


export default InvestmentDivs;
export {InvestmentHeading};
