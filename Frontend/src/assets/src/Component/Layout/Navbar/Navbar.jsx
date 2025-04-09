import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faMapMarkerAlt,
  faBars,
  faTimes,
  faChevronDown,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faWhatsapp,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [location, setLocation] = useState("560079 Bangalore");
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = {
    Plants: {
      "Flower Plants": { path: "/flower-plants" },
      "Indoor Plants": { path: "/indoor-plants" },
      "Potted Plants": { path: "/potted-plants" },
      "Special Plants": { path: "/special-plants" },
    },
    Pots: {
      Plastic: { path: "/plastic" },
      Mud: { path: "/mud" },
    },
    "Soil & More": {},
    "Home Decor Plants": {},
    Seeds: {},
    Tools: {},
    Gifting: {},
    "Bulk Gifting": {},
    Others: {},
    Sale: {},
    "Best Sellers": {},
    "Plant Stands": {},
    Blog: {},
  };

  return (
    <div className="navbar-container">
      {/* Top bar with social icons and delivery message */}
      <div className="top-bar">
        <div className="social-icons">
          <a href="https://www.instagram.com/urvann.india" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/groups/217942056914835" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.youtube.com/c/UrvannAcademy" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://www.linkedin.com/company/urvann/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=919599585773&text&type=phone_number&app_absent=0" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="mailto:customersupport@urvann.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://in.pinterest.com/urvann_india/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </div>
        <div className="delivery-message">
          ✨ Free Next Day Delivery on Orders Received by 7 PM ✨
        </div>
      </div>

      {/* Main navbar */}
      <div className="main-navbar">
        <div className="logo">
          <Link to="/">
            <img src="/logo1.jpg" alt="Nurvann Logo" />
          </Link>
        </div>

        <div className="location-selector">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>{location}</span>
          <button className="change-btn">(Change)</button>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search by Products" />
          <button className="search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="nav-actions">
          <Link to="/help" className="help-btn">GET HELP</Link>
          <Link to="/login" className="login-btn">LOGIN</Link>
          <Link to="/cart" className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Navigation menu */}
      <div className={`nav-menu ${isMenuOpen ? "open" : ""}`} ref={dropdownRef}>
        <ul className="menu-items">
          {Object.keys(categories).map((key) => (
            <li
              key={key}
              className={`menu-item dropdown ${activeDropdown === key ? "active" : ""}`}
              onMouseEnter={() => setActiveDropdown(key)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to={`/${key}`} onClick={(e) => e.preventDefault()}>
                {key}
              </Link>
              <FontAwesomeIcon icon={faChevronDown} />

              {activeDropdown === key && Object.keys(categories[key]).length > 0 && (
                <div className="dropdown-menu">
                  <div className="dropdown-grid">
                    {Object.keys(categories[key]).map((subKey) => (
                      <div key={subKey} className="dropdown-column">
                        <ul>
                          <li>
                            <Link state={subKey} to={categories[key][subKey].path}>{subKey}</Link>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
