import { useState } from 'react';
import Styles from "./TopSellingPlace.module.css";
import PropTypes from 'prop-types';
import { NavLink  } from "react-router-dom";
import { N_Header } from './Neighborhoods';

const TopSellingPlace = ({heading, subHeading, isDetails}) => {

  const [data, setData] = useState([
    { id: 1, locality: 'Bodakdev', avgPrice: '₹3,800sq.ft', numProjects: 5, priceTrend: 'Up' },
    { id: 2, locality: 'Memnagar', avgPrice:'₹3,800sq.ft', numProjects: 8, priceTrend: 'Down' },
    { id: 3, locality: 'Memnagar', avgPrice:'₹3,800sq.ft', numProjects: 8, priceTrend: 'Up' },
    { id: 4, locality: 'Memnagar', avgPrice:'₹3,800sq.ft', numProjects: 8, priceTrend: 'Down' },
    { id: 5, locality: 'Bodakdev', avgPrice:'₹3,800sq.ft', numProjects: 8, priceTrend: 'Down' },
    { id: 6, locality: 'Bodakdev', avgPrice:'₹3,800sq.ft', numProjects: 8, priceTrend: 'Up' },
  ]);

  const handleSaleChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
    // Perform any other actions based on the selected option
  };

  const handleYearChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);

  }
  
  // Table headings
  // const headings = ['Locality', 'Avg Price', 'No of Projects', 'Price Trend'];

  const columns = [
    { key: 'locality', label: 'Locality' },
    { key: 'avgPrice', label: 'Avg Price' },
    { key: 'numProjects', label: 'No of Projects' },
    { key: 'priceTrend', label: 'Price Trend' },
    // Add more columns as needed
  ];

  const localities = ['Ahmedabad', 'Vadodara', 'Mehsana', 'Gandhinagar', 'Surat', 'Rajkot'];
  
  return (
    <div className={Styles.topSelling_full}>

    <div className={Styles.topSellingPlace}>

      {isDetails ? <N_Header heading={heading} subheading={subHeading}/>:<SellingHeader heading={heading} subHeading={subHeading}/>}
      <div className={Styles.table_holder_full}>
      <div className={Styles.table_holder}>
      <div className={isDetails ? Styles.toggleButtons : Styles.localities}>
  {isDetails ? (
    <>
      <ToggleButton options={['Sale', 'Resale']} onChange={handleSaleChange} className={Styles.first_toggle} />
      <ToggleButton options={['3M', '6M', '1Y']} onChange={handleYearChange} className={Styles.second_toggle} />
    </>
  ) : (
    <Localities localities={localities} />
  )}
</div>
        <div className={Styles.table_d}>
        <Table columns={columns} data={data} />
        </div>
      </div>
      </div>  
    </div>
    </div>

  );
};


// const ToggleButton = ({ options, onChange }) => {
//   const [selectedOption, setSelectedOption] = useState(options[0]);

//   const handleToggle = () => {
//     const newOption = selectedOption === options[0] ? options[1] : options[0];
//     setSelectedOption(newOption);
//     onChange(newOption); // Notify parent component of the change
//   };

//   return (
//     <div className={Styles.toggleButton}>
//       <button onClick={handleToggle} className={selectedOption === options[0] ? Styles.active : ''}>
//         {options[0]}
//       </button>
//       <button onClick={handleToggle} className={selectedOption === options[1] ? Styles.active : ''}>
//         {options[1]}
//       </button>
//     </div>
//   );
// };

const ToggleButton = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleToggle = (option) => {
    setSelectedOption(option);
    onChange(option); // Notify parent component of the change
  };

  return (
    <div className={Styles.toggleButton_container}>
    <div className={Styles.toggleButton}>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleToggle(option)}
          className={selectedOption === option ? Styles.active : ''}
        >
          {option}
        </button>
      ))}
    </div>
    </div>
  );
};

const Localities = ({ localities }) => {
  const [curNumber, setCurNumber] = useState(0);

  return (
    <div className={Styles.localities}>
      {localities.map((locality, index) => (
        <NavLink
          key={index}
          to=""
          className={`${Styles.locality_link} ${index === curNumber ? Styles.active_locality_link : ''}`}
          onClick={(index) => setCurNumber(index)}
        >
          {locality}
          {console.log(`${index} ${curNumber}`)}
        </NavLink>

      ))}
    </div>
  );
};

const SellingHeader = ({heading,subHeading}) => {
  return (
    <div className={Styles.header}>
        <h2>{heading}</h2>
        <p>{subHeading}</p>
      </div>
    );
}

const Table = ({ columns, data }) => {
  return (

    <table className={Styles.dataTable}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((column, index) => (
              <td key={index}>{item[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};


Localities.propTypes = {
  localities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ToggleButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

SellingHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

TopSellingPlace.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  localities: PropTypes.arrayOf(PropTypes.string).isRequired,
  isDetails : PropTypes.bool.isRequired,
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TopSellingPlace;
export {Table, SellingHeader};


{/* <table className={Styles.dataTable}>
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.locality}</td>
              <td>{item.avgPrice}</td>
              <td>{item.numProjects}</td>
              <td>{item.priceTrend}</td>
            </tr>
          ))}
        </tbody>
</table> */}
