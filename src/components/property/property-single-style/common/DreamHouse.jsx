// import React from 'react';

const DreamHouse = () => {
    return (
      <div style={styles.container}>
        <div style={styles.subtitle}>MODERN AND SPACIOUS</div>
        <div style={styles.title}>
          YOUR DREAM <br/><hr/> HOUSE AWAITS
        </div>
        <div style={styles.imageContainer}>
          <img src="/dream-home.jpg" alt="Dream House" style={styles.image} />
        </div>
        <div style={styles.discoverText}>
        </div>
        <a href="#" style={styles.link}>
          <button style={styles.button}>
          DISCOVER THE PERFECT HOME FOR YOU.
          </button>
        </a>
        <div style={styles.contact}>123-456-7890</div>
        <div style={styles.tags}>#realestate #yourdreamhome</div>
      </div>
    );
  };
  
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px 20px',
      maxWidth : '100%',
      boxSizing: 'border-box',
      backgroundColor: '#E6E2DF', // Brochure background color
      borderRadius: '20px', // Rounded corners
    },
  
    title: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '10px',
      lineHeight :'50px',
    },
  
    subtitle: {
      fontSize: '18px',
      marginBottom: '20px',
    },
  
    imageContainer: {
      position: 'relative',
      width : '180px',
      height : '180px',
      overflow: 'hidden',
      borderRadius: ' 50% 50% 0 0', 
      margin: '0 auto', 
    },
  
    image: {
      width: '180px',
      height: '180px',
      display: 'block',
      position: 'absolute',
      bottom: '0', // Place the image at the bottom of the container
    },
  
    discoverText: {
      fontSize: '18px',
      marginTop: '20px',
      color: '#0066cc',
    },
  
    link: {
      textDecoration: 'none',
    },
    button: {
      fontSize: '13px',
      padding: '15px 10px',
      border: '1px solid #0066cc',
      color: 'black',
      backgroundColor : 'transparent',
      // border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      maxWidth : '90%',
    },
    contact: {
      fontSize: '16px',
      marginTop: '10px',
    },
    tags: {
      fontSize: '14px',
      color: '#666',
      marginTop: '10px',
    },
  };
  
  export default DreamHouse;
  