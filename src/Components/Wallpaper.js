// src/components/Wallpaper.js
import React, { useState, useEffect } from "react";
import axios from "../axios"; // Update the import to use your axios instance
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal"; // Import LoginModal component
import SignupModal from "./SignupModal"; // Import SignupModal component
import "../Styles/home.css";
import 'react-responsive-modal/styles.css';

const Wallpaper = () => {
  const navigate = useNavigate();

  const [locationsData, setLocationsData] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [inputText, setInputText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const response = await axios.get("/locations/getAllLocations");
      setLocationsData(response.data.locations);
    } catch (error) {
      setError("Error fetching locations: " + error.message);
      console.error("Error fetching locations:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRestaurants = async (city) => {
    setLoading(true);
    try {
      const response = await axios.get(`/restaurants/getRestaurantsByLocation/${city}`);
      setRestaurants(response.data.restaurants);
      setSuggestions([]);
    } catch (error) {
      setError("Error fetching restaurants: " + error.message);
      console.error("Error fetching restaurants:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLocation = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    fetchRestaurants(city);
  };

  const handleSearch = (event) => {
    const text = event.target.value;
    const filteredRestaurants = restaurants.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions(filteredRestaurants);
    setInputText(text);
  };

  const handleSuggestionClick = (suggestion) => {
    if (suggestion._id) {
      navigate(`/details/${suggestion._id}`);
    } else {
      console.error("Invalid suggestion:", suggestion);
    }
  };

  const handleOpenLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  const handleOpenSignupModal = () => {
    setOpenSignupModal(true);
  };

  const handleCloseSignupModal = () => {
    setOpenSignupModal(false);
  };

  return (
    <div>
      <img src="./Assets/food.png" alt="Food" id="myFoodImg" />
      <div id="myTop">
        <div className="inner-div">
          <button className="loginBtn" onClick={handleOpenLoginModal}>Login</button>
          <button className="accountBtn" onClick={handleOpenSignupModal}>Create an account</button>
        </div>
        <div className="myLogo">e!</div>
        <div className="mainTitle">
          Find the best restaurants, cafes, and bars
        </div>
        <div className="searchDiv">
          <div>
            <select
              className="myLocations"
              defaultValue=""
              onChange={handleLocation}
              aria-label="Select City"
            >
              <option value="" disabled>
                --Select City--
              </option>
              {locationsData.map((item) => (
                <option key={item.location_id} value={item.name}>
                  {`${item.name}, ${item.city}`}
                </option>
              ))}
            </select>
          </div>
          <div className="restSearch">
            <i className="bi bi-search searchIcon"></i>
            <input
              type="text"
              className="searchInput"
              placeholder="Search for restaurants"
              value={inputText}
              onChange={handleSearch}
              aria-label="Search for restaurants"
            />
            {suggestions.length > 0 && (
              <ul className="suggestionsList">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {`${suggestion.name}   ${suggestion.city}`}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {loading && <div>Loading...</div>}
        {error && <div className="error">{error}</div>}
      </div>

      <LoginModal open={openLoginModal} onClose={handleCloseLoginModal} />
      <SignupModal open={openSignupModal} onClose={handleCloseSignupModal} />
    </div>
  );
};

export default Wallpaper;
