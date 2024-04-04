import { useState, useEffect } from "react";
import React from "react";
import SelectDropdown from "./SelectDropdown";
import { useNavigate } from "react-router-dom";

const HeroContent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("buy");
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const containerRef = React.useRef(null);
  const suggestionsRef = React.useRef(null);
  const selectedItemsRef = React.useRef(null);

  const cities = [
    "Ahmedabad: Vaishnodevi, Maninagar, Satellite",
    "Ahmedabad: Bodakdev",
    "Ahmedabad:  Satellite",
    "Ahmedabad:  Maninagar",
    "Ahmedabad : Ranip",
    "Ahmedabad:  Bopal",
    "Ahmedabad:  Gota",
    "Ahmedabad:  Chandkheda",
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
        !selectedItemsRef.current.contains(event.target) &&
        !suggestionsRef.current.contains(event.target)
      ) {
        selectedItemsRef.current?.style.setProperty(
          "display",
          "none",
          "important"
        ); // Hide selected items container
        suggestionsRef.current?.style.setProperty(
          "display",
          "none",
          "important"
        ); // Hide suggestions container
        setSearchInput(""); // Clear input field
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (event) => {
    const inputValue = event.target.value.trim();
    setSearchInput(inputValue);

    if (inputValue.length >= 3) {
      const filteredCities = cities.filter((city) =>
        city.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filteredCities);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (!selectedCities.includes(suggestion)) {
      setSelectedCities([...selectedCities, suggestion]);
    }
    setSearchInput("");
    setSuggestions([]);
  };

  const handleRemoveCity = (city) => {
    const updatedCities = selectedCities.filter((c) => c !== city);
    setSelectedCities(updatedCities);

    if (updatedCities.length === 1) {
      selectedItemsRef.current?.style.setProperty(
        "display",
        "none",
        "important"
      );
    }
  };

  const handleDeleteButtonClick = (city) => {
    handleRemoveCity(city);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
    // border: "1px solid #ccc",
    // border: "1px solid blue",
  };

  const firstContainerStyle = {
    // maxWidth: "250px",
    width: "100%",
    height: "100%",
    position: "relative",
  };

  const inputContainerStyle = {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    gap: "5px",
    borderRadius: "5px",
    padding: "1px",
    outline: "none",
    overflowX: "hidden",
    boxSizing: "border-box",
    // border: "1px solid #ccc",
    // boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
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
    // maxWidth: "75px",
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
      color: "rgba(0, 0, 0, 1)", // Darker color than default
    },
  };

  const selectedItemsStyle = {
    flexWrap: "wrap",
    padding: "5px",
    gap: "5px",
    maxWidth: "195px",
    maxHeight: "200px",
    boxSizing: "border-box",
    overflowY: "auto",
    backgroundColor: "white",
    border: "1px solid #ccc",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
    zIndex: "1",
    display: selectedCities.length > 0 ? "flex" : "none",
    position: "absolute",
    top: "100%",
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
    display: suggestions.length > 0 ? "block" : "none",
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
        {tabs.map((tab) => (
          <div
            className={`${activeTab === tab.id ? "active" : ""} tab-pane`}
            key={tab.id}
          >
            <div className="advance-content-style2">
              <div className="row align-items-center justify-content-start justify-content-md-center">
                <div className="col-md-3 col-lg-4">
                  <div className="advance-search-field position-relative text-start bdrr1 bdrrn-sm bb1-sm">
                    <div style={searchContainerStyle} ref={containerRef}>
                      <div style={firstContainerStyle} ref={containerRef}>
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
                            <div
                              className="TSItems"
                              style={{ color: "#007bff" }}
                            >
                              +{selectedCities.length - 1}
                            </div>
                          )}
                          <input
                            type="text"
                            placeholder="Enter City Locality, Project"
                            value={searchInput}
                            onChange={handleInputChange}
                            autoComplete="off"
                            style={{
                              ...searchInputStyle,
                              ...(searchInput ? inputContainerFocusStyle : {}),
                            }}
                            onFocus={() => {
                              setSelectedCities(selectedCities);
                              if (selectedCities.length > 1) {
                                selectedItemsRef.current.style.display = "flex";
                              }
                            }}
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

                <div className="col-md-3 col-lg-3">
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
                </div>

                <div className="col-md-6 col-lg-5">
                  <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                    <div className="advance-search-field position-relative text-start bdrr1 bdrrn-sm bb1-sm">
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
                    </div>
                    <button
                      className="advance-search-icon ud-btn  ms-4"
                      type="button"
                      style={{ minWidth: "30px", border: "none" }}
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
                      style={{ minWidth: "30px" }}
                    >
                      <span className="flaticon-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
