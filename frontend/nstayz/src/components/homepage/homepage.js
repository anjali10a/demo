import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./homepage.css";
import logo from "./img/Nstayz.png";

const HomePage = () => {
  const [where, setWhere] = useState("");
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [inputFocus, setInputFocus] = useState(false);

  const handleSearch = () => {
    console.log("Search Query:", where);
    console.log("Check-in Date:", checkinDate);
    console.log("Check-out Date:", checkoutDate);
  };

  const handleInputFocus = () => {
    setInputFocus(true);
  };

  const handleInputBlur = () => {
    setInputFocus(false);
  };

  return (
    <div>
      <div>
        <div className="learn-bar">
          <Link to="/">
            <h4>
              Learn about Guest Favourites, the most loved homes on Nstayz
            </h4>
          </Link>
        </div>
      </div>

      <div className="title-bar">
        <div className="img-mv">
          <img src={logo} alt="Logo" />

          <div className={`search-bar ${inputFocus ? "focused" : ""}`}>
            <div className="where-opt">
              <label>Where</label>
              <input
                type="text"
                placeholder="Search destinations"
                value={where}
                onChange={(e) => setWhere(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
            <div className="date-bar-in">
              <div className={`date-opt-in  ${inputFocus ? "focused" : ""}`}>
                <label>Check in</label>
                <div className="custom-datepicker">
                  <DatePicker
                    selected={checkinDate}
                    onChange={(date) => setCheckinDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Add Date"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
              </div>
            </div>

            <div className="date-bar-out">
              <div className={`date-opt-out  ${inputFocus ? "focused" : ""}`}>
                <label>Check out</label>
                <DatePicker
                  selected={checkoutDate}
                  onChange={(date) => setCheckoutDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Add Date"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </div>
            </div>

            <div className={`who-opt  ${inputFocus ? "focused" : ""}`}>
              <label>Who</label>
              <input
                type="text"
                placeholder="Add guests"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <div className="serach-bt">
                <button onClick={handleSearch}>Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed-bottom-bar">
        © 2024 Nstayz Inc PrivacyTermsSitemapCompany details
      </div>
    </div>
  );
};

export default HomePage;
