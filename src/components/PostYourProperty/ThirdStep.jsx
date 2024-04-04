// ThirdStep.js
import React, { useState } from "react";
import styles from "./ThirdStep.module.css";
import { Link } from "react-router-dom";

export default function ThirdStep() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>Upload Image</h2>
        <div className={styles.inputFileContainer}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.inputFile}
          />
          <button className={styles.browseButton}>Upload Photo</button>
        </div>
        {selectedImage && (
          <div className={styles.imageContainer}>
            <h3>Selected Image:</h3>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              className={styles.selectedImage}
            />
          </div>
        )}
        <p className={styles.note}>
          Note: Formate of photos are .jpg, .gif, .bmp, .png, maximum size 2mb{" "}
        </p>
        <p className={styles.note}>
          Builder can also email us for uploading at{" "}
          <span className={styles.email_address}>info@propertypanda.com</span>{" "}
        </p>
      </div>
      <div className={styles.submitContainer}>
        <button className={styles.submitButton}>
          <Link to={"/"} style={{ color: "white" }}>
            Submit
          </Link>
        </button>
      </div>
    </>
  );
}
