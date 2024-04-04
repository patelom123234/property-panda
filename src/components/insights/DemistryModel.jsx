// DemistryModel.js

import bigLogo from "../../assets/big-logo.png";
import R from "../../assets/R.png";
import styles from "./Demistry.module.css";

function DemistryModel() {
  return (
    <div className={styles.demistry_div}>
      <DemistryHeading />
      <div className={styles.demistry_container}>
      <img src={bigLogo} alt="demistry" className={styles.big_logo} />
      <img src={R} alt="R" className={styles.R_logo} />
      </div>
      <div className={styles.sub_div}></div>     
    </div>
  );
}

function DemistryHeading() {
  return (
    <div className={styles.demistry_heading}>
      <h2 className={styles.demistry_main_heading}>Demystifying Market</h2>
      <p className={styles.demistry_main_paragraph}>
        lorem ipsum dolor sit amet, consectetur
        <br />
        sed do eiusmod tempor
      </p>
    </div>
  );
}

export default DemistryModel;
