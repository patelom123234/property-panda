import Bathroom from "@/components/common/advance-filter/Bathroom";
import Bedroom from "@/components/common/advance-filter/Bedroom";
import PriceRange from "@/components/common/advance-filter/PriceRange";
import PropertyType from "@/components/listing/sidebar/PropertyType";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeroContent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("buy");
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const containerRef = useRef(null);
  const suggestionsRef = useRef(null);
  const selectedItemsRef = useRef(null);
  const [selectedItemsVisible, setSelectedItemsVisible] = useState(false);
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const [showPropertyTypeDropdown, setShowPropertyTypeDropdown] =
    useState(false);
  const [showForSaleDropdown, setShowForSaleDropdown] = useState(false);
  const [showBedsDropdown, setShowBedsDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);

  const togglePropertyTypeDropdown = () => {
    setShowPropertyTypeDropdown(!showPropertyTypeDropdown);
    setShowForSaleDropdown(false);
    setShowBedsDropdown(false);
    setShowPriceDropdown(false);
  };

  const handleDoneButtonClick = () => {
    setShowForSaleDropdown(false);
    setShowPropertyTypeDropdown(false);
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

  const cities = [
    "Ahmedabad: Vaishnodevi, Maninagar, Satellite",
    "Ahmedabad: Bodakdev",
    "Ahmedabad: Satellite",
    "Ahmedabad: Maninagar",
    "Ahmedabad: Ranip",
    "Ahmedabad: Bopal",
    "Ahmedabad: Gota",
    "Ahmedabad: Chandkheda",
    "Amreli",
    "Anand: Vallabh Vidyanagar, Anand City",
    "Aravalli",
    "Banaskantha",
    "Bharuch: Bharuch City, Ankleshwar",
    "Bhavnagar: Ghogha Road, Vidhyanagar",
    "Botad",
    "Chhota Udaipur",
    "Dahod",
    "Dang",
    "Devbhoomi Dwarka",
    "Gandhinagar: Gandhinagar City, Sector 21, Infocity",
    "Gir Somnath",
    "Jamnagar: Digvijay Plot, Indira Marg",
    "Junagadh: Joshipura, Keshod",
    "Kutch",
    "Kheda",
    "Mahisagar",
    "Mehsana",
    "Morbi",
    "Narmada",
    "Navsari",
    "Panchmahal",
    "Patan",
    "Porbandar",
    "Rajkot: Kalawad Road, University Road, Mavdi",
    "Sabarkantha",
    "Surat: Adajan, Vesu, Varachha, Katargam",
    "Surendranagar",
    "Tapi",
    "Vadodara: Alkapuri, Fatehgunj, Gotri",
    "Valsad",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        !selectedItemsRef.current?.contains(event.target) &&
        !suggestionsRef.current?.contains(event.target)
      ) {
        setSelectedItemsVisible(false);
        setSuggestionsVisible(false);
        setSearchInput("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (selectedCities.length <= 1) {
      setSelectedItemsVisible(false);
    }
  }, [selectedCities]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value.trim();
    setSearchInput(inputValue);

    if (inputValue.length >= 3) {
      const filteredCities = cities.filter((city) =>
        city.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filteredCities);
      setSuggestionsVisible(true);
    } else {
      setSuggestions([]);
      setSuggestionsVisible(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (!selectedCities.includes(suggestion)) {
      setSelectedCities([...selectedCities, suggestion]);
    }
    setSearchInput("");
    setSuggestions([]);
    setSuggestionsVisible(false);
    setSelectedItemsVisible(false);
  };

  const handleRemoveCity = (city) => {
    const updatedCities = selectedCities.filter((c) => c !== city);
    setSelectedCities(updatedCities);

    if (updatedCities.length <= 1) {
      setSelectedItemsVisible(false);
    }
  };

  const handleDeleteButtonClick = (city) => {
    handleRemoveCity(city);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleSelectedItemsVisible = () => {
    setSelectedItemsVisible(!selectedItemsVisible);
    setShowPriceDropdown(false);
    setShowForSaleDropdown(false);
    setShowPropertyTypeDropdown(false);
    setShowBedsDropdown(false);
  };

  const toggleSuggestionsVisible = () => {
    setSuggestionsVisible(!suggestionsVisible);
  };

  const tabs = [
    { id: "buy", label: "Buy" },
    { id: "rent", label: "Rent" },
    { id: "Resale", label: "Resale" },
    { id: "PG", label: "PG" },
  ];

  const searchContainerStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "100%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    paddingLeft: "20px",
  };

  const firstContainerStyle = {
    width: "100%",
    position: "relative",
  };

  const inputContainerStyle = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    gap: "5px",
    borderRadius: "5px",
    padding: "1px",
    outline: "none",
    overflowX: "hidden",
    overflowY: "hidden",
  };

  const inputContainerFocusStyle = {
    outline: "none",
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1px",
    flexWrap: "nowrap",
    borderRadius: "5px",
    padding: "2px 4px",
    boxSizing: "border-box",
    color: "white",
    backgroundColor: "#007bff",
  };

  const itemHoverStyle = {
    backgroundColor: "#0056b3",
  };

  const itemTextStyle = {
    overflow: "hidden",
    fontSize: "12px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "50px",
    height: "20px",
    display: "inline-block",
    lineHeight: "20px",
    textAlign: "center",
  };

  const closeStyle = {
    cursor: "pointer",
    fontSize: "15px",
    lineHeight: "20px",
    textAlign: "center",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "transparent",
  };

  const closeHoverStyle = {
    backgroundColor: "#013c7b",
  };

  const searchInputStyle = {
    maxWidth: "100%",
    minWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    border: "none",
    outline: "none",
    padding: "5px",
    "::placeholder": {
      fontWeight: "bold",
      color: "rgba(0, 0, 0, 1)",
    },
  };

  const Placeholder = styled.span`
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
  `;

  const selectedItemsStyle = {
    flexWrap: "wrap",
    padding: "5px",
    gap: "5px",
    maxWidth: "195px",
    maxHeight: "200px",
    boxSizing: "border-box",
    overflowY: selectedCities.length > 1 ? "auto" : "hidden",
    backgroundColor: "white",
    border: "1px solid #ccc",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
    zIndex: "1",
    display:
      selectedItemsVisible && selectedCities.length > 1 ? "flex" : "none",
    position: "absolute",
    top: "calc(100% + 5px)",
    left: "0",
  };

  const suggestionsStyle = {
    position: "absolute",
    top: `calc(100% + ${selectedItemsRef.current?.offsetHeight || 0}px + 2px)`,
    left: "0",
    width: "100%",
    maxWidth: "195px",
    maxHeight: "200px",
    overflowY: "auto",
    backgroundColor: "white",
    border: "1px solid #ccc",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    zIndex: "2",
    borderRadius: "5px",
    display: suggestionsVisible && suggestions.length > 0 ? "block" : "none",
  };

  const suggestionStyle = {
    padding: "5px",
    cursor: "pointer",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };

  const suggestionHoverStyle = {
    backgroundColor: "#f0f0f0",
  };

  const FilterItem = styled.li`
    margin-right: auto;
    padding: 10px;

    @media (max-width: 767px) {
      padding: 5px;
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

  return (
    <div className="advance-style2 mt80 mt0-md mb60 mx-auto" data-aos="fade-up">
      <ul className="nav nav-tabs p-0">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {/* Your tab content JSX here */}
        <div
          className={`${activeTab === "buy" ? "active" : "active"} tab-pane`}
          key="buy"
        >
          <div className="advance-content-style2">
            <div className="row align-items-center justify-content-start justify-content-md-center">
              <div className="col-md-3 col-lg-4">
                <div className="advance-search-field position-relative text-start bdrr1 bdrrn-sm bb1-sm">
                  <div style={searchContainerStyle} ref={containerRef}>
                    <div style={firstContainerStyle}>
                      <div style={inputContainerStyle}>
                        {selectedCities.length > 0 && (
                          <div
                            style={{
                              ...itemStyle,
                              ...(selectedCities.length > 1
                                ? itemHoverStyle
                                : {}),
                            }}
                          >
                            <span style={itemTextStyle}>
                              {selectedCities[0]}
                            </span>
                            <span
                              style={{
                                ...closeStyle,
                                ...(selectedCities.length > 1
                                  ? closeHoverStyle
                                  : {}),
                              }}
                              onClick={() =>
                                handleRemoveCity(selectedCities[0])
                              }
                            >
                              ×
                            </span>
                          </div>
                        )}
                        {selectedCities.length > 1 && (
                          <div className="TSItems" style={{ color: "#007bff" }}>
                            +{selectedCities.length - 1}
                          </div>
                        )}
                        <input
                          type="text"
                          value={searchInput}
                          placeholder="Enter City, Locality or Project"
                          onChange={handleInputChange}
                          autoComplete="off"
                          style={{
                            ...searchInputStyle,
                            ...(searchInput ? inputContainerFocusStyle : {}),
                          }}
                          onFocus={toggleSelectedItemsVisible}
                        />
                      </div>
                      <div style={selectedItemsStyle} ref={selectedItemsRef}>
                        {selectedCities.slice(1).map((city, index) => (
                          <div key={index} style={itemStyle}>
                            <span style={itemTextStyle}>{city}</span>
                            <span
                              style={closeStyle}
                              onClick={() => handleDeleteButtonClick(city)}
                            >
                              ×
                            </span>
                          </div>
                        ))}
                      </div>
                      <div style={suggestionsStyle} ref={suggestionsRef}>
                        {suggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            style={{
                              ...suggestionStyle,
                              ...(suggestionHoverStyle,
                              { backgroundColor: "white" }),
                            }}
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-md-3 col-lg-3">
                <div className="advance-search-field position-relative text-start bdrr1 bdrrn-sm bb1-sm">
                  <form className="form-search position-relative">
                    <div className="box-search">
                      <input
                        className="form-control "
                        type="text"
                        name="search"
                        placeholder={`Property Type`}
                      />
                    </div>
                  </form>
                </div>
              </div> */}
              <div className="col-md-3 col-lg-3">
                <div className="advance-search-field position-relative text-start bdrr1 bdrrn-sm bb1-sm">
                  <FilterItem>
                    <DropdownButton onClick={togglePropertyTypeDropdown}>
                      Property Type <i className="fa fa-angle-down ms-2" />
                    </DropdownButton>
                    {showPropertyTypeDropdown && (
                      <DropdownMenu>
                        <div className="widget-wrapper bdrb1 pb25 mb0 pl20">
                          <h6 className="list-title">Property Type</h6>
                          <div className="checkbox-style1">
                            <PropertyType />
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
                </div>
              </div>
              <div className="col-md-3 col-lg-5">
                <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                  {/* <div className="advance-search-field position-relative text-start bdrr1 bdrrn-sm bb1-sm">
                    <form className="form-search position-relative">
                      <div className="box-search">
                        <input
                          className="form-control "
                          type="text"
                          name="search"
                          placeholder={`Budget`}
                        />
                      </div>
                    </form>
                  </div> */}
                  <FilterItem>
                    <DropdownButton onClick={togglePriceDropdown}>
                      Price Range <i className="fa fa-angle-down ms-2" />
                    </DropdownButton>
                    {showPriceDropdown && (
                      <DropdownMenu className="dd3">
                        <div className="widget-wrapper bdrb1 pb25 mb0 pl20 pr20">
                          <h6 className="list-title">Price Range</h6>
                          <div className="range-slider-style1">
                            <PriceRange />
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
                </div>
              </div>

              <button
                className="advance-search-icon ud-btn  ms-4"
                type="button"
                style={{
                  minWidth: "30px",
                  border: "none",
                  position: "fixed",
                  right: "100px",
                }}
              >
                <img
                  src="/voice.png"
                  alt="Search Icon"
                  style={{
                    color: "white",
                    width: "30px",
                    height: "30px",
                  }}
                />
              </button>
              <button
                className="advance-search-icon ud-btn btn-thm ms-4"
                type="button"
                onClick={() => navigate("/grid-full-4-col")}
                style={{
                  minWidth: "30px",
                  position: "fixed",
                  right: "25px",
                }}
              >
                <span className="flaticon-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
