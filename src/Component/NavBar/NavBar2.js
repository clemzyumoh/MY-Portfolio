import React, { useState } from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { FaStackOverflow } from "react-icons/fa";

import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Background from "../../Assets/images/AboutMe.png";
import { useLocation } from "react-router-dom";

const DropdownButton = styled.button`
  background-color: transparent;
  color: #15dec2;
  font-size: 50px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};

  justify-content: center;
  align-items: center;
  position: fixed;
  background: url(${Background}) center/cover; /*  Use the imported image */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 200px;
`;

const NavLink = styled(RouterLink)`
  margin: 1rem;
  color: whitesmoke;
  text-decoration: none;
  &.active {
    // Style for the active link
    font-weight: bold;
    text-decoration: underline;
    color: #15dec2;
  }
`;

const NavContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #292f36;
  color: white;
  width: 100vw;
  border-bottom: 0.5px solid #15dec2;
`;
const NavFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  width: 100%;
  height: 100%;
`;
const DropdownFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  max-width: 100vw;
  height: 100%;
`;
const LogoContainer2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const LogoLink2 = styled(RouterLink)`
  font-size: 23px;

  color: #15dec2;
  margin-right: 10px;
  margin-left: 10px;
  text-decoration: none;
`;

const NavBar2 = () => {
  const location = useLocation();

  // Update active link based on current route
  React.useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveLink("Home");
        break;
      case "/resume":
        setActiveLink("Resume");
        break;
      case "/services":
        setActiveLink("Services");
        break;
      case "/portfolio":
        setActiveLink("Portfolio");
        break;
      case "/contact-me":
        setActiveLink("Contact");
        break;
      default:
        setActiveLink("Home");
        break;
    }
  }, [location.pathname]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    // Toggle body overflow
    // Toggle body overflow
    if (!isDropdownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div>
      <NavContainer2>
        <NavFlex>
          <LogoContainer2>
            <LogoLink2
              to="https://www.linkedin.com/in/clement-umoh-a17b8629b/"
              target="_blank"
            >
              <SlSocialLinkedin />
            </LogoLink2>
            <LogoLink2 to="https://twitter.com/UmohPet" target="_blank">
              {" "}
              <TiSocialTwitter />{" "}
            </LogoLink2>
            <LogoLink2 to="https://github.com/dashboard" target="_blank">
              <SlSocialGithub />
            </LogoLink2>
            <LogoLink2 to="/">
              <FaStackOverflow />
            </LogoLink2>
          </LogoContainer2>
          <DropdownButton onClick={toggleDropdown}>
            {isDropdownOpen ? <RxCross2 /> : <IoMdMenu />}{" "}
            {/* Display X when open, ☰ when closed */}
          </DropdownButton>
        </NavFlex>
      </NavContainer2>
      <DropdownMenu $isOpen={isDropdownOpen}>
        <DropdownFlex>
          <NavContainer2>
            <NavFlex>
              <LogoContainer2>
                <LogoLink2
                  to="https://www.linkedin.com/in/clement-umoh-a17b8629b/"
                  target="_blank"
                >
                  <SlSocialLinkedin />
                </LogoLink2>
                <LogoLink2 to="https://twitter.com/UmohPet" target="_blank">
                  {" "}
                  <TiSocialTwitter />{" "}
                </LogoLink2>
                <LogoLink2 to="https://github.com/dashboard" target="_blank">
                  <SlSocialGithub />
                </LogoLink2>
                <LogoLink2 to="/">
                  <FaStackOverflow />
                </LogoLink2>
              </LogoContainer2>
              <DropdownButton onClick={toggleDropdown}>
                {isDropdownOpen ? <RxCross2 /> : <IoMdMenu />}{" "}
                {/* Display X when open, ☰ when closed */}
              </DropdownButton>
            </NavFlex>
          </NavContainer2>
          <LinksContainer>
            <NavLink
              to="/"
              exact="true"
              onClick={() => handleLinkClick("Home")}
              className={`nav-item ${activeLink === "Home" ? "active" : ""}`}
            >
              <h2>Home</h2>
            </NavLink>
            <NavLink
              to="/resume"
              onClick={() => handleLinkClick("Resume")}
              className={`nav-item ${activeLink === "Resume" ? "active" : ""}`}
            >
              <h2>Resume</h2>
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => handleLinkClick("Services")}
              className={`nav-item ${
                activeLink === "Services" ? "active" : ""
              }`}
            >
              <h2>Services</h2>
            </NavLink>
            <NavLink
              to="/portfolio"
              onClick={() => handleLinkClick("Portfolio")}
              className={`nav-item ${
                activeLink === "Portfolio" ? "active" : ""
              }`}
            >
              <h2>Portfolio</h2>
            </NavLink>
            <NavLink
              to="/contact-me"
              onClick={() => handleLinkClick("Contact")}
              className={`nav-item ${activeLink === "Contact" ? "active" : ""}`}
            >
              <h2>Contact</h2>
            </NavLink>
          </LinksContainer>
        </DropdownFlex>
      </DropdownMenu>
    </div>
  );
};

export default NavBar2;
