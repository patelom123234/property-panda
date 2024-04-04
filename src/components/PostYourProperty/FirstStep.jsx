
// import { useState } from 'react';
// import ToggleButtons from './ToggleButtons'; // Assuming you have a ToggleButtons component
// import styles from './FirstStep.module.css';
// import OTPBox from './Otpmenu';
// import InputField from './InputeField';
// import { useNavigate } from 'react-router-dom';

// // export default function FirstStep({ setStep, step, FSData ,setFSData}) {
// //   const navigate = useNavigate(); 

// //     const [selectedRole, setSelectedRole] = useState('Builder');
// //     const [selectedInterest, setSelectedInterest] = useState(() => {
// //       return selectedRole === 'Builder' ? 'Sell Project' : 'Rent';
// //     });
// //     const [name, setName] = useState('');
// //     const [whatsappNumber, setWhatsappNumber] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [otpPopupVisible, setOtpPopupVisible] = useState(false);


// //     const handleRoleChange = (value) => {
// //       setSelectedRole(value);
// //       setSelectedInterest(value === 'Builder' ? 'Sell Project' : 'Rent');
// //       setName('');
// //       setWhatsappNumber('');
// //       setEmail('');
// //     };

// //     const handleClearOtp = () => {
// //       setOtpPopupVisible(false);
// //     };

// //     const handleInterestChange = (value) => {
// //       setSelectedInterest(value);
// //     };
        
// //     const handleFormData = (e) => {
// //       e.preventDefault();
// //       const data = {
// //         selectedRole,
// //         selectedInterest,
// //         name,
// //         whatsappNumber,
// //         email,
// //       };
// //       setFSData(data);
// //       console.log('Form Data:', data);
// //       setOtpPopupVisible(true);
// //     };
    
// //     const handleOtpSubmit = (otp) => {
// //       console.log('OTP Submitted:', otp);
// //       setOtpPopupVisible(false);
// //       setStep((pre)=>pre+1);
// //       navigate('/info-advertise/step2');
    
// //     };
    
// //     return (
// //       <>
// //         {step === 1 && (
// //           <div className={styles.infoAdvertise_container}>
  
// //             <button
// //               style={{ background: '#EDEFFF', border: 'none', cursor: 'pointer', fontSize: '24px' }}
// //             >&larr;</button>
  
// //             <h3>Let's advertise your property on property panda</h3>
  
// //             <form onSubmit={handleFormData} className={styles.form_container}>
  
// //               <div style={{ marginTop: '20px' }}>
// //                 <p>Are you a builder or owner?</p>
// //                 <ToggleButtons
// //                   options={['Builder', 'Owner']}
// //                   onChange={handleRoleChange}
// //                   selected={selectedRole}
// //                 />
// //               </div>
  
// //               {selectedRole === 'Builder' && (
// //                 <div style={{ marginTop: '20px' }}>
// //                   <p>What is your interest?</p>
// //                   <ToggleButtons
// //                     options={['Sell Project', 'Rent', 'Resale', 'PG/Co-living']}
// //                     onChange={handleInterestChange}
// //                     selected={selectedInterest}
// //                   />
// //                 </div>
// //               )}
              
// //               {selectedRole === 'Owner' && (
// //                 <div style={{ marginTop: '20px' }}>
// //                   <p>What is your interest?</p>
// //                   <ToggleButtons
// //                     options={['Rent', 'Resale', 'PG/Co-living']}
// //                     onChange={handleInterestChange}
// //                     selected={selectedInterest}
// //                   />
// //                 </div>
// //               )}
  
// //               <InputField
// //                 label="Enter your name"
// //                 type="text"
// //                 id="name"
// //                 placeholder="Enter your name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //               />
  
// //               <InputField
// //                 label="WhatsApp Number"
// //                 type="text"
// //                 id="whatsapp"
// //                 placeholder="Enter your WhatsApp number"
// //                 value={whatsappNumber}
// //                 onChange={(e) => setWhatsappNumber(e.target.value)}
// //               />

// //               <InputField
// //                 label="Email Address"
// //                 type="email"
// //                 id="email"
// //                 placeholder="Enter your email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
  
// //               <button
// //                 type="submit"
// //                 style={{
// //                   marginTop: '30px',
// //                   border: 'none',
// //                   padding: '5px 10px',
// //                   borderRadius: '5px',
// //                   color: '#fff',
// //                   background: '#6d7bfd',
// //                   cursor: 'pointer',
// //                 }}
// //               >
// //                 Start Now
// //               </button>
  
// //             </form>
  
// //             {otpPopupVisible && (
// //               <div className={styles.otpPopup}>
// //                 <OTPBox onSubmit={handleOtpSubmit}  onClear={handleClearOtp} />
// //               </div>
// //             )}
  
// //           </div>
// //         )}
// //       </>
// //     );
// // }






// // import { useState } from 'react';
// // import ToggleButtons from './ToggleButtons';
// // import styles from './FirstStep.module.css';
// // import OTPBox from './Otpmenu';
// // import InputField from './InputeField';
// // import { useNavigate } from 'react-router-dom';

// export default function FirstStep({ setStep, step, FSData, setFSData }) {
//   const navigate = useNavigate();

//   const [selectedRole, setSelectedRole] = useState('Builder');
//   const [selectedInterest, setSelectedInterest] = useState(() => {
//     return selectedRole === 'Builder' ? 'Sell Project' : 'Rent';
//   });
//   const [name, setName] = useState('');
//   const [whatsappNumber, setWhatsappNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [otpPopupVisible, setOtpPopupVisible] = useState(false);

//   const handleRoleChange = (value) => {
//     setSelectedRole(value);
//     setSelectedInterest(value === 'Builder' ? 'Sell Project' : 'Rent');
//     setName('');
//     setWhatsappNumber('');
//     setEmail('');
//   };

//   const handleClearOtp = () => {
//     setOtpPopupVisible(false);
//   };

//   const handleInterestChange = (value) => {
//     setSelectedInterest(value);
//   };

//   const handleFormData = (e) => {
//     e.preventDefault();
//     const data = {
//       selectedRole,
//       selectedInterest,
//       name,
//       whatsappNumber,
//       email,
//     };
//     setFSData(data);
//     console.log('Form Data:', data);
//     setOtpPopupVisible(true);
//   };

//   const handleOtpSubmit = (otp) => {
//     console.log('OTP Submitted:', otp);
//     setOtpPopupVisible(false);
//     setStep(2);
//     navigate('/info-advertise/step2');
//   };

//   return (
//     <>
//       {step === 1 && (
//         <div className={styles.infoAdvertise_container}>
//           <h3>Let's advertise your property on property panda</h3>

//           <form onSubmit={handleFormData} className={styles.form_container}>
//             {/ ... (rest of the FirstStep component code) /}
//             <div style={{ marginTop: '20px' }}>
//                 <p>Are you a builder or owner?</p>
//                 <ToggleButtons
//                   options={['Builder', 'Owner']}
//                   onChange={handleRoleChange}
//                   selected={selectedRole}
//                 />
//               </div>
  
//               {selectedRole === 'Builder' && (
//                 <div style={{ marginTop: '20px' }}>
//                   <p>What is your interest?</p>
//                   <ToggleButtons
//                     options={['Sell Project', 'Rent', 'Resale', 'PG/Co-living']}
//                     onChange={handleInterestChange}
//                     selected={selectedInterest}
//                   />
//                 </div>
//               )}
              
//               {selectedRole === 'Owner' && (
//                 <div style={{ marginTop: '20px' }}>
//                   <p>What is your interest?</p>
//                   <ToggleButtons
//                     options={['Rent', 'Resale', 'PG/Co-living']}
//                     onChange={handleInterestChange}
//                     selected={selectedInterest}
//                   />
//                 </div>
//               )}
  
//               <InputField
//                 label="Enter your name"
//                 type="text"
//                 id="name"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
  
//               <InputField
//                 label="WhatsApp Number"
//                 type="text"
//                 id="whatsapp"
//                 placeholder="Enter your WhatsApp number"
//                 value={whatsappNumber}
//                 onChange={(e) => setWhatsappNumber(e.target.value)}
//               />

//               <InputField
//                 label="Email Address"
//                 type="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
  
//               <button
//                 type="submit"
//                 style={{
//                   marginTop: '30px',
//                   border: 'none',
//                   padding: '5px 10px',
//                   borderRadius: '5px',
//                   color: '#fff',
//                   background: '#6d7bfd',
//                   cursor: 'pointer',
//                 }}
//               >
//                 Start Now
//               </button>
//           </form>

//           {otpPopupVisible && (
//             <div className={styles.otpPopup}>
//               <OTPBox onSubmit={handleOtpSubmit} onClear={handleClearOtp} />
//             </div>
//           )}
//         </div>
//       )}
//     </>
//   );
// }


import { useState } from 'react';
import ToggleButtons from './ToggleButtons';
import styles from './FirstStep.module.css';
import OTPBox from './Otpmenu';
import InputField from './InputeField';
import { useNavigate } from 'react-router-dom';

export default function FirstStep({ setStep, step, FSData, setFSData }) {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState('Builder');
  const [selectedInterest, setSelectedInterest] = useState(() => {
    return selectedRole === 'Builder' ? 'Sell Project' : 'Rent';
  });
  const [name, setName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [email, setEmail] = useState('');
  const [otpPopupVisible, setOtpPopupVisible] = useState(false);

  const handleRoleChange = (value) => {
    setSelectedRole(value);
    setSelectedInterest(value === 'Builder' ? 'Sell Project' : 'Rent');
    setName('');
    setWhatsappNumber('');
    setEmail('');
  };

  const handleClearOtp = () => {
    setOtpPopupVisible(false);
  };

  const handleInterestChange = (value) => {
    setSelectedInterest(value);
  };

  const handleFormData = (e) => {
    e.preventDefault();
    const data = {
      selectedRole,
      selectedInterest,
      name,
      whatsappNumber,
      email,
    };
    setFSData(data);
    console.log('Form Data:', data);
    setOtpPopupVisible(true);
  };

  const handleOtpSubmit = (otp) => {
    console.log('OTP Submitted:', otp);
    setOtpPopupVisible(false);
    setStep(2);
    navigate('/info-advertise/step2');
  };

  return (
    <>
      {step === 1 && (
        <div className={styles.infoAdvertise_container}>
          <h3>Let's advertise your property on property panda</h3>

          <form onSubmit={handleFormData} className={styles.form_container}>
            <div style={{ marginTop: '20px' }}>
              <p>Are you a builder or owner?</p>
              <ToggleButtons
                options={['Builder', 'Owner']}
                onChange={handleRoleChange}
                selected={selectedRole}
              />
            </div>

            {selectedRole === 'Builder' && (
              <div style={{ marginTop: '20px' }}>
                <p>What is your interest?</p>
                <ToggleButtons
                  options={['Sell Project', 'Rent', 'Resale', 'PG/Co-living']}
                  onChange={handleInterestChange}
                  selected={selectedInterest}
                />
              </div>
            )}

            {selectedRole === 'Owner' && (
              <div style={{ marginTop: '20px' }}>
                <p>What is your interest?</p>
                <ToggleButtons
                  options={['Rent', 'Resale', 'PG/Co-living']}
                  onChange={handleInterestChange}
                  selected={selectedInterest}
                />
              </div>
            )}

            <InputField
              label="Enter your name"
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <InputField
              label="WhatsApp Number"
              type="text"
              id="whatsapp"
              placeholder="Enter your WhatsApp number"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
            />

            <InputField
              label="Email Address"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              style={{
                marginTop: '30px',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '5px',
                color: '#fff',
                background: '#6d7bfd',
                cursor: 'pointer',
              }}
            >
              Start Now
            </button>
          </form>

          {otpPopupVisible && (
            <div className={styles.otpPopup}>
              <OTPBox onSubmit={handleOtpSubmit} onClear={handleClearOtp} />
            </div>
          )}
        </div>
      )}
    </>
  );
}