
import React from "react";
// import clemzyP from "./components/assets/image/clemzyP.png";

// import styled from "styled-components";


// const Background =styled.div`
//   background: black;
// `;
// const PageContent = styled.div`
//   colour: white;
// `;

function Hero(){

    return(
        <div>
            {/* <img height={200} src={clemzyP} alt="image"/> */}
            <img height={200} src={require("./components/assets/image/clemzyP.png")} alt="clemzy"/>
            <h1>I'm from Nigeria</h1>
        </div>
    );
}

export default Hero;