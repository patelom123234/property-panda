// CarpetArea.js
import React, { useState } from "react";
import styles from "./CarpetArea.module.css";

export default function CarpetArea({setCarpetMinValue, setCarpetMaxValue, setCarpetSelectedUnit}) {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("sqMeter");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (e.target.name === "minValue") {
      setMinValue(value);
      setCarpetMinValue(value);
    } else if (e.target.name === "maxValue") {
      setMaxValue(value);
      setCarpetMaxValue(value);
    }
  };

  const handleUnitChange = (e) => {
    setSelectedUnit(e.target.value);
    setCarpetSelectedUnit(e.target.value);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Carpet Area</label>
      <div className={styles.inputContainer}>
        <label>Min:</label>
        <div className={styles.inputWithButton}>
          <input
            name="minValue"
            value={minValue}
            onChange={handleInputChange}
          />
          <select value={selectedUnit} onChange={handleUnitChange}>
            <option value="sqMeter">sq meter</option>
            <option value="sqFeet">sq feet</option>
            <option value="sqYard">sq yard</option>
          </select>
        </div>
      </div>
      <div className={styles.inputContainer}>
        <label>Max:</label>
        <div className={styles.inputWithButton}>
          <input
            // type="number"
            name="maxValue"
            value={maxValue}
            onChange={handleInputChange}
          />
          <select value={selectedUnit} onChange={handleUnitChange}>
            <option value="sqMeter">sq meter</option>
            <option value="sqFeet">sq feet</option>
            <option value="sqYard">sq yard</option>
          </select>
        </div>
      </div>
    </div>
  );
}
