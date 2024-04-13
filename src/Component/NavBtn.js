// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

// function NavBtn() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     // Navigate to the desired NavLink
//     navigate("/portfolio");
//   };

//   return (
//     <div>
//       <Button>
//         {/* Button to navigate to the "About" NavLink */}
//         <button onClick={handleClick}>View Project</button>
//       </Button>
//     </div>
//   );
// }

// export default NavBtn;

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled component for the button
const Button = styled.button`
  // Add your button styling here
  background-color: #15dec2;
  color: #1a1e23;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  margin-left: 20px;
`;

function NavBtn({ isVisible = true, destination, buttonText }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the specified destination
    navigate(destination);
  };

  // Render the button only if it's visible
  if (!isVisible) return null;

  return <Button onClick={handleClick}>{buttonText}</Button>;
}

export default NavBtn;
