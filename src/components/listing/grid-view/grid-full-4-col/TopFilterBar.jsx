import React, { useState } from "react";
import ListingStatus from "../../sidebar/ListingStatus";
import PropertyType from "../../sidebar/PropertyType";
import PriceRange from "../../sidebar/PriceRange";
import Bedroom from "../../sidebar/Bedroom";
import Bathroom from "../../sidebar/Bathroom";
import styled from "styled-components";

const TopFilterBar = ({
  filterFunctions,
  setCurrentSortingOption,
  colstyle,
  setColstyle,
}) => {
  const [showForSaleDropdown, setShowForSaleDropdown] = useState(false);
  const [showPropertyTypeDropdown, setShowPropertyTypeDropdown] =
    useState(false);
  const [showBedsDropdown, setShowBedsDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);

  const toggleForSaleDropdown = () => {
    setShowForSaleDropdown(!showForSaleDropdown);
    setShowPropertyTypeDropdown(false);
    setShowBedsDropdown(false);
    setShowPriceDropdown(false);
  };

  const togglePropertyTypeDropdown = () => {
    setShowPropertyTypeDropdown(!showPropertyTypeDropdown);
    setShowForSaleDropdown(false);
    setShowBedsDropdown(false);
    setShowPriceDropdown(false);
  };

  const toggleBedsDropdown = () => {
    setShowBedsDropdown(!showBedsDropdown);
    setShowForSaleDropdown(false);
    setShowPropertyTypeDropdown(false);
    setShowPriceDropdown(false);
  };

  const togglePriceDropdown = () => {
    setShowPriceDropdown(!showPriceDropdown);
    setShowForSaleDropdown(false);
    setShowPropertyTypeDropdown(false);
    setShowBedsDropdown(false);
  };

  const handleDoneButtonClick = () => {
    setShowForSaleDropdown(false);
    setShowPropertyTypeDropdown(false);
    setShowBedsDropdown(false);
    setShowPriceDropdown(false);
  };

  return (
    <Container>
      {/* <FilterList>
        <SearchBar>
          <SearchInput placeholder="Enter your keyword here" />
        </SearchBar> */}

      <FilterList>
        <SearchBar>
          <SearchInput placeholder="Enter your keyword here" />
        </SearchBar>

        <FilterItem>
          <DropdownButton onClick={toggleForSaleDropdown}>
            For Sale <i className="fa fa-angle-down ms-2" />
          </DropdownButton>
          {showForSaleDropdown && (
            <DropdownMenu>
              <div className="widget-wrapper bdrb1 pb25 mb0 pl20">
                <h6 className="list-title">Listing Status</h6>
                <div className="radio-element">
                  <ListingStatus filterFunctions={filterFunctions} />
                </div>
              </div>
              <div className="text-end mt10 pr10">
                <DoneButton
                  type="button"
                  className="done-btn ud-btn btn-thm drop_btn"
                  onClick={() => handleDoneButtonClick()}
                >
                  Done
                </DoneButton>
              </div>
            </DropdownMenu>
          )}
        </FilterItem>

        <FilterItem>
          <DropdownButton onClick={togglePropertyTypeDropdown}>
            Property Type <i className="fa fa-angle-down ms-2" />
          </DropdownButton>
          {showPropertyTypeDropdown && (
            <DropdownMenu>
              <div className="widget-wrapper bdrb1 pb25 mb0 pl20">
                <h6 className="list-title">Property Type</h6>
                <div className="checkbox-style1">
                  <PropertyType filterFunctions={filterFunctions} />
                </div>
              </div>
              <div className="text-end mt10 pr10">
                <DoneButton
                  type="button"
                  className="done-btn ud-btn btn-thm dropdown-toggle"
                  onClick={() => handleDoneButtonClick()}
                >
                  Done
                </DoneButton>
              </div>
            </DropdownMenu>
          )}
        </FilterItem>

        <FilterItem>
          <DropdownButton onClick={toggleBedsDropdown}>
            Beds / Baths <i className="fa fa-angle-down ms-2" />
          </DropdownButton>
          {showBedsDropdown && (
            <DropdownMenu className="dd4 pb20">
              <div className="widget-wrapper pl20 pr20">
                <h6 className="list-title">Bedrooms</h6>
                <div className="d-flex">
                  <Bedroom filterFunctions={filterFunctions} />
                </div>
              </div>

              <div className="widget-wrapper bdrb1 pb25 mb0 pl20 pr20">
                <h6 className="list-title">Bathrooms</h6>
                <div className="d-flex">
                  <Bathroom filterFunctions={filterFunctions} />
                </div>
              </div>
              <div className="text-end mt10 pr10">
                <DoneButton
                  type="button"
                  className="done-btn ud-btn btn-thm drop_btn4"
                  onClick={() => handleDoneButtonClick()}
                >
                  Done
                </DoneButton>
              </div>
            </DropdownMenu>
          )}
        </FilterItem>

        <FilterItem>
          <DropdownButton onClick={togglePriceDropdown}>
            Price <i className="fa fa-angle-down ms-2" />
          </DropdownButton>
          {showPriceDropdown && (
            <DropdownMenu className="dd3">
              <div className="widget-wrapper bdrb1 pb25 mb0 pl20 pr20">
                <h6 className="list-title">Price Range</h6>
                <div className="range-slider-style1">
                  <PriceRange filterFunctions={filterFunctions} />
                </div>
              </div>
              <div className="text-end mt10 pr10">
                <DoneButton
                  type="button"
                  className="done-btn ud-btn btn-thm drop_btn3"
                  onClick={() => handleDoneButtonClick()}
                >
                  Done
                </DoneButton>
              </div>
            </DropdownMenu>
          )}
        </FilterItem>
        <FilterItem>
          <AdvanceSearchButton
            data-bs-toggle="modal"
            data-bs-target="#advanceSeachModal"
          >
            <i className="flaticon-settings me-2" /> Advance Search
          </AdvanceSearchButton>
        </FilterItem>

        <SearchButton>
          <i className="flaticon-search" />
        </SearchButton>
      </FilterList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 50px;

  @media (max-width: 767px) {
    padding-bottom: 30px;
  }
`;

const FilterList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 15px;
  padding: 10px;
  min-width: 300px;

  @media (max-width: 767px) {
    justify-content: flex-start;
    border-radius: 10px;
    padding: 5px;
  }
`;

const FilterItem = styled.li`
  margin-right: 0;
  padding: 10px;

  @media (max-width: 767px) {
    padding: 5px;
  }
`;

const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  padding-right: 0px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  @media (max-width: 767px) {
    min-width: 180px;
  }
`;

const DoneButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 767px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;

const SearchBar = styled.div`
  margin-right: 20px;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    margin-right: 10px;
    margin-bottom: 5px;
  }
`;
const SearchInput = styled.input`
  width: 300px;
  border: none;
  outline: none;
  padding: 8px 16px;
  border-radius: 20px;
  background-color: #f1f1f1;
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-weight: 300;
  font-size: 16px;

  &::placeholder {
    font-family: "Open Sans", sans-serif;
    font-style: italic;
    font-weight: 300;
  }

  @media (max-width: 767px) {
    width: 200px;
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SearchButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  line-height: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 767px) {
    padding: 8px;
  }
`;

const AdvanceSearchButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export default TopFilterBar;
