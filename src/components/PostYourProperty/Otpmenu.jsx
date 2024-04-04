import { useState } from "react";
import styles from "./Otpmenu.module.css";

const OTPBox = ({ onSubmit, onClear }) => {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };

  const handleClear = () => {
    setOtpValues(["", "", "", ""]);
    onClear();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otpValues[index] === "") {
      // If Backspace is pressed and the current input is empty, move focus to the previous input
      const previousIndex = index - 1;
      setOtpValues((prevValues) => {
        const newOtpValues = [...prevValues];
        newOtpValues[previousIndex] = "";
        return newOtpValues;
      });
      document.getElementById(`otpBox${previousIndex}`).focus();
    } else if (e.key >= "0" && e.key <= "9" && index < otpValues.length - 1) {
      // Move focus to the next input
      document.getElementById(`otpBox${index + 1}`).focus();

      // Get the numeric value from the pressed key
      const numericValue = e.key;

      // Call handleChange and pass the numeric value
      handleChange(index, numericValue);
    }
  };

  const handleOtpSubmit = () => {
    const otp = otpValues.join("");
    onSubmit(otp);
  };

  return (
    <div className={styles["otp-box"]}>
      <h2 style={{ color: "white" }}>Enter OTP</h2>
      <div className={styles["input-container"]}>
        {otpValues.map((value, index) => (
          <input
            className={styles.input_field}
            key={index}
            id={`otpBox${index}`}
            type="text"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1}
            aria-label={`OTP Box ${index + 1}`}
          />
        ))}
      </div>
      <div className={styles.button_container}>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleOtpSubmit}>Submit OTP</button>
      </div>
    </div>
  );
};

export default OTPBox;
