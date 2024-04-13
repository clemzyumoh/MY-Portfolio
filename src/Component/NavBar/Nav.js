import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { FaStackOverflow } from "react-icons/fa";
import { useMediaQuery } from "@react-hook/media-query";
import NavBar2 from "./NavBar2";

import { useState } from "react";
import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

const NavContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #292f36;
  color: white;
  border-bottom: 0.5px solid #15dec2;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LogoLink = styled.a`
  font-size: 23px;
  color: #15dec2;
  margin-right: 15px;
  margin-left: 15px;
  text-decoration: none;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled(NavLink)`
  margin: auto 15px;
  color: whitesmoke;
  text-decoration: none;
  &.active {
    font-weight: bold;
    color: #15dec2;
    text-decoration: underline;
  }
`;

const NavBar1 = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("Home");

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

  return (
    <NavContainer1>
      <LogoContainer>
        <LogoLink
          href="https://www.linkedin.com/in/clement-umoh-a17b8629b/"
          target="_blank"
        >
          <SlSocialLinkedin />
        </LogoLink>
        <LogoLink href="https://twitter.com/UmohPet" target="_blank">
          <TiSocialTwitter />
        </LogoLink>
        <LogoLink href="https://github.com/dashboard" target="_blank">
          <SlSocialGithub />
        </LogoLink>
        <LogoLink href="/">
          <FaStackOverflow />
        </LogoLink>
      </LogoContainer>
      <LinksContainer>
        <NavItem
          to="/"
          exact="true"
          onClick={() => setActiveLink("Home")}
          className={`nav-item ${activeLink === "Home" ? "active" : ""}`}
        >
          <h3>Home</h3>
        </NavItem>
        <NavItem
          to="/resume"
          onClick={() => setActiveLink("Resume")}
          className={`nav-item ${activeLink === "Resume" ? "active" : ""}`}
        >
          <h3>Resume</h3>
        </NavItem>
        <NavItem
          to="/services"
          onClick={() => setActiveLink("Services")}
          className={`nav-item ${activeLink === "Services" ? "active" : ""}`}
        >
          <h3>Services</h3>
        </NavItem>
        <NavItem
          to="/portfolio"
          onClick={() => setActiveLink("Portfolio")}
          className={`nav-item ${activeLink === "Portfolio" ? "active" : ""}`}
        >
          <h3>Portfolio</h3>
        </NavItem>
        <NavItem
          to="/contact-me"
          onClick={() => setActiveLink("Contact")}
          className={`nav-item ${activeLink === "Contact" ? "active" : ""}`}
        >
          <h3>Contact</h3>
        </NavItem>
      </LinksContainer>
    </NavContainer1>
  );
};

const Nav = () => {
  const ResponsiveNavbar = () => {
    const isMobile = useMediaQuery("(max-width: 980px)");

    return isMobile ? <NavBar2 /> : <NavBar1 />;
  };
  return (
    <>
      <ResponsiveNavbar />
    </>
  );
};

export default Nav;
