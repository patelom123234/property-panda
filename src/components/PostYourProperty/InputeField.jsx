// InputField.js
// import React from 'react';

const InputField = ({ label  , type, id, placeholder, value, onChange }) => {
  return (
    <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }}>
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          marginTop: '10px',
          outline: 'none',
          border: 'none',
          background: 'transparent',
          borderBottom: '1px solid #6d7bfd',
        }}     
      />
    </div>
  );
};

export default InputField;
