// Step.js
// import React from 'react';

const Step = ({ id, label, onClick, active, completed }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        display: 'flex',
        justifyContent:'center',
        alignItems : 'center',
        cursor: 'pointer',
        padding: '10px',
        width : '25px',
        height : '25px',
        textAlign: 'center',
        borderRadius: '100%',
        backgroundColor: active ? '#6d7bfd' : completed ? '#28A745' : '#ccd1fd',
        color: active || completed ? '#fff' : '#007BFF',
        border :  active || completed ? '' : '2px dashed #007BFF'
      }}
    >
      {label}
    </div>
  );
};

export default Step;
