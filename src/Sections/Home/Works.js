import React from "react";
import styled from "styled-components";

// import Background from "../../Assets/images/portImage.png";
import StyledText from "../../Component/Brand1";
import UnderLine from "../../Component/Line";
import ClickableContent from "../../Component/ClickableContent";
import { useMediaQuery } from "@react-hook/media-query";
import NavBtn from "../../Component/NavBtn";

function Works({ isVisible }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <div>
      <Main>
        <div className="work-container">
          <div className="heading-container">
            <div className="heading  ">
              <StyledText fontSize="1.5rem" color="#15DEC2">
                <h1>Portfolio</h1>
              </StyledText>
              <UnderLine lineLength={180} />
            </div>
            <p>I had the pleasure on working on these awesome projects</p>
          </div>
          <div
            className={
              isMobile
                ? "project-containermobile"
                : isTablet
                ? "project-containermobile"
                : "project-container"
            }
          >
            <ClickableContent url="https://65eb9688aaf1ae28d6f26a45--relaxed-elf-173c53.netlify.app/">
              <img
                className={
                  isMobile ? "img-mobile " : isTablet ? "img " : "img "
                }
                src={require("../../Assets/images/restaurant-Image.png")}
                alt="images"
              />
            </ClickableContent>
            <div className="content-container">
              <div className="content-flex">
                <div
                  className={
                    isMobile ? "content-headingmobile" : "content-heading"
                  }
                >
                  <div className="head-lemon">
                    <StyledText fontSize="1.4rem" color="#15DEC2" $margin="4px">
                      <h3>Little-Lemon</h3>
                    </StyledText>
                    <UnderLine lineLength={150} />
                  </div>

                  <h2> Restaurant Website</h2>
                </div>
                <StyledText fontSize="1rem">
                  <p>
                    Transforming culinary experiences through an enticing online
                    presence
                  </p>
                </StyledText>
              </div>
              <div className="content">
                <p>
                  Developed and designed a vibrant and user-friendly <br />
                  website for Little-Lemon, a unique and contemporary <br />
                  restaurant. This project aimed to create an immersive <br />
                  digital space that not only showcases the restaurant's
                  <br />
                  offerings but also provides a seamless and enjoyable <br />
                  browsing experience for visitors.
                </p>
                <p>Tech Stack: HTML, CSS, JavaScript, Bootstrap</p>
              </div>
              <ClickableContent url="https://65eb9688aaf1ae28d6f26a45--relaxed-elf-173c53.netlify.app/">
                <StyledText color="#15DEC2">
                  <h5>View Project</h5>
                </StyledText>
              </ClickableContent>
            </div>
          </div>
          <div
            className={
              isMobile
                ? "project-containermobile"
                : isTablet
                ? "project-containermobile"
                : "project-container"
            }
          >
            <div className="content-container">
              <div className="content-flex">
                <div
                  className={
                    isMobile ? "content-headingmobile" : "content-heading"
                  }
                >
                  <div className={isMobile ? "mango-flex-m" : "mango-flex"}>
                    <h2>Ecommerce Email Campaign for </h2>{" "}
                    <div className="head-lemon">
                      <StyledText
                        fontSize="1.4rem"
                        color="#15DEC2"
                        $margin="4px"
                      >
                        <h3>MANGO</h3>
                      </StyledText>
                      <UnderLine lineLength={50} />
                    </div>
                  </div>
                </div>
                <StyledText fontSize="1rem">
                  <p>
                    Elevating brand engagement through a captivating
                    <br /> email marketing strategy
                  </p>
                </StyledText>
                <div className="content">
                  <p>
                    Crafted a dynamic and visually appealing email <br />
                    campaign for MANGO, a leading ecommerce brand.
                    <br />
                    This campaign aimed to enhance customer interaction,
                    <br />
                    drive sales, and promote brand loyalty. The design
                    <br />
                    and content were meticulously tailored to reflect
                    <br />
                    MANGO's identity, ensuring a seamless and immersive
                    <br />
                    experience for recipients.
                  </p>
                  <p>Tech Stack: HTML, CSS, Responsive Design</p>
                </div>
                className="animate__animated animate__slideInLeft"
                <ClickableContent url="https://ecommerce-email.onrender.com">
                  <StyledText color="#15DEC2">
                    <h5>View Project</h5>
                  </StyledText>
                </ClickableContent>
              </div>
            </div>
            <ClickableContent url="https://ecommerce-email.onrender.com">
              <img
                className={
                  isMobile ? "img-mobile " : isTablet ? "img " : "img "
                }
                src={require("../../Assets/images/email-Image.png")}
                alt="images"
              />
            </ClickableContent>
          </div>

          <NavBtn
            isVisible={isVisible}
            destination="/portfolio"
            buttonText="View Projects"
          />
        </div>
      </Main>
    </div>
  );
}

export default Works;

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #1a1e23;
  margin: 0px;
  padding: 0px;
  color: white;
  overflow-x: hidden;
  .work-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 50px auto;
  }
  .heading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .head-lemon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 22px;
  }

  .heading h1,
  .head-lemon h3 {
    margin-bottom: 0px;
  }

  .project-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  .project-containermobile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .img {
    max-width: 500px;
    height: 500px;
    margin-top: 22px;
    padding: 30px;
    border-radius: 0% 20% 0% 20%;
    object-fit: cover;
  }
  .img-mobile {
    max-width: 70%;
    height: 300px;
    margin: 10px 15px 10px 15px;
    border-radius: 0% 20% 0% 20%;
    object-fit: cover;
  }
  .content-container {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    margin: 50px;
  }
  .content-heading {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-headingmobile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .content-headingmobile h2 {
    margin-top: 0px;
  }
  .mango-heading {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    line-height: 30px;
    font-size: 1rem;
    text-align: left;
  }
  .content-flex {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    text-align: left;
  }
  .download-button {
    background-color: #15dec2;
    color: #1a1e23;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    margin: 30px auto;
  }
  .mango-flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mango-flex-m {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .mango-flex-m h2 {
    margin-bottom: 0px;
  }
`;
