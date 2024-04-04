// import styles from "./Header.module.css";
import styles from "./Header.module.css";
import PropTypes from "prop-types";
import Asset from "/Asset.png"; // Adjust the path as needed
import { useLocation ,Link } from "react-router-dom";
// import { Link } from "react-roouter";

PropertyButton.propTypes = {
  children: PropTypes.node.isRequired,
};

function Header() {
  const location = useLocation();
  const isDetailPage = location.pathname.includes('/detail');

  return (
    <div className={styles.header_full}>

    <div className={styles.header}>
      <div className={styles.header_container}>
        <Logo />
        <PropertyHeading />
        <div className={styles.ps_container}> 
        <PropertyButton>Post Property</PropertyButton>
        {!isDetailPage ? <SideBarButton /> : ""}
        </div>
      </div>
        <div className={styles.insight_heading_container}>
          <p className={styles.insight_heading} style={{color:'white'}}>
            {isDetailPage ? "" : "Insight to turn your property dream into insight"}
          </p>
        </div>
        {isDetailPage ? <SearchBarDetails /> : <SearchBar />}
      </div>
    </div>
  );
}

function PropertyHeading() {
  return (
    <div className={styles.nav_links}>
      <p className={styles.nav_links_p} style={{color:'white'}}>Location</p>
      <p className={styles.nav_links_p} style={{color:'white'}}>For Buyers</p>
      <p className={styles.nav_links_p} style={{color:'white'}}>For Owner</p>
      <p className={styles.nav_links_p} style={{color:'white'}}>For Tenants</p>
      <p className={styles.nav_links_p} style={{color:'white'}}>Home Loan</p>
      <p className={styles.nav_links_p} style={{color:'white'}}>Tools</p>
    </div>
  );
}

function Logo() {
  return (
    <div className={styles.logo_img}>
      <Link to="/"><img src={Asset} alt="logo" className={styles.img_logo} /></Link>
    </div>
  );
}

function SideBarButton() {
  return <a className={styles.dash_button}>&#9776;</a>;
}

// Change Property_Button to PropertyButton for consistency and naming convention
function PropertyButton({ children }) {
  return <button className={styles.property_button}>{children}</button>;
}

function SearchBar() {
  return (
    <div className={styles.search_bar}>
      <input type="text" placeholder="Enter city, Locality, Project" />
      <button type="submit"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.6736 20.7495L18.9998 16.0766C18.7889 15.8656 18.5029 15.7485 18.2029 15.7485H17.4388C18.7326 14.0939 19.5014 12.0129 19.5014 9.74905C19.5014 4.36364 15.137 0 9.75071 0C4.36438 0 0 4.36364 0 9.74905C0 15.1345 4.36438 19.4981 9.75071 19.4981C12.0149 19.4981 14.0963 18.7294 15.7512 17.4358V18.1998C15.7512 18.4998 15.8683 18.7857 16.0793 18.9966L20.7531 23.6696C21.1937 24.1101 21.9063 24.1101 22.3423 23.6696L23.6689 22.3431C24.1096 21.9025 24.1096 21.1901 23.6736 20.7495ZM9.75071 15.7485C6.43641 15.7485 3.75027 13.0675 3.75027 9.74905C3.75027 6.43531 6.43172 3.74963 9.75071 3.74963C13.065 3.74963 15.7512 6.43062 15.7512 9.74905C15.7512 13.0628 13.0697 15.7485 9.75071 15.7485Z" fill="white"/>
</svg>
</button>
    </div>
  );
}

function SearchBarDetails(){
  return (
    <div className={styles.search_bar}>
      <input type="text" placeholder="Enter city, Locality, Project" />
      <input type="text" placeholder="property type"/>
      <input type="text" placeholder="Budget"/>
      <button type="submit"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.6736 20.7495L18.9998 16.0766C18.7889 15.8656 18.5029 15.7485 18.2029 15.7485H17.4388C18.7326 14.0939 19.5014 12.0129 19.5014 9.74905C19.5014 4.36364 15.137 0 9.75071 0C4.36438 0 0 4.36364 0 9.74905C0 15.1345 4.36438 19.4981 9.75071 19.4981C12.0149 19.4981 14.0963 18.7294 15.7512 17.4358V18.1998C15.7512 18.4998 15.8683 18.7857 16.0793 18.9966L20.7531 23.6696C21.1937 24.1101 21.9063 24.1101 22.3423 23.6696L23.6689 22.3431C24.1096 21.9025 24.1096 21.1901 23.6736 20.7495ZM9.75071 15.7485C6.43641 15.7485 3.75027 13.0675 3.75027 9.74905C3.75027 6.43531 6.43172 3.74963 9.75071 3.74963C13.065 3.74963 15.7512 6.43062 15.7512 9.74905C15.7512 13.0628 13.0697 15.7485 9.75071 15.7485Z" fill="white"/>
      </svg>
      </button>
    </div>
  );
}

export default Header;
export {SearchBarDetails};
