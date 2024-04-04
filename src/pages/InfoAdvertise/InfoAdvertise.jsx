// import { useState } from 'react';
// import styles from './InfoAdvertise.module.css';

import SecondStep from "@/components/PostYourProperty/SecondStep";
import ThirdStep from "@/components/PostYourProperty/ThirdStep";
// import StepProgressBar from '@/components/PostYourProperty/StepProgressBar';
import FirstStep from "@/components/PostYourProperty/FirstStep";
// export default function InfoAdvertise() {
//   const [FSData, setFSData] = useState({});
//   const [SSData, setSSData] = useState({});
//   const [step , setStep] = useState(1);

//   const FS_data = FSData && {
//     selectedRole: FSData.selectedRole,
//     selectedInterest: FSData.selectedInterest,
//     name: FSData.name,
//     whatsappNumber: FSData.whatsappNumber,
//     email: FSData.email,
//   };

//   const SS_data = SSData && {
//     selectedRole : SSData.selectedRole,
//     selectedInterest : SSData.selectedInterest,
//     houseSize : SSData.houseSize,
//     possession : SSData.possession,
//     name : SSData.name,
//     ProjectCity : SSData.ProjectCity,
//     subCity : SSData.subCity,
//     address : SSData.address,
//   }

//       return (
//         <div className={styles.advertise_container}>

//         <div className={styles.infoAdvertise_div}>
//         {step===1 && <FirstStep step={step} setStep={setStep} FSData={FSData} setFSData={setFSData}/>}
//         {step===2 && <SecondStep step={step} setStep={setStep} FSselectedInerest={FS_data.selectedInterest} setSSData={setSSData}/>}
//         {step===3 && <ThirdStep  step={step} setStep={setStep} SSselectedInteres={SS_data.selectedInterest}/>}
//         </div>
//         <StepProgressBar step={step}/>

//         </div>
//       );
// }

// InfoAdvertise.jsx
// import React, { useState,useEffect  } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
// import FirstStep from '../components/FirstStep';
// import SecondStep from '../components/SecondStep';
// import ThirdStep from '../components/ThirdStep';
// // import StepProgressBar from '../components/StepProgressBar';
// import styles from './InfoAdvertise.module.css';

// const InfoAdvertise = () => {
//   const navigate = useNavigate();
//   const [FSData, setFSData] = useState({});
//   const [SSData, setSSData] = useState({});
//   const [step, setStep] = useState(1);

//   console.log(step);

//   const FS_data = FSData && {
//     selectedRole: FSData.selectedRole,
//     selectedInterest: FSData.selectedInterest,
//     name: FSData.name,
//     whatsappNumber: FSData.whatsappNumber,
//     email: FSData.email,
//   };

//   const SS_data = SSData && {
//     selectedRole: SSData.selectedRole,
//     selectedInterest: SSData.selectedInterest,
//     houseSize: SSData.houseSize,
//     possession: SSData.possession,
//     name: SSData.name,
//     ProjectCity: SSData.ProjectCity,
//     subCity: SSData.subCity,
//     address: SSData.address,
//   };

//   useEffect(() => {
//     // Extract step value from the current URL path
//     const currentPath = window.location.pathname;
//     const stepFromPath = parseInt(currentPath.split('/').pop(), 10);

//     if (!isNaN(stepFromPath) && stepFromPath >= 1 && stepFromPath <= 3) {
//       setStep(stepFromPath);
//     } else {
//       // If the step value in the URL is invalid, navigate to step 1
//       navigate('/info-advertise/step1');
//     }
//   }, [navigate]);

//   return (
//     <div className={styles.advertise_container}>
//       <div className={styles.infoAdvertise_div}>
//         <Routes>
//           <Route path="/step1" element={<FirstStep step={step} setStep={setStep} FSData={FSData} setFSData={setFSData} />} />
//           <Route
//             path="/info-advertise/step2"
//             element={<SecondStep step={step} setStep={setStep} FSselectedInterest={FS_data.selectedInterest} setSSData={setSSData} />}
//           />
//           <Route path="/info-advertise/step3" element={<ThirdStep step={step} setStep={setStep} SSselectedInterest={SS_data.selectedInterest} />} />
//           <Route path="/info-advertise" element={<Navigate to="/info-advertise/step1" />} />
//         </Routes>
//       </div>
//       <StepProgressBar step={step} />
//     </div>
//   );
// };

// export default InfoAdvertise;

import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import FirstStep from './FirstStep';
// import SecondStep from './SecondStep';
// import ThirdStep from './ThirdStep';
import styles from "./InfoAdvertise.module.css";
import Footer from "@/components/common/default-footer";
import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";

const InfoAdvertise = () => {
  const [step, setStep] = useState(1);
  const [FSData, setFSData] = useState({});
  const [SSData, setSSData] = useState({});
  const navigate = useNavigate();

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      navigate("/info-advertise/step1");
    } else if (step === 3) {
      setStep(2);
      navigate("/info-advertise/step2");
    }
  };

  return (
    <>
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      <div className={styles.advertise_container}>
        <div
          className="container"
          style={{
            overflow: "hidden",
            overflowY: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            scrollbarColor: "transparent transparent",
          }}
        >
          <div className={styles.infoAdvertise_div}>
            <Routes>
              <Route
                path="step1"
                element={
                  <FirstStep
                    setStep={setStep}
                    step={step}
                    FSData={FSData}
                    setFSData={setFSData}
                  />
                }
              />
              <Route
                path="step2"
                element={
                  <SecondStep
                    setStep={setStep}
                    step={step}
                    FSselectedInerest={FSData.selectedInterest}
                    setSSData={setSSData}
                  />
                }
              />
              <Route path="step3" element={<ThirdStep />} />
            </Routes>
            <button
              onClick={handleBack}
              style={{
                background: "#EDEFFF",
                border: "none",
                cursor: "pointer",
                fontSize: "24px",
                boxSizing: "border-box",
              }}
            >
              &larr;
            </button>
          </div>
        </div>
      </div>

      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
    </>
  );
};

export default InfoAdvertise;
