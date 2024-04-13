import React from "react";
import styled from "styled-components";
// import Flex from "../../Component/Flex";
import Background from "../../Assets/images/AboutMe.png";
import StyledText from "../../Component/Brand1";
import { useMediaQuery } from "@react-hook/media-query";

function AboutMe() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <div>
      <Main>
        <div
          className={
            isMobile ? "main-mobile" : isTablet ? "main-mobile" : "main2"
          }
        >
          <div
            className={
              isMobile
                ? "description-containermobile"
                : isTablet
                ? "description-container"
                : "description-container"
            }
          >
            <div
              className={
                isMobile
                  ? "aboutme-containermobile "
                  : isTablet
                  ? "aboutme-container "
                  : "aboutme-container "
              }
            >
              <h1>About Me</h1>
            </div>
            <div className="content-container ">
              <StyledText color="#98FAEC" fontSize="2rem" $margin="3px">
                <p>Hello!</p>
              </StyledText>
              <div className="content-flex">
                <p>
                  My name is Clement and I specialize in web development that
                  utilizes <StyledText color="#15DEC2">HTML</StyledText>,{" "}
                  <StyledText color="#15DEC2">CSS</StyledText>,{" "}
                  <StyledText color="#15DEC2">JS</StyledText>, <br />
                  <StyledText color="#15DEC2">REACT</StyledText> etc
                </p>
              </div>
              <div className="content-flex">
                <p>
                  I am a highly motivated individual and eternal optimist
                  dedicated to writing clear,
                  <br />
                  concise, robust codes that works. Striving to never stop
                  learning and improving.
                </p>
              </div>
              <div className="content-flex">
                <p>
                  When I'm not coding, I am surfing the{" "}
                  <StyledText color="#15DEC2">Internet</StyledText> looking for
                  new trends in Programming,
                  <br /> Playing{" "}
                  <StyledText color="#15DEC2">Football</StyledText>, or watching
                  interesting movies.
                </p>
              </div>
              <div className="content-flex">
                <p>
                  {" "}
                  I like to have my perspective and belief systems challenged so
                  that i can see the world <br />
                  through new eyes.
                </p>
              </div>
            </div>
          </div>
          <img
            className={isMobile ? "img-mobile " : isTablet ? "img " : "img "}
            src={require("../../Assets/images/About me image.png")}
            alt="images"
          />
        </div>
      </Main>
    </div>
  );
}

export default AboutMe;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  color: white;
  background: url(${Background}) center/cover; /* Use the imported image */
  .main2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .description-container {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    margin-top: 130px;
  }
  .description-containermobile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .aboutme-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #15dec2;
    border-radius: 20px 0px 20px 0px;
    background-color: #292f36;
    max-width: fit-content;
    max-height: fit-content;
    padding: 2px 30px 2px 30px;
    font-size: 1.5rem;
    line-height: 15px;
    margin-top: 20px;
    margin-left: 40px;
  }
  .aboutme-containermobile {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #15dec2;
    border-radius: 20px 0px 20px 0px;
    background-color: #292f36;
    max-width: fit-content;
    max-height: fit-content;
    padding: 2px 30px 2px 30px;
    font-size: 1rem;
    line-height: 8px;
    margin-top: 20px;
  }
  .content-container {
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: #292f36;
    max-height: fit-content;
    flex-direction: column;
    border-radius: 20px;
    padding: 20px;
    margin: 40px;
  }
  .content-flex {
    display: flex;
    justify-content: start;
    align-items: start;
    line-height: 20px;
    text-align: left;
  }
  .img {
    max-width: 80%;
    height: 550px;
    margin-top: 150px;
    padding: 30px;
  }
  .img-mobile {
    max-width: 90%;
    height: 550px;
    margin-top: 50px;
    padding: 30px;
  }
`;
