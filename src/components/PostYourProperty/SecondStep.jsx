import { useState } from "react";
import ToggleButtons from "./ToggleButtons"; // Assuming you have a ToggleButtons component
import styles from "./SecondStep.module.css";
import InputField from "./InputeField";
import { useNavigate } from "react-router-dom";
import CarpetArea from "./CarpetArea";
import DatePicker from "react-datepicker"; // Import react-datepicker
import "react-datepicker/dist/react-datepicker.css";

const AvailabilityDatePicker = ({
  label,
  selectedDate,
  onChange,
  dateFormat,
}) => (
  <div
    style={{
      marginTop: "20px",
      display: "flex",
      gap: "10px",
      alignItems: "end",
    }}
  >
    <label>{label}</label>
    <DatePicker
      placeholderText="Available from"
      selected={selectedDate}
      onChange={onChange}
      dateFormat={dateFormat}
      className={styles.customDatePicker}
    />
  </div>
);

const PropertyLocation = ({
  label1,
  label2,
  label3,
  label4,
  value1,
  value2,
  value3,
  value4,
  onChange1,
  onChange2,
  onChange3,
  onChange4,
}) => (
  <>
    <h4 style={{ marginTop: "25px", marginBottom: "0" }}>
      Property Location *
    </h4>
    <InputField
      label={label1}
      type="text"
      id="City"
      placeholder={label1}
      value={value1}
      onChange={onChange1}
    />
    <InputField
      label={label2}
      type="text"
      id="area"
      placeholder={label2}
      value={value2}
      onChange={onChange2}
    />
    <InputField
      label={label3}
      type="text"
      id="address"
      placeholder={label3}
      value={value3}
      onChange={onChange3}
    />
    <InputField
      label={label4}
      type="text"
      id="name"
      placeholder={label4}
      value={value4}
      onChange={onChange4}
    />
  </>
);

export default function SecondStep({
  setStep,
  step,
  FSselectedInerest,
  setSSData,
}) {
  const [selectedRole, setSelectedRole] = useState("Residential");
  const [selectedInterest, setSelectedInterest] = useState("Office");
  const [name, setName] = useState("");
  const [City, setCity] = useState("");
  const [subCity, setSubCity] = useState("");
  const [address, setAddress] = useState("");
  const [houseSize, setHouseSize] = useState("");
  const [possession, setPossession] = useState("");
  const [selectedDate, setSelectedDate] = useState(null); // State to store the selected date
  const [carpetMinValue, setCarpetMinValue] = useState(null);
  const [carpetMaxValue, setCarpetMaxValue] = useState(null);
  const [carpetSelectedUnit, setCarpetSelectedUnit] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [appartmentNo, setAppartmentNo] = useState("");
  const [suitableFor, setSuitableFor] = useState("Couple");
  const [officeNo, setOfficeNo] = useState("");
  const [floorNo, setFloorNo] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [parkShadeShopsNo, setParkShadeShopsNo] = useState("");

  const navigate = useNavigate();

  const handleRoleChange = (value) => {
    setSelectedRole(value);
    setPossession("");
    setHouseSize("");
    setSelectedInterest("Office");
    setName("");
    setCity("");
    setSubCity("");
    setAddress("");
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    if (name === "minPrice") {
      setMinPrice(value);
    } else if (name === "maxPrice") {
      setMaxPrice(value);
    }
  };

  const handleHouseSize = (value) => {
    setHouseSize(value);
  };

  const handleInterestChange = (value) => {
    setSelectedInterest(value);
  };

  const handleBack = () => {
    navigate("/step1");
  };

  const handleFormData = (e) => {
    e.preventDefault();
    const data = {
      selectedRole,
      selectedInterest,
      houseSize,
      possession,
      name,
      City,
      subCity,
      address,
      carpetMaxValue,
      carpetMinValue,
      carpetSelectedUnit,
      selectedDate,
      officeNo,
      floorNo,
      furnishing,
      parkShadeShopsNo,
    };
    console.log("Form Data:", data);
    setStep(3);
    setSSData(data);
    navigate("/info-advertise/step3");
  };

  return (
    <>
      {step === 2 && (
        <div className={styles.infoAdvertise_container}>
          {/* <button 
            onClick={handleBack}
              style={{ background: '#EDEFFF', border: 'none', cursor: 'pointer', fontSize: '24px', boxSizing:'border-box' }}
            >&larr;</button> */}

          <h3>Let's advertise your property on property panda</h3>

          <form onSubmit={handleFormData} className={styles.form_container}>
            <div style={{ marginTop: "20px" }}>
              <h4>Property Type *</h4>
              <ToggleButtons
                options={["Residential", "Commercial", "Industrial"]}
                onChange={handleRoleChange}
                selected={selectedRole}
              />
            </div>

            {selectedRole === "Residential" && (
              <div style={{ marginTop: "20px" }}>
                <ToggleButtons
                  options={[
                    "Apartment/Flat",
                    "Duplex Verticle Vila",
                    "Home/Bunglow",
                    "Farmhouse",
                  ]}
                  onChange={handleInterestChange}
                  selected={selectedInterest}
                />
              </div>
            )}

            {selectedRole === "Commercial" && (
              <div style={{ marginTop: "20px" }}>
                <ToggleButtons
                  options={[
                    "Office",
                    "Commercial shops",
                    "Commercial showroom",
                    "Commercial space",
                  ]}
                  onChange={handleInterestChange}
                  selected={selectedInterest}
                />
              </div>
            )}

            {selectedRole === "Industrial" && (
              <div style={{ marginTop: "20px" }}>
                <ToggleButtons
                  options={["Park", "Shade", "Shops"]}
                  onChange={handleInterestChange}
                  selected={selectedInterest}
                />
              </div>
            )}

            <CarpetArea
              setCarpetMaxValue={setCarpetMaxValue}
              setCarpetMinValue={setCarpetMinValue}
              setCarpetSelectedUnit={setCarpetSelectedUnit}
            />
            {/* { FSselectedInerest === 'Rent' || FSselectedInerest === 'Resale' ? "" :
             <>
              
            {selectedRole==='Residential' && <div style={{ marginTop: '20px' }}>
              <p>BHK Selection</p>
              <ToggleButtons
                options={['RK', '1 BHK', '1.5 BHK','2 BHK','2.5BHK','3 BHK', '3.5BHK','4+ BHK', '2 & 3 BHK','3 & 4 BHK','4 & 5 BHK+']}
                onChange={handleHouseSize}
                selected={houseSize}
              />
            </div>}
              
              <div style={{ marginTop: '20px' }}>
                <p>Possession Status</p>
                <ToggleButtons
                  options={['Under Construction', 'Ready to Move']}
                  onChange={setPossession}
                  selected={possession}
                />
              </div> 
             </>

              } */}

            {/* 
              { FSselectedInerest === 'Rent' || FSselectedInerest === 'Resale' ? "" :
             <> */}
            {FSselectedInerest === "Rent" &&
              selectedRole === "Commercial" &&
              selectedInterest === "Office" && (
                <>
                  {" "}
                  <InputField
                    label="Office no."
                    type="text"
                    id="officeNo"
                    placeholder="office no"
                    value={officeNo}
                    onChange={(e) => setOfficeNo(e.target.value)}
                  />
                  <InputField
                    label="Floor no."
                    type="text"
                    id="floorNo"
                    placeholder="Floor no"
                    value={floorNo}
                    onChange={(e) => setFloorNo(e.target.value)}
                  />{" "}
                </>
              )}

            {FSselectedInerest === "Rent" &&
              selectedRole === "Commercial" &&
              selectedInterest === "Commercial shops" && (
                <InputField
                  label="Floor no."
                  type="text"
                  id="floorNo"
                  placeholder="Floor no"
                  value={floorNo}
                  onChange={(e) => setFloorNo(e.target.value)}
                />
              )}

            {FSselectedInerest === "Rent" && selectedRole === "Industrial" && (
              <InputField
                label={`${
                  selectedInterest === "Shops"
                    ? "Shops"
                    : selectedInterest === "Shade"
                    ? "Shade"
                    : "Park"
                } Number`}
                type="text"
                id={parkShadeShopsNo}
                placeholder={`${
                  selectedInterest === "Shops"
                    ? "Shops"
                    : selectedInterest === "Shade"
                    ? "Shade"
                    : "Park"
                } Number`}
                value={parkShadeShopsNo}
                onChange={(e) => setParkShadeShopsNo(e.target.value)}
              />
            )}

            {selectedRole === "Residential" && (
              <div style={{ marginTop: "20px" }}>
                <p>BHK Selection</p>
                <ToggleButtons
                  options={[
                    "RK",
                    "1 BHK",
                    "1.5 BHK",
                    "2 BHK",
                    "2.5BHK",
                    "3 BHK",
                    "3.5BHK",
                    "4+ BHK",
                    "2 & 3 BHK",
                    "3 & 4 BHK",
                    "4 & 5 BHK+",
                  ]}
                  onChange={handleHouseSize}
                  selected={houseSize}
                />
              </div>
            )}

            {FSselectedInerest === "Sell Project" ||
            selectedInterest === "Commercial showroom" ||
            selectedInterest === "Commercial space" ? (
              <div style={{ marginTop: "20px" }}>
                <p>Possession Status</p>
                <ToggleButtons
                  options={["Under Construction", "Ready to Move"]}
                  onChange={setPossession}
                  selected={possession}
                />
              </div>
            ) : (
              ""
            )}

            {FSselectedInerest === "Rent" &&
            selectedRole === "Commercial" &&
            selectedInterest === "Office" ? (
              <div style={{ marginTop: "20px" }}>
                <p>Furnishing Status</p>
                <ToggleButtons
                  options={["Furnished", "UnFurnished"]}
                  onChange={setFurnishing}
                  selected={furnishing}
                />
              </div>
            ) : (
              ""
            )}

            {FSselectedInerest === "Rent" &&
            selectedRole === "Commercial" &&
            selectedInterest === "Commercial shops" ? (
              <div style={{ marginTop: "20px" }}>
                <p>Furnishing Status</p>
                <ToggleButtons
                  options={["Furnished", "UnFurnished"]}
                  onChange={setFurnishing}
                  selected={furnishing}
                />
              </div>
            ) : (
              ""
            )}

            {FSselectedInerest === "Rent" && selectedRole === "Industrial" ? (
              <div style={{ marginTop: "20px" }}>
                <p>Furnishing Status</p>
                <ToggleButtons
                  options={["Furnished", "UnFurnished"]}
                  onChange={setFurnishing}
                  selected={furnishing}
                />
              </div>
            ) : (
              ""
            )}

            {FSselectedInerest === "Rent" && selectedRole === "Residential" ? (
              <InputField
                label="Appartment/flat No"
                type="text"
                id="appartmentNo"
                placeholder="Appartment/flat no"
                value={appartmentNo}
                onChange={(e) => setAppartmentNo(e.target.value)}
              />
            ) : (
              ""
            )}
            {FSselectedInerest === "Rent" && selectedRole === "Residential" ? (
              <div style={{ marginTop: "20px" }}>
                <p>Suitable for</p>
                <ToggleButtons
                  options={[
                    "Couple",
                    "Single Person",
                    "Full Family",
                    "Boys",
                    "Girl group",
                  ]}
                  onChange={setSuitableFor}
                  selected={suitableFor}
                />
              </div>
            ) : (
              ""
            )}

            {FSselectedInerest === "Rent" && selectedRole === "Industrial" ? (
              <div style={{ marginTop: "20px" }}>
                <p>Suitable for</p>
                <ToggleButtons
                  options={[
                    "Couple",
                    "Single Person",
                    "Full Family",
                    "Boys",
                    "Girl group",
                  ]}
                  onChange={setSuitableFor}
                  selected={suitableFor}
                />
              </div>
            ) : (
              ""
            )}

            {FSselectedInerest === "Rent" &&
            selectedRole === "Commercial" &&
            selectedInterest === "Commercial shops" ? (
              <div style={{ marginTop: "20px" }}>
                <p>Suitable for</p>
                <ToggleButtons
                  options={[
                    "Couple",
                    "Single Person",
                    "Full Family",
                    "Boys",
                    "Girl group",
                  ]}
                  onChange={setSuitableFor}
                  selected={suitableFor}
                />
              </div>
            ) : (
              ""
            )}

            {FSselectedInerest === "Rent" && (
              <>
                {selectedRole === "Residential" && (
                  <AvailabilityDatePicker
                    label="Available from:"
                    selectedDate={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                  />
                )}
                {selectedRole === "Industrial" && (
                  <AvailabilityDatePicker
                    label="Available from:"
                    selectedDate={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                  />
                )}
                {selectedRole === "Commercial" &&
                  selectedInterest === "Office" && (
                    <AvailabilityDatePicker
                      label="Available from:"
                      selectedDate={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="dd/MM/yyyy"
                    />
                  )}
                {selectedRole === "Commercial" &&
                  selectedInterest === "Commercial shops" && (
                    <AvailabilityDatePicker
                      label="Available from:"
                      selectedDate={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="dd/MM/yyyy"
                    />
                  )}
              </>
            )}
            {FSselectedInerest === "Sell Project" ||
            selectedInterest === "Commercial showroom" ||
            selectedInterest === "Commercial space" ? (
              <div className={styles.price_range_container}>
                <label className={styles.price_label}>Price Range</label>
                <div className={styles.inputContainer}>
                  <div className={styles.inputMin}>
                    <label htmlFor="min">Min:</label>
                    <input
                      id="min"
                      name="minPrice"
                      value={minPrice}
                      onChange={handlePriceChange}
                      style={{
                        marginTop: "10px",
                        outline: "none",
                        border: "none",
                        background: "transparent",
                        borderBottom: "1px solid #6d7bfd",
                      }}
                    />
                  </div>
                  <div className={styles.inputMax}>
                    <label htmlFor="max">Max:</label>
                    <input
                      id="max"
                      name="maxPrice"
                      value={maxPrice}
                      onChange={handlePriceChange}
                      style={{
                        marginTop: "10px",
                        outline: "none",
                        border: "none",
                        background: "transparent",
                        borderBottom: "1px solid #6d7bfd",
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {FSselectedInerest === "Sell Project" && (
              <PropertyLocation
                title="Property Location *"
                label1="Project City"
                label2="Area(sub city)"
                label3="Address"
                label4="Project Name"
                value1={City}
                value2={subCity}
                value3={address}
                value4={name}
                onChange1={(e) => setCity(e.target.value)}
                onChange2={(e) => setSubCity(e.target.value)}
                onChange3={(e) => setAddress(e.target.value)}
                onChange4={(e) => setName(e.target.value)}
              />
            )}

            {FSselectedInerest === "Rent" && selectedRole === "Residential" && (
              <PropertyLocation
                title="Property Location *"
                label1="Society City"
                label2="Area(sub city)"
                label3="Address"
                label4="Society Name"
                value1={City}
                value2={subCity}
                value3={address}
                value4={name}
                onChange1={(e) => setCity(e.target.value)}
                onChange2={(e) => setSubCity(e.target.value)}
                onChange3={(e) => setAddress(e.target.value)}
                onChange4={(e) => setName(e.target.value)}
              />
            )}

            {FSselectedInerest === "Rent" && selectedRole === "Commercial" && (
              <>
                {selectedInterest === "Office" && (
                  <PropertyLocation
                    label1="Office City"
                    label2="Area sub city"
                    label3="Address"
                    label4="Commercial Name"
                    value1={City}
                    value2={subCity}
                    value3={address}
                    value4={name}
                    onChange1={(e) => setCity(e.target.value)}
                    onChange2={(e) => setSubCity(e.target.value)}
                    onChange3={(e) => setAddress(e.target.value)}
                    onChange4={(e) => setName(e.target.value)}
                  />
                )}

                {selectedInterest === "Commercial shops" && (
                  <PropertyLocation
                    label1="Commercial Property City"
                    label2="Area sub city"
                    label3="Address"
                    label4="Commercial Name"
                    value1={City}
                    value2={subCity}
                    value3={address}
                    value4={name}
                    onChange1={(e) => setCity(e.target.value)}
                    onChange2={(e) => setSubCity(e.target.value)}
                    onChange3={(e) => setAddress(e.target.value)}
                    onChange4={(e) => setName(e.target.value)}
                  />
                )}
              </>
            )}

            {FSselectedInerest === "Rent" && selectedRole === "Commercial" && (
              <>
                {(selectedInterest === "Commercial showroom" ||
                  selectedInterest === "Commercial space") && (
                  <PropertyLocation
                    title="Property Location *"
                    label1="Project City"
                    label2="Area(sub city)"
                    label3="Address"
                    label4="Project Name"
                    value1={City}
                    value2={subCity}
                    value3={address}
                    value4={name}
                    onChange1={(e) => setCity(e.target.value)}
                    onChange2={(e) => setSubCity(e.target.value)}
                    onChange3={(e) => setAddress(e.target.value)}
                    onChange4={(e) => setName(e.target.value)}
                  />
                )}
              </>
            )}

            {FSselectedInerest === "Rent" && selectedRole === "Industrial" && (
              <PropertyLocation
                title="Property Location *"
                label1="Industrial City"
                label2="Area(sub city)"
                label3="Address"
                label4="Industrial Name"
                value1={City}
                value2={subCity}
                value3={address}
                value4={name}
                onChange1={(e) => setCity(e.target.value)}
                onChange2={(e) => setSubCity(e.target.value)}
                onChange3={(e) => setAddress(e.target.value)}
                onChange4={(e) => setName(e.target.value)}
              />
            )}
            <button
              type="submit"
              style={{
                marginTop: "30px",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "#fff",
                background: "#6d7bfd",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

// import { useState } from 'react';
// import ToggleButtons from './ToggleButtons';
// import styles from './SecondStep.module.css';
// import InputField from './InputeField';
// import { useNavigate } from 'react-router-dom';
// import CarpetArea from './CarpetArea';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// ... (rest of the SecondStep component code)

// export default function SecondStep({ setStep, step, FSselectedInerest, setSSData }) {
//   const navigate = useNavigate();

// ... (rest of the SecondStep component code)

// const handleFormData = (e) => {
//   e.preventDefault();
//   const data = {
//     selectedRole,
//     selectedInterest,
//     houseSize,
//     possession,
//     name,
//     City,
//     subCity,
//     address,
//     carpetMaxValue,
//     carpetMinValue,
//     carpetSelectedUnit,
//     selectedDate,
//     officeNo,
//     floorNo,
//     furnishing,
//     parkShadeShopsNo
//   };
//   console.log('Form Data:', data);
//   setStep(3);
//   setSSData(data);
//   navigate('/info-advertise/step3');
// };

// ... (rest of the SecondStep component code)
// }
