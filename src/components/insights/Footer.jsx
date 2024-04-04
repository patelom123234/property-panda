import Styles from "./Footer.module.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

function FirstSection() {
  return (
    <div className={Styles.first_footer_full}>

    <div className={Styles.first_container}>
      <div className={Styles.all_divs}>
      <div className={Styles.p_panda}>
        <h2 style={{color:'white'}}>Property Panda</h2>
        <p>Mobile Apps</p>
        <p>Our Service</p>
        <p>Price Trends</p>
        <p>Post Your Property</p>
        <p>Site Map</p>
        <p>Agent</p>
        <p>Customer Service</p>
      </div>
      <div className={Styles.p_company}>
        <h2 style={{color:'white'}}>Company</h2>
        <p>About Us</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Site Map</p>
        <p>Agent</p>
        <p>Customer Service</p>
        <p>Feedback</p>
        <p>Report a Problem</p>
        <p>Grievances</p>
        <p>Safety Guides</p>
      </div>
      <div className={Styles.p_contact}>
        <h2 style={{color:'white'}}>Contact Us</h2>
        <p>Registered Office Address</p>
        <p>Property Panda</p>
        <p>Office No. 1, 2nd Floor, </p>
        <p>Shree Krishna Center, </p>
        <p>Mithakhali Six Roads, </p>
        <p>
          tel:+917947923500 Monday - Saturday 10:00 am - 6:00 pm
          tel:+917575081000
        </p>
      </div>
      </div>
    </div>
  </div>
  );
}

function SecondSection() {
  return (
    <div className={Styles.second_footer_full}>
    <div className={Styles.second_container}>
      <p>
        Yassir Property Holdings Pvt Ltd, which operates the website
        propertypanda.com, is an intermediary that provides a platform for
        advertising properties by sellers to customers, buyers and users
        visiting the website. The company is not and cannot be held responsible
        for or involved in any transactions that occur between the sellers and
        the customers/buyers/users. All offers and discounts featured on the
        website are provided by various builders and developers who have
        advertised their products. propertypanda.com is only conveying these
        offers and is not selling or providing any of these products or
        services. It is important to note that propertypanda.com
        propertypanda.com does not make any representations or warranties about
        the offers displayed on the website. In the event of any disputes or
        disagreements that may arise between the customers/buyers/users and the
        sellers, propertypanda.com shall not be liable or responsible for
        mediating or resolving such disputes. The parties involved in the
        dispute shall be responsible for settling it amongst themselves, without
        involving propertypanda.com in any way.
      </p>
    </div>
    </div>
  );
}

function ThirdSection() {
  return (
    <div className={Styles.third_footer_full}>
    <div className={Styles.third_section}>
    <div className={Styles.third_container}>
      <div>
        <p style={{color:'white'}}>All rights reserved - Yassir Property Holdings PVT.LTD</p>
      </div>
      <div className={Styles.p_terms_conditions}>
        <p style={{color:'white'}}>Terms & Condition</p>
        <p style={{color:'white'}}> Claims</p>
        <p style={{color:'white'}}> Privacy policy</p>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
