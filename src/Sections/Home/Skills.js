import React from "react";
import styled from "styled-components";
// import Flex from "../../Component/Flex";
import Background from "../../Assets/images/SkillsImage.png";
import StyledText from "../../Component/Brand1";
import UnderLine from "../../Component/Line";

import { useMediaQuery } from "@react-hook/media-query";

function Skills() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <div>
      <Main>
        <div className="skills-container">
          <div className="head-container">
            <div className="heading">
              <StyledText fontSize="1.5rem" color="#15DEC2">
                <h1>Services</h1>
              </StyledText>
              <UnderLine lineLength={80} />
            </div>
            <ul className={isMobile ? "list-m" : isTablet ? "list" : "list"}>
              <div className="list-flex">
                <li>Website Design and Development</li>
                <li>Responsive Web Design</li>
                <li>User Interface (UI) Development</li>
                <li>Frontend Framework Implementation</li>
                <li>Single Page Application (SPA) Development</li>
              </div>
              <div className="list-flex">
                <li>Cross-Browser Compatibility Testing</li>
                <li>Performance Optimization</li>
                <li>Accessibility Implementation</li>
                <li>Integration with Backend Services</li>
                <li>Version Control and Collaboration</li>
              </div>
            </ul>
          </div>
          <div className="head-container">
            <div className="heading">
              <StyledText fontSize="1.5rem" color="#15DEC2">
                <h1>Skills</h1>
              </StyledText>
              <UnderLine lineLength={80} />
            </div>
            <p>I am striving to never stop learning and improving</p>
          </div>

          <div
            className={
              isMobile
                ? "img-containermobile"
                : isTablet
                ? "img-container"
                : "img-container"
            }
          >
            <div className="img-flex">
              <img src={require("../../Assets/images/HTML.png")} alt="images" />
              <img src={require("../../Assets/images/CSS.png")} alt="images" />
            </div>
            <div className="img-flex">
              <img src={require("../../Assets/images/JS.png")} alt="images" />
              <img
                src={require("../../Assets/images/REACT.png")}
                alt="images"
              />
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
}
export default Skills;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${Background}) center/cover; /* Use the imported image */
  color: white;
  margin: 0px;
  padding: 0px;

  .skills-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .heading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    line-height: 0%;
    margin: 100px auto 30px auto;
  }
  .head-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px auto;
  }
  .heading-container p {
    line-height: normal;
    text-align: center;
    margin: 25px;
  }
  .list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: whitesmoke;
    width: 60vw;
  }
  .list-m {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: whitesmoke;
    width: 80vw;
  }
  .list-flex {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    color: whitesmoke;
    width: 60vw;
  }

  li {
    margin: 10px;
  }

  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px auto;
  }
  .heading h1 {
    margin-bottom: 0px;
  }
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-containermobile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .img-flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 90px;
    height: 120px;
    margin-top: 22px;
    padding: 30px;
  }
`;
