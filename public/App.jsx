import { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
// import OTPBox from "./OtpBox";

const OTPBox = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const otp_container = {
    display: "flex",
    // justifyContent: "center",
    marginBottom: "20px",
  };

  const otpInputStyle = {
    width: "40px",
    height: "40px",
    fontSize: "24px",
    textAlign: "center",
    margin: "0 5px",
    border: "1px solid #2e48de",
    borderRadius: "4px",
    outline: "none",
  };

  const handleChange = (event, index) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value.slice(-1);

    if (event.target.value) {
      if (index < 3) {
        const nextInput = document.querySelector(
          `input[data-index="${index + 1}"]`
        );
        nextInput.focus();
      } else {
        event.target.blur();
      }
    } else {
      if (index > 0) {
        const prevInput = document.querySelector(
          `input[data-index="${index - 1}"]`
        );
        prevInput.focus();
      }
    }

    setOtp(newOtp);
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const data = event.clipboardData
      .getData("text/plain")
      .slice(0, 4)
      .split("");
    const newOtp = [...otp];
    for (let i = 0; i < 4; i++) {
      newOtp[i] = data[i] || "";
    }
    setOtp(newOtp);
  };

  return (
    <div style={otp_container}>
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={value}
          onChange={(event) => handleChange(event, index)}
          onPaste={handlePaste}
          data-index={index}
          style={otpInputStyle}
        />
      ))}
    </div>
  );
};

function RegistrationModel() {
  const [number, setNumber] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showPreferenceModal, setShowPreferenceModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [timer, setTimer] = useState(60);
  const [purchaseProperty, setPurchaseProperty] = useState(false);
  const [rentProperty, setRentProperty] = useState(false);
  const [sellPropertyProject, setSellPropertyProject] = useState(false);
  const [sellProperty, setSellProperty] = useState(false);

  const signUpModalRef = useRef(null);
  const otpModalRef = useRef(null);
  const infoModalRef = useRef(null);
  const preferenceModalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        signUpModalRef.current &&
        !signUpModalRef.current.contains(event.target)
      ) {
        setShowSignUpModal(false);
      }
      if (otpModalRef.current && !otpModalRef.current.contains(event.target)) {
        setShowOTPModal(false);
      }
      if (infoModalRef.current && !infoModalRef.current.contains(event.target)) {
        setShowInfoModal(false);
      }
      if (preferenceModalRef.current && !preferenceModalRef.current.contains(event.target)) {
        setShowPreferenceModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let interval = null;
    if (showOTPModal) {
      interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [showOTPModal]);

  const handleSignUp = () => {
    setShowSignUpModal(false);
    setShowOTPModal(true);
    setTimer(60); // Reset the timer
  };

  const handleResendOTP = () => {
    setTimer(60); // Reset the timer
  };

  const handleOTPSubmit = () => {
    setShowOTPModal(false);
    setShowInfoModal(true);
  };

  const handleInfoSubmit = () => {
    setShowInfoModal(false);
    setShowPreferenceModal(true);
  };

  const handlePreferenceSubmit = () => {
    // Handle submission of preference
    // console.log("Preference submitted:", preference);
    // Close preference modal
    setShowPreferenceModal(false);
  };

  const containerStyle = {
    padding: "20px",
    backgroundColor: "white",
    marginTop: "30px",
    marginBottom: "30px",
    borderRadius: "15px",
    width: "100%",
    maxWidth: "700px",  
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: showSignUpModal || showOTPModal || showInfoModal || showPreferenceModal ? 1000 : -1,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start", // Changed to align at the top
    overflowY: "auto", // Allow vertical scrolling
  };
  const checkboxLabelStyle = {
    // marginBottom: "8px",
    // border:'1px solid green',
    cursor: "pointer",
    fontSize: "16px",
    fontFamily: "Arial, sans-serif",
    // display: "flex",
    // alignItems: "center", // Align checkbox and label horizontally
  };
  
  // const headingStyle = {
  //   color: "#2E48DE",
  //   marginBottom: "20px",
  //   textAlign: "center",
  // };

  const imageAndFormContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "20px",
    width: "100%",
    backgroundColor: "transparent",
    borderRadius: "10px",
    height:'400px',
    justifyContent:'center'
  };

  const imageStyle = {
    maxWidth: "100%",
    width: "300px",
  };

  const formContainerStyle = {
    width: "100%",
    maxWidth: "300px",
  };

  const formStyle = {};

  // const labelStyle = {
  //   marginBottom: "5px",
  // };

  // const inputStyle = {
  //   width: "100%",
  //   padding: "10px",
  //   border: "1px solid #ccc",
  //   borderRadius: "5px",
  //   boxSizing: "border-box",
  //   marginBottom: "10px",
  // };

  const checkboxContainerStyle = {
    display: "flex",
    alignItems: "center",
    // border : '1px solid blue',
    marginBottom: "15px",
  };

  const checkboxStyle = {
    marginRight: "5px",
  };

  const recaptchaContainerStyle = {
    width: "100%",
    maxWidth: "400px", // Adjust max-width as needed
  };

  const recaptchaStyle = {
    width: "100%",  
    maxWidth: "100%", // Set maximum width for the ReCAPTCHA component
    marginBottom: "10px",
  };

  // const buttonStyle = {
  //   width: "100%",
  //   padding: "10px 20px",
  //   backgroundColor: "#2E48DE",
  //   color: "white",
  //   border: "none",
  //   borderRadius: "5px",
  //   cursor: "pointer",
  // };

  const Number_container = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
  };

  const timerContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    gap: "5px",
  };

  const nameContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "10px",
  };

  // const nameInputStyle = {
  //   flex: "1",
  //   padding: "10px",
  //   border: "1px solid #ccc",
  //   borderRadius: "5px",
  //   boxSizing: "border-box",
  // };

  const emailContainerStyle = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
  };

  const otpContainerStyle = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
  };

  const preferenceContainerStyle = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
  };

  // const radioLabelStyle = {
  //   marginBottom: "5px",
  //   cursor: "pointer",
  // };
  const buttonStyle = {
    width: "100%",
    padding: "12px 20px", // Increase padding for better button appearance
    backgroundColor: "#2E48DE",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px", // Increase font size
    fontFamily: "Arial, sans-serif", // Change font family
    marginTop: "20px", // Add top margin for spacing
  };

  const headingStyle = {
    color: "#2E48DE",
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "24px", // Increase font size
    fontFamily: "Arial, sans-serif", // Change font family
  };

  const labelStyle = {
    
    fontSize: "16px", // Increase font size
    fontFamily: "Arial, sans-serif", // Change font family
  };

  const inputStyle = {
    width: "100%",
    // padding: "12px",
    border: "none",
    borderBottom : '1px solid #2E48DE',
    // borderRadius: "5px",
    boxSizing: "border-box",
    marginBottom: "16px", // Adjust margin for better spacing
    fontSize: "16px", // Increase font size
    fontFamily: "Arial, sans-serif", // Change font family
    outline : 'none'
  };

  // const radioLabelStyle = {
  //   marginBottom: "8px", // Adjust margin for better spacing
  //   cursor: "pointer",
  //   fontSize: "16px", // Increase font size
  //   fontFamily: "Arial, sans-serif", // Change font family
  // };


  return (
    <>
      {/* Add a button or link to trigger the sign-up modal */}
      <button onClick={() => setShowSignUpModal(true)}>Open Sign Up</button>
      {/* Render the sign-up modal conditionally */}
      {showSignUpModal && (
        <div style={overlayStyle}>
          <div style={containerStyle} ref={signUpModalRef}>
            <h1 style={headingStyle}>Registration</h1>
            <div style={imageAndFormContainerStyle}>
              <img src="./first.png" alt="Uploaded" style={imageStyle} />
              <div style={formContainerStyle}>
                <form style={formStyle}>
                  <div style={Number_container}>
                    <label htmlFor="Mobile_Number" style={{...labelStyle, marginBottom:'10px' , color:'#2e48de'}}>
                      Enter your Mobile Number
                    </label>
                    <input
                      name="Mobile Number"
                      id="Mobile_Number"
                      type="tel"
                      value={number}
                      required
                      // placeholder="Enter your Number"
                      onChange={(event) => setNumber(event.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div style={checkboxContainerStyle}>
                    <input
                      name="rememberMe"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(event) => setRememberMe(event.target.checked)}
                      id="rememberMe"
                      style={checkboxStyle}
                    />
                    <label htmlFor="rememberMe">Remember me</label>
                  </div>
                  <div style={recaptchaContainerStyle}>
                    <ReCAPTCHA
                      sitekey="6Ldow6QpAAAAAGQK1HexwF7_NJyLFcAquGHELdl0"
                      style={{...recaptchaStyle, width:'50px'}}
                    />
                  </div>
                  <button type="submit" style={buttonStyle} onClick={handleSignUp}>
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Render the OTP modal conditionally */}
      {showOTPModal && (
        <div style={overlayStyle}>
          <div style={containerStyle} ref={otpModalRef}>
            <h1 style={headingStyle}>OTP Field</h1>
            <div style={imageAndFormContainerStyle}>
              <img src="./second.png" alt="Uploaded" style={imageStyle} />
              <div style={formContainerStyle}>
                <form style={formStyle}>
                  <div style={otpContainerStyle}>
                    <label htmlFor="otp" style={{...labelStyle, marginBottom:'10px', color:'#2e48de',
    fontSize: "24px", // Increase font size
    fontFamily: "Arial, sans-serif"}}>
                      Enter OTP
                    </label>
                    {/* <input
                      name="otp"
                      id="otp"
                      type="text"
                      value={otp}
                      required
                      // placeholder="Enter OTP"
                      onChange={(event) => setOtp(event.target.value)}
                      style={inputStyle}
                    /> */}
                    <OTPBox/>
                  </div>
                  <div style={timerContainerStyle}>
                    {timer > 0 ? <span>You will receive OTP within {timer} seconds. </span> : ''}
                    {timer === 0 && (
                      <>
                      <span>Didn't receive OTP?</span>
                      <button
                        type="button"
                        style={buttonStyle}
                        onClick={handleResendOTP}
                      >
                        Resend OTP
                      </button>
                      </>
                    )}
                  </div>
                  <button type="submit" style={buttonStyle} onClick={handleOTPSubmit}>
                    Submit OTP
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Render the info modal conditionally */}
      {showInfoModal && (
  <div style={overlayStyle}>
    <div style={containerStyle} ref={infoModalRef}>
      <h1 style={headingStyle}>Enter Additional Information</h1>
      <div style={imageAndFormContainerStyle}>
        <img src="./third.png" alt="Uploaded" style={imageStyle} />
        <div style={{ ...formContainerStyle, marginTop: '20px' }}>
          <form style={formStyle} onSubmit={handleInfoSubmit}>
            <div style={{ ...nameContainerStyle, marginBottom: '10px' }}>
              <label htmlFor="firstName" style={{...labelStyle,  color:'#2e48de'}}>
                First Name
              </label>
              <input
                name="firstName"
                id="firstName"
                type="text"
                value={firstName}
                required
                // placeholder="Enter your First Name"
                onChange={(event) => setFirstName(event.target.value)}
                style={{ ...inputStyle, marginBottom: '10px' }}
              />

              <label htmlFor="lastName" style={{...labelStyle, color:'#2e48de'}}>
                Last Name
              </label>
              <input
                name="lastName"
                id="lastName"
                type="text"
                value={lastName}
                required
                // placeholder="Enter your Last Name"
                onChange={(event) => setLastName(event.target.value)}
                style={{ ...inputStyle, marginBottom: '10px' }}
              />
            </div>
            <div style={{ ...emailContainerStyle, marginBottom: '10px' }}>
              <label htmlFor="email" style={{...labelStyle, marginBottom:'10px', color:'#2e48de'}}>
                Email Address
              </label>
              <input
                name="email"
                id="email"
                type="email"
                value={email}
                required
                // placeholder="Enter your Email Address"
                onChange={(event) => setEmail(event.target.value)}
                style={{ ...inputStyle, marginBottom: '10px' }}
              />
            </div>
            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
)}

  {/* Render the preference modal conditionally */}
  {showPreferenceModal && (
  <div style={overlayStyle}>
    <div style={containerStyle} ref={preferenceModalRef}>
      <h1 style={headingStyle}>What’s your preference?</h1>
      <div style={imageAndFormContainerStyle}>
        <img src="./fourth.png" alt="Uploaded" style={imageStyle} />
        <div style={formContainerStyle}>
          <form style={formStyle} onSubmit={handlePreferenceSubmit}>
            <div style={preferenceContainerStyle}>
              <div style={checkboxContainerStyle}>
                <input
                  name="purchaseProperty"
                  type="checkbox"
                  checked={purchaseProperty}
                  onChange={(event) => setPurchaseProperty(event.target.checked)}
                  id="purchaseProperty"
                  style={checkboxStyle}
                />
                <label htmlFor="purchaseProperty" style={{...checkboxLabelStyle, color:'#2E48DE'}}>Want to Purchase new property</label>
              </div>
              <div style={checkboxContainerStyle}>
                <input
                  name="sellProperty"
                  type="checkbox"
                  checked={sellProperty}
                  onChange={(event) => setSellProperty(event.target.checked)}
                  id="sellProperty"
                  style={checkboxStyle}
                />
                <label htmlFor="sellProperty" style={{...checkboxLabelStyle, color:'#2e48de'}}>Want to sell your property</label>
              </div>
              <div style={checkboxContainerStyle}>
                <input
                  name="rentProperty"
                  type="checkbox"
                  checked={rentProperty}
                  onChange={(event) => setRentProperty(event.target.checked)}
                  id="rentProperty"
                  style={checkboxStyle}
                />
                <label htmlFor="rentProperty" style={{checkboxLabelStyle, color:'#2e48de'}}>Want to rent your property</label>
              </div>
              <div style={checkboxContainerStyle}>
                <input
                  name="sellPropertyProject"
                  type="checkbox"
                  checked={sellPropertyProject}
                  onChange={(event) => setSellPropertyProject(event.target.checked)}
                  id="sellPropertyProject"
                  style={checkboxStyle}
                />
                <label htmlFor="sellPropertyProject" style={{checkboxLabelStyle, color:'#2e48de'}}>Want to sell your property project</label>
              </div>
            </div>
            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
)}
 </>
  );
}

export default RegistrationModel;
