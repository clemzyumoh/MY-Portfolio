
// import { Routes, Route, Link } from "react-router-dom";
// import Contact from "./components/NavBar/Contact";
// import Home from "./components/NavBar/Home";
// import Portfolio from "./components/NavBar/Portfolio";
// import Resume from "./components/NavBar/Resume";
// import Services from "./components/NavBar/Services";


// function Nav() {
//     return(
//         <div>
//           <nav className="main-nav">
//             <Link to="/" className='nav-item'>Home</Link>
//             <Link to="/resume" className='nav-item'>Resume</Link>
//             <Link to="/services" className='nav-item'>Services</Link>
//             <Link to="/portfolio" className='nav-item'>Portfolio</Link>
//             <Link to="/contact-me" className='nav-item'>Contact</Link>
//           </nav>
//           <Routes>
//             <Route path='/' element={<Home/>}/>
//             <Route path='/resume' element={<Resume/>}/>
//             <Route path='/services' element={<Services/>}/>
//             <Route path='/portfolio' element={<Portfolio/>}/>
//             <Route path='/contact-me' element={<Contact/>}/>
//           </Routes>
//         </div>
//     );
// }

// export default Nav;

// // NavBar.js
// import React from 'react';
// import { Flex, Link } from '@chakra-ui/react';
// import { Link as RouterLink } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
//       {/* Logo */}
//       <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
//         MyLogo
//       </Link>

//       {/* Navigation Links */}
//       <Link as={RouterLink} to="#" marginRight="1rem">
//         Home
//       </Link>
//       <Link as={RouterLink} to="#" marginRight="1rem">
//         About
//       </Link>
//       <Link as={RouterLink} to="#" marginRight="1rem">
//         Services
//       </Link>
//       <Link as={RouterLink} to="#" marginRight="1rem">
//         Contact
//       </Link>
//     </Flex>
//   );
// };

// export default NavBar;

// // NavBar.js
// import React from 'react';
// import { Flex, Link, Box } from '@chakra-ui/react';
// import { Link as RouterLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // Replace with your desired FontAwesome icon

// const NavBar = () => {
//   return (
//     <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
//       {/* Logo */}
//       <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold" display="flex" alignItems="center">
//         <Box as="span" marginRight="0.5rem">
//           <FontAwesomeIcon icon={faCoffee} />
//         </Box>
//         MyLogo
//       </Link>

//       {/* Navigation Links */}
//       <Link as={RouterLink} to="#" marginRight="1rem">
//         Home
//       </Link>
//       <Link as={RouterLink} to="#" marginRight="1rem">
//         About
//       </Link>
//       <Link as={RouterLink} to="#" marginRight="1rem">
//         Services
//       </Link>
//       <Link as={RouterLink} to="#" marginRight="1rem">
//         Contact
//       </Link>
//     </Flex>
//   );
// };

// export default NavBar;

// // NavBar.js
// import React from 'react';
// import { Flex, Link, Box } from '@chakra-ui/react';
// import { Link as RouterLink, Routes, Route } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // Replace with your desired FontAwesome icon

// const Nav = () => {
//   return (
//     <div>
//       <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
//         {/* Logo */}
//         <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold" display="flex" alignItems="center">
//           <Box as="span" marginRight="0.5rem">
//             <FontAwesomeIcon icon={faCoffee} />
//           </Box>
//           MyLogo
//         </Link>

//         {/* Navigation Links */}
//         <Link as={RouterLink} to="/" className="nav-item">
//           Home
//         </Link>
//         <Link as={RouterLink} to="/resume" className="nav-item">
//           Resume
//         </Link>
//         <Link as={RouterLink} to="/services" className="nav-item">
//           Services
//         </Link>
//         <Link as={RouterLink} to="/portfolio" className="nav-item">
//           Portfolio
//         </Link>
//         <Link as={RouterLink} to="/contact-me" className="nav-item">
//           Contact
//         </Link>
//       </Flex>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/resume" element={<Resume />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/contact-me" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// };

// export default Nav;

// // NavBar.js
// import React from 'react';
// import { Link as RouterLink, Routes, Route } from 'react-router-dom';
// import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // Replace with your desired FontAwesome icon

// // Styled Components
// const NavWrapper = styled.div`
//   // Add any styles you want for the overall wrapper
// `;

// const StyledFlex = styled.div`
//   // Add any styles you want for the Flex component
// `;

// const StyledLink = styled(Link)`
//   // Add any styles you want for the Link component
// `;

// const Nav = () => {
//   return (
//     <NavWrapper>
//       <StyledFlex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
//         {/* Logo */}
//         <StyledLink as={RouterLink} to="/" fontSize="xl" fontWeight="bold" display="flex" alignItems="center">
//           <Box as="span" marginRight="0.5rem">
//             <FontAwesomeIcon icon={faCoffee} />
//           </Box>
//           MyLogo
//         </StyledLink>

//         {/* Navigation Links */}
//         <StyledLink as={RouterLink} to="/" className="nav-item">
//           Home
//         </StyledLink>
//         <StyledLink as={RouterLink} to="/resume" className="nav-item">
//           Resume
//         </StyledLink>
//         <StyledLink as={RouterLink} to="/services" className="nav-item">
//           Services
//         </StyledLink>
//         <StyledLink as={RouterLink} to="/portfolio" className="nav-item">
//           Portfolio
//         </StyledLink>
//         <StyledLink as={RouterLink} to="/contact-me" className="nav-item">
//           Contact
//         </StyledLink>
//       </StyledFlex>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/resume" element={<Resume />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/contact-me" element={<Contact />} />
//       </Routes>
//     </NavWrapper>
//   );
// };

// export default Nav;




// NavBar.js
import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink} from 'react-router-dom';
import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { FaStackOverflow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useMediaQuery } from '@react-hook/media-query';
import NavBar2 from './components/NavBar/NavBar2';





// Styled Components
const NavContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: teal;
  color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.span`
  margin-right: 0.5rem;
`;

const LogoLink = styled(RouterLink)`
  font-size: xl;
  font-weight: bold;
  color: white;
  margin-right: 1rem;
  margin-left: 1rem;
  text-decoration: none;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(RouterLink)`
  margin-right: 1rem;
  color: white;
  text-decoration: none;
  &.active {
    // Style for the active link
    font-weight: bold;
    text-decoration: underline;
  }  
`;

// const NavContainer2 = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1.5rem;
//   background-color: teal;
//   color: white;
// `;

// const LogoContainer2 = styled.div`
//   display: flex;
//   align-items: center;
// `;
// const LogoLink2 = styled(RouterLink)`
//   font-size: xl;
//   font-weight: bold;
//   color: white;
//   margin-right: 0.2rem;
//   margin-left: 0.2rem;
//   text-decoration: none;
// `;

const NavBar1 = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link) =>{
    setActiveLink(link);
  };
  return(
    <div>
            <NavContainer1>

{/* Logo Container */}
<LogoContainer>
  <LogoIcon>
    <MdEmail />
  </LogoIcon>
  <LogoLink to="/"  ><SlSocialLinkedin /></LogoLink>
  <LogoLink to="/"  > <TiSocialTwitter /> </LogoLink>
  <LogoLink to="/"  ><SlSocialGithub /></LogoLink>
  <LogoLink to="/"  ><FaStackOverflow /></LogoLink>
</LogoContainer>

{/* Navigation Links Container */}
<LinksContainer>
  <NavLink to="/" exact="true" onClick={() => handleLinkClick('Home')} className={`nav-item ${activeLink === 'Home' ? 'active' : ''}`}>Home</NavLink>
  <NavLink to="/resume" onClick={() => handleLinkClick('Resume')} className={`nav-item ${activeLink === 'Resume' ? 'active' : ''}`}>Resume</NavLink>
  <NavLink to="/services"  onClick={() => handleLinkClick('Services')} className={`nav-item ${activeLink === 'Services' ? 'active' : ''}`}>Services</NavLink>
  <NavLink to="/portfolio"  onClick={() => handleLinkClick('Portfolio')} className={`nav-item ${activeLink === 'Portfolio' ? 'active' : ''}`}>Portfolio</NavLink>
  <NavLink to="/contact-me" onClick={() => handleLinkClick('Contact')} className={`nav-item ${activeLink === 'Contact' ? 'active' : ''}`}>Contact</NavLink>
</LinksContainer>
{/* 
{/* Routes */}
{/* <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/resume" element={<Resume />} />
  <Route path="/services" element={<Services />} />
  <Route path="/portfolio" element={<Portfolio />} />
  <Route path="/contact-me" element={<Contact />} />
</Routes> */}

</NavContainer1>
    </div>
  );
};

// const NavBar2 = () => {
//   // const [activeLink, setActiveLink] = useState('Home');

//   // const handleLinkClick = (link) =>{
//   //   setActiveLink(link);
//   // };

//   return(
//     <div>

//     <NavContainer2>
//             {/* Logo Container */}
//     <LogoContainer2>
//       <LogoIcon>
//         <MdEmail />
//       </LogoIcon>
//       <LogoLink2 to="/"  ><SlSocialLinkedin /></LogoLink2>
//       <LogoLink2 to="/"  > <TiSocialTwitter /> </LogoLink2>
//       <LogoLink2 to="/"  ><SlSocialGithub /></LogoLink2>
//       <LogoLink2 to="/"  ><FaStackOverflow /></LogoLink2>
//     </LogoContainer2>
//     <LogoIcon><IoMdMenu /></LogoIcon>
//     </NavContainer2>
//     </div>
//   );
// }




// const ResponsiveNavbar = () => {
//   const isMobile = useMediaQuery('(max-width: 768px)');

//   return isMobile ? <NavContainer2 /> : <NavContainer1 />;
// };



const Nav = () => {
  // const [activeLink, setActiveLink] = useState('Home');

  // const handleLinkClick = (link) =>{
  //   setActiveLink(link);
  // };
  const ResponsiveNavbar = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
  
    return isMobile ? <NavBar2 /> : <NavBar1 />;
  };
  return (
    <>
      <ResponsiveNavbar/>
    </>
  );
};

export default Nav;


