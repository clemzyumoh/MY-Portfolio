

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as RouterLink} from 'react-router-dom';
import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { FaStackOverflow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
// import Home from './Home';
// import Resume from './Resume';
// import Services from './Services';
// import Portfolio from './Portfolio';

// const Navbar2Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
//   background-color: #333;
//   color: white;
// `;

const DropdownButton = styled.button`
  background-color: transparent;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.isopen ? 'flex' : 'none')};
  postion: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

// const DropdownItem = styled.div`
//   padding: 12px 16px;
//   cursor: pointer;
//   &:hover {
//     background-color: #ddd;
//   }
// `;

const LinksContainer = styled.div`
  
 display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NavLink = styled(RouterLink)`
   margin: 1rem;
  color: black;
  text-decoration: none;
  &.active {
     // Style for the active link
    font-weight: bold;
    text-decoration: underline;
  }  
`;

const LogoIcon = styled.span`
  margin-right: 0.5rem;
`;

const NavContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: teal;
  color: white;
`;

const LogoContainer2 = styled.div`
  display: flex;
  align-items: center;
`;
const LogoLink2 = styled(RouterLink)`
  font-size: xl;
  font-weight: bold;
  color: white;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
  text-decoration: none;
`;

// const Navbar2 = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <Navbar2Container>
//       {/* Your other Navbar2 content */}

//       <DropdownButton onClick={toggleDropdown}>
//         {isDropdownOpen ? 'X' : '☰'} {/* Display X when open, ☰ when closed */}
//       </DropdownButton>

//       <DropdownMenu isOpen={isDropdownOpen}>
//         <DropdownItem>Option 1</DropdownItem>
//         <DropdownItem>Option 2</DropdownItem>
//         <DropdownItem>Option 3</DropdownItem>
//       </DropdownMenu>
//     </Navbar2Container>
//   );
// };

// export default Navbar2;

const NavBar2 = () => {
    // const [activeLink, setActiveLink] = useState('Home');
  
    // const handleLinkClick = (link) =>{
    //   setActiveLink(link);
    // };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    const [activeLink, setActiveLink] = useState('Home');

    const handleLinkClick = (link) =>{
      setActiveLink(link);
      setIsDropdownOpen(!isDropdownOpen)
    };
  
    return(
      <div>
  
      <NavContainer2>
              {/* Logo Container */}
      <LogoContainer2>
        <LogoIcon>
          <MdEmail />
        </LogoIcon>
        <LogoLink2 to="/"  ><SlSocialLinkedin /></LogoLink2>
        <LogoLink2 to="/"  > <TiSocialTwitter /> </LogoLink2>
        <LogoLink2 to="/"  ><SlSocialGithub /></LogoLink2>
        <LogoLink2 to="/"  ><FaStackOverflow /></LogoLink2>
      </LogoContainer2>
      <DropdownButton onClick={toggleDropdown}>
        {isDropdownOpen ? <RxCross2 /> : <IoMdMenu />} {/* Display X when open, ☰ when closed */}
      </DropdownButton>
      </NavContainer2>
      <DropdownMenu isopen={isDropdownOpen}>
      <LinksContainer>
        <NavLink to="/" exact="true" onClick={() => handleLinkClick('Home')} className={`nav-item ${activeLink === 'Home' ? 'active' : ''}`}>Home</NavLink>
        <NavLink to="/resume" onClick={() => handleLinkClick('Resume')} className={`nav-item ${activeLink === 'Resume' ? 'active' : ''}`}>Resume</NavLink>
        <NavLink to="/services"  onClick={() => handleLinkClick('Services')} className={`nav-item ${activeLink === 'Services' ? 'active' : ''}`}>Services</NavLink>
        <NavLink to="/portfolio"  onClick={() => handleLinkClick('Portfolio')} className={`nav-item ${activeLink === 'Portfolio' ? 'active' : ''}`}>Portfolio</NavLink>
        <NavLink to="/contact-me" onClick={() => handleLinkClick('Contact')} className={`nav-item ${activeLink === 'Contact' ? 'active' : ''}`}>Contact</NavLink>
        </LinksContainer>
      
        {/* <LinksContainer >
        <NavLink to="/" exact="true" onClick={() => handleLinkClick('Home')} className={`nav-item ${activeLink === 'Home' ? 'active' : ''}`}>Home</NavLink>
        <NavLink to="/resume" onClick={() => handleLinkClick('Resume')} className={`nav-item ${activeLink === 'Resume' ? 'active' : ''}`}>Resume</NavLink>
        <NavLink to="/services"  onClick={() => handleLinkClick('Services')} className={`nav-item ${activeLink === 'Services' ? 'active' : ''}`}>Services</NavLink>
        <NavLink to="/portfolio"  onClick={() => handleLinkClick('Portfolio')} className={`nav-item ${activeLink === 'Portfolio' ? 'active' : ''}`}>Portfolio</NavLink>
        <NavLink to="/contact-me" onClick={() => handleLinkClick('Contact')} className={`nav-item ${activeLink === 'Contact' ? 'active' : ''}`}>Contact</NavLink>
      </LinksContainer> */}
      </DropdownMenu>
      {/* Navigation Links Container */}

      </div>
    );
  }

  export default NavBar2;