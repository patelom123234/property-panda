import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './ToggleButtons.module.css'; 

const ToggleButtons = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleToggle = (option) => {
    setSelectedOption(option);
    onChange(option); 
  };

  return (
    <div className={styles.toggleButtons}>
      {options.map((option, index) => (
        <ToggleButton
          key={index}
          label={option}
          value={option} 
          selected={selectedOption}
          onChange={handleToggle}
        />
      ))}
    </div>
  );
};

const ToggleButton = ({ label, value, selected, onChange }) => {
  const handleClick = () => {
    onChange(value);
  };

  return (
    <button
      type="button"
      className={styles.toggleButton} 
      style={{
        backgroundColor: selected === value ? '#6d7bfd' : '#ddd',
        color: selected === value ? '#fff' : '#000',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '5px 10px',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

ToggleButton.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

ToggleButtons.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ToggleButtons;
