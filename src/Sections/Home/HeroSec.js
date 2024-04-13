import React from "react";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import StyledText from "../../Component/Brand1";
import { FaLocationDot } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { useMediaQuery } from "@react-hook/media-query";
import ClickableContent from "../../Component/ClickableContent";
import file from "../../Assets/images/Resume1.pdf";
import "animate.css";

function Hero() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <div>
      <Main>
        {/* <div className="title-hero">
          <h1>Developer</h1>
        </div> */}
        <div
          className={
            isMobile ? "container1-1" : isTablet ? "container1-1" : "container1"
          }
        >
          <div
            className={
              isMobile
                ? "paper2-1 animate__animated animate__slideInLeft animate__slower	3s"
                : isTablet
                ? "paper2 animate__animated animate__slideInLeft animate__slower	3s"
                : "paper2 animate__animated animate__slideInLeft animate__slower	3s"
            }
          >
            <div className="paper1">
              <div className="image-content">
                <div className={isMobile ? "circularImage1" : "circularImage"}>
                  <div>
                    <img
                      src={require("../../Assets/images/real.jpg")}
                      alt="images"
                    />
                  </div>
                </div>
                <div>
                  <h3>Umoh, Clement</h3>
                  <p>Frontend Developer</p>
                </div>
              </div>
              <div className={isMobile ? "content1" : "content2"}>
                <div className="content-wrap">
                  <div className="content2-in">
                    <StyledText color="#15DEC2" $margin="10px">
                      {" "}
                      <MdEmail />{" "}
                    </StyledText>
                    <p>clemzyumoh@gmail.com</p>
                  </div>
                  <div className="content2-in">
                    <StyledText color="#15DEC2" $margin="10px">
                      {" "}
                      <FaLocationDot />{" "}
                    </StyledText>{" "}
                    <p>Nigeria</p>
                  </div>
                  <div className="content2-in">
                    <StyledText color="#15DEC2" $margin="10px">
                      {" "}
                      <FaSuitcase />{" "}
                    </StyledText>{" "}
                    <p>Fulltime / Freelance</p>
                  </div>
                  <div className="content2-in">
                    <StyledText color="#15DEC2" $margin="10px">
                      {" "}
                      <FaLink />{" "}
                    </StyledText>{" "}
                    <ClickableContent url="https://linktr.ee/clemzy24">
                      <p className="link-p">www.clementumoh.com</p>
                    </ClickableContent>
                  </div>
                  <div className="content2-in">
                    <div className={isMobile ? "Btn1" : "Btn"}>
                      {" "}
                      <p>HTML</p>{" "}
                    </div>
                    <div className={isMobile ? "Btn1" : "Btn"}>
                      {" "}
                      <p>CSS</p>{" "}
                    </div>
                    <div className={isMobile ? "Btn1" : "Btn"}>
                      {" "}
                      <p>JS</p>{" "}
                    </div>
                    <div className={isMobile ? "Btn1" : "Btn"}>
                      {" "}
                      <p>REACT</p>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <ClickableContent url={file}>
                <div className={isMobile ? "download-btn1" : "download-btn"}>
                  <p>Download CV</p> <AiOutlineDownload />
                </div>
              </ClickableContent>
            </div>
          </div>
          <div
            className={
              isMobile ? "container2-2" : isTablet ? "container2" : "container2"
            }
          >
            <div
              className={
                isMobile
                  ? "description1 animate__animated animate__slideInLeft animate__slower	3s"
                  : isTablet
                  ? "description animate__animated animate__backInDown animate__slower	3s"
                  : "description animate__animated animate__backInDown animate__slower	3s"
              }
            >
              <div
                className={
                  isMobile
                    ? "description-container1"
                    : isTablet
                    ? "description-container"
                    : "description-container"
                }
              >
                <div className="description-wrap">
                  <h1>
                    Hey, <br />
                    I'M{" "}
                    <StyledText color="#15DEC2" $lineHeight="70px">
                      CLEMZY
                    </StyledText>{" "}
                    , <br />
                    Frontend Developer.
                  </h1>
                </div>
                <div className="description-wrap">
                  <p>
                    I help business grow by crafting amazing web experience.
                    <br /> If you're looking for a developer that likes to get
                    stuff done,
                  </p>
                </div>
                <div className="description-wrap">
                  <div className="talk-flex">
                    <StyledText color="#15DEC2">
                      <h4>Let's Talk</h4>{" "}
                    </StyledText>
                    <StyledText fontSize="2rem" color="#15DEC2">
                      <MdEmail className="email" />{" "}
                    </StyledText>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-year  animate__animated animate__slideInRight animate__slower	3s">
              <div className="year-wrap">
                <StyledText fontSize="2rem" $margin="10px" color="#15DEC2">
                  <h3>4</h3>
                </StyledText>
                <div className="dscription-container">
                  <p>
                    Programming <br /> Language
                  </p>
                </div>
              </div>
              <div className="year-wrap">
                <StyledText fontSize="2rem" $margin="10px" color="#15DEC2">
                  <h3>2</h3>
                </StyledText>
                <div className="dscription-container">
                  <p>
                    Development <br /> Tools
                  </p>
                </div>
              </div>
              <div className="year-wrap">
                <StyledText fontSize="2rem" $margin="10px" color="#15DEC2">
                  <h3>1</h3>
                </StyledText>
                <div className="dscription-container">
                  <p>
                    Years of <br /> Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
}
export default Hero;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #292f36;
  margin: 0px;
  padding: 30px;
  color: white;
  .title-hero {
    color: #98faec;
    line-height: 20px;
    font-size: 3vw;
    font-family: "Montez", sans-serif;
    margin-bottom: 50px;
  }
  .paper2 {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    max-width: fit-content;
    max-height: fit-content;
    background-color: #292f36;
    border-radius: 155px 0px 150px 0px;
    border-top: 4px solid #15dec2;
    border-left: 4px solid #15dec2;
    margin-right: 170px;
  }
  .paper2-1 {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    max-width: fit-content;
    max-height: fit-content;
    background-color: #292f36;
    border-radius: 155px 0px 150px 0px;
    border-top: 4px solid #15dec2;
    border-left: 4px solid #15dec2;
  }
  .paper1 {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    max-width: fit-content;
    max-height: fit-content;
    padding: 20px;
    background-color: #292f36;
    border-radius: 150px 0px 150px 0px;
    border: 3px solid white;
  }
  .image-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .content1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
    line-height: 0%;
  }
  .content2 {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    flex-direction: column;
    line-height: 0%;
  }
  .content-wrap {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
  }
  .content2-in {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
  .circularImage {
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid #15dec2;
    margin: 0;
    padding: 0;
  }
  .circularImage1 {
    max-width: 70px;
    max-height: 70px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #15dec2;
    margin: 0;
    padding: 0;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  .download-btn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 200px;
    border-radius: 30px;
    background-color: white;
    font-size: 18px;
    padding-top: 7px;
    padding-bottom: 7px;
    margin: 10px;
    color: #292f36;
    line-height: 12px;
  }
  .download-btn1 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    border-radius: 25px;
    background-color: white;
    font-size: 14px;
    padding-top: 3px;
    padding-bottom: 3px;
    margin: 10px;
    color: #292f36;
    line-height: 10px;
  }
  .Btn {
    text-align: center;
    color: black;
    border-radius: 20px;
    width: 60px;
    background-color: #15dec2;
    font-size: 12px;
    margin: 5px;
  }
  .Btn1 {
    text-align: center;
    color: black;
    border-radius: 20px;
    width: 40px;
    background-color: #15dec2;
    font-size: 12px;
    margin: 5px;
  }
  .container1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px auto;
  }
  .container1-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px auto;
  }
  .container2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container2-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .description {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
  }
  .description1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 40px;
  }
  .description-container {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    margin-right: 140px;
  }
  .description-container1 {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    text-align: left;
  }
  .description-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
  .description-container h4 {
    font-size: 2vw;
  }
  .description-container h1 {
    line-height: normal;
    font-size: 2.7vw;
  }
  .container-year {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #1a1e23;
    padding: 10px;
    border-radius: 50px;
    line-height: 0%;
  }
  .container-year p {
    line-height: normal;
    text-align: left;
  }
  .year-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .link-p {
    color: whitesmoke;
  }
  .talk-flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .email {
    margin: 7px auto auto 7px;
  }
`;
