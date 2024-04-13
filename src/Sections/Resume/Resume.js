import styled from "styled-components";
import Footer from "../../Component/Footer";
import { Link as RouterLink } from "react-router-dom";
import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { FaStackOverflow } from "react-icons/fa";

import StyledText from "../../Component/Brand1";
import { useMediaQuery } from "@react-hook/media-query";
import UnderLine from "../../Component/Line";
// import DownloadButton from "../../Component/DownloadBtn";
import DownloadLink from "../../Component/DownloadBtn";
import file from "../../Assets/images/Resume1.pdf";

const LogoLink = styled(RouterLink)`
  font-size: xl;
  font-weight: bold;
  color: #15dec2;
  margin-right: 1rem;
  margin-left: 1rem;
  text-decoration: none;
`;

function Resume() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <div>
      <Main>
        <div
          className={
            isMobile ? "about-flex-m" : isTablet ? "about-flex-m" : "about-flex"
          }
        >
          <div
            className={
              isMobile
                ? "img-container-m"
                : isTablet
                ? "img-container-m"
                : "img-container"
            }
          >
            <img
              src={require("../../Assets/images/imgresume.png")}
              alt="images"
            />
            <div className="img-content">
              <h2> Clement Umoh</h2>
              <p>Developer</p>

              <div className="logo-container">
                <LogoLink
                  to="https://www.linkedin.com/in/clement-umoh-a17b8629b/"
                  target="_blank"
                >
                  <SlSocialLinkedin />
                </LogoLink>
                <LogoLink to="https://twitter.com/UmohPet" target="_blank">
                  {" "}
                  <TiSocialTwitter />{" "}
                </LogoLink>
                <LogoLink to="https://github.com/dashboard" target="_blank">
                  <SlSocialGithub />
                </LogoLink>
                <LogoLink to="/">
                  <FaStackOverflow />
                </LogoLink>
              </div>
            </div>
          </div>
          <div className="about-me">
            <StyledText fontSize="1.5rem" color="#15DEC2">
              <h2>About me</h2>
            </StyledText>
            <div className="content-container">
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
              <DownloadLink
                url={file}
                fileName="resume.pdf"
                buttonText="Download Resume"
              />
            </div>
          </div>
        </div>
        <div className="resume-container">
          <div className="sections">
            <div
              className={
                isMobile ? "heading-m" : isTablet ? "heading-m" : "heading"
              }
            >
              <StyledText fontSize="1.5rem" color="#15DEC2">
                <p>Profile</p>
              </StyledText>
              <UnderLine lineLength={80} widthUnit="vw" />
            </div>
            <div className="profile">
              <div className="content-flex">
                <p>
                  Experienced and dynamic Intermediate Frontend Developer with
                  experience in crafting engaging and intuitive web
                  applications. <br />
                  Proficient in a wide range of front-end technologies including
                  HTML5, CSS3, JavaScript, and popular frameworks/libraries like
                  React.js. <br />
                  Demonstrated ability to design and implement responsive,
                  cross-browser compatible interfaces that enhance user
                  experience and drive engagement.
                  <br />
                  Skilled in optimizing website performance and ensuring code
                  scalability and maintainability.
                  <br />
                  Strong problem-solving skills and a collaborative team player
                  with a passion for continuous learning and growth in the
                  rapidly evolving field of web development.
                </p>
              </div>
            </div>
          </div>
          <div className="sections">
            <div
              className={
                isMobile ? "heading-m" : isTablet ? "heading-m" : "heading"
              }
            >
              <StyledText fontSize="1.5rem" color="#15DEC2">
                <p>Education</p>
              </StyledText>
              <UnderLine lineLength={80} widthUnit="vw" />
            </div>
            <div className="profile">
              <div className="skills-flex">
                <div
                  className={
                    isMobile
                      ? "list-flex-m"
                      : isTablet
                      ? "list-flex"
                      : "list-flex"
                  }
                >
                  <h4>Higher National Diploma in Petroleum Engineering :</h4>
                  <p>Petroleum Training Institute (2019-2024).</p>
                </div>
                <div
                  className={
                    isMobile
                      ? "list-flex-m"
                      : isTablet
                      ? "list-flex"
                      : "list-flex"
                  }
                >
                  <h4>React Basics</h4>
                  <div
                    className={
                      isMobile
                        ? "btn-flex-m"
                        : isTablet
                        ? "btn-flex"
                        : "btn-flex"
                    }
                  >
                    <p>By Meta through Coursera (Jan.2, 2024)</p>
                    <DownloadLink
                      url="https://www.coursera.org/account/accomplishments/verify/YWZ582EB2RHH"
                      fileName="resume.pdf"
                      buttonText="view"
                    />
                  </div>
                </div>
                <div
                  className={
                    isMobile
                      ? "list-flex-m"
                      : isTablet
                      ? "list-flex"
                      : "list-flex"
                  }
                >
                  <h4>Version Control</h4>
                  <div
                    className={
                      isMobile
                        ? "btn-flex-m"
                        : isTablet
                        ? "btn-flex"
                        : "btn-flex"
                    }
                  >
                    <p>By Meta through Coursera (Dec.14, 2023)</p>
                    <DownloadLink
                      url="https://www.coursera.org/account/accomplishments/verify/3RXJ7PTJ2F33"
                      fileName="resume.pdf"
                      buttonText="view"
                    />
                  </div>
                </div>
                <div
                  className={
                    isMobile
                      ? "list-flex-m"
                      : isTablet
                      ? "list-flex"
                      : "list-flex"
                  }
                >
                  <h4>Programming with JavaScript</h4>
                  <div
                    className={
                      isMobile
                        ? "btn-flex-m"
                        : isTablet
                        ? "btn-flex"
                        : "btn-flex"
                    }
                  >
                    <p>By Meta through Coursera (Dec.13, 2023)</p>
                    <DownloadLink
                      url="https://www.coursera.org/account/accomplishments/verify/WUQBNV8M6CJC"
                      fileName="resume.pdf"
                      buttonText="view"
                    />
                  </div>
                </div>
                <div
                  className={
                    isMobile
                      ? "list-flex-m"
                      : isTablet
                      ? "list-flex"
                      : "list-flex"
                  }
                >
                  <h4>HTML and CSS in depth :</h4>
                  <div
                    className={
                      isMobile
                        ? "btn-flex-m"
                        : isTablet
                        ? "btn-flex"
                        : "btn-flex"
                    }
                  >
                    <p>By Meta through Coursera (Dec.29, 2023)</p>
                    <DownloadLink
                      url="https://www.coursera.org/account/accomplishments/verify/UNEEQ5HKPKQG"
                      fileName="resume.pdf"
                      buttonText="view"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sections">
            <div
              className={
                isMobile ? "heading-m" : isTablet ? "heading-m" : "heading"
              }
            >
              <StyledText fontSize="1.5rem" color="#15DEC2">
                <p>Skills</p>
              </StyledText>
              <UnderLine lineLength={80} widthUnit="vw" />
            </div>
            <div className="profile">
              <div className="skills-flex">
                <div
                  className={
                    isMobile
                      ? "list-flex-m"
                      : isTablet
                      ? "list-flex"
                      : "list-flex"
                  }
                >
                  <h4>Language :</h4>
                  <p>JavaScript.</p>
                </div>
                <div
                  className={
                    isMobile
                      ? "list-flex-m"
                      : isTablet
                      ? "list-flex"
                      : "list-flex"
                  }
                >
                  <h4>Web technologies :</h4>
                  <p>HTML, CSS, JavaScript.</p>
                </div>
                <div
                  className={
                    isMobile
                      ? "list-flex-m"
                      : isTablet
                      ? "list-flex"
                      : "list-flex"
                  }
                >
                  <h4>Lib/frameworks:</h4>
                  <p>ReactJS, TailwindCSS.</p>
                </div>
                <div
                  className={
                    isMobile
                      ? "list-flex-m"
                      : isTablet
                      ? "list-flex"
                      : "list-flex"
                  }
                >
                  <h4>Soft Skills :</h4>
                  <p>
                    Communication, Critical thinking and Problem Solving etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sections">
            <div
              className={
                isMobile ? "heading-m" : isTablet ? "heading-m" : "heading"
              }
            >
              <StyledText fontSize="1.5rem" color="#15DEC2">
                <p>Projects</p>
              </StyledText>
              <UnderLine lineLength={80} widthUnit="vw" />
            </div>
            <div className="profile">
              <div className="project-flex">
                <h4>
                  Little-Lemon Restaurant- ( HTML, CSS, JavaScript, Bootstrap)
                </h4>
                <p>
                  {" "}
                  This project aimed to create an immersive digital space that
                  not only showcases the restaurant's offerings but also
                  provides a
                  <br />
                  seamless and enjoyable browsing experience for visitors.
                </p>
              </div>
              <div className="project-flex">
                <h4>
                  Ecommerce Email Campaign for MANGO- ( HTML, CSS, Responsive
                  Design)
                </h4>
                <p>
                  {" "}
                  The design and content were meticulously tailored to reflect
                  MANGO's identity, ensuring a seamless and immersive experience
                  for recipients.
                </p>
              </div>
            </div>
          </div>
          <div className="sections">
            {" "}
            <DownloadLink
              url={file}
              fileName="resume.pdf"
              buttonText="Download Resume"
            />
          </div>
        </div>
        <Footer />
      </Main>
    </div>
  );
}

export default Resume;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #1a1e23;
  width: 100%;
  .about-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .about-flex-m {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  .img-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    width: 25vw;
    margin-top: 50px;
  }
  .img-container-m {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    max-width: 80vw;
    margin-top: 30px;
  }
  img {
    border: 1px solid #15dec2;
    width: 100%;
  }
  .img-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    bottom: 15px;
    left: auto;
    line-height: 2px;
    right: auto;
    max-width: 80vw;
  }
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
  }

  .about-me {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    color: whitesmoke;
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
  .profile .content-flex p {
    line-height: 30px;
  }
  .resume-container {
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: #292f36;
    max-height: fit-content;
    flex-direction: column;
    border-radius: 20px;
    padding: 40px;
    margin: 40px;
  }
  .heading {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    text-align: left;
    line-height: 0%;
  }
  .heading-m {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    line-height: 0%;
  }
  .sections {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: whitesmoke;
    margin: 20px auto;
  }
  .profile {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    color: whitesmoke;
    width: 100%;
  }
  .list-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .list-flex-m {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 20px auto;
  }
  .list-flex-m p {
    margin-top: 0px;
  }
  .skills-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  .project-flex {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    text-align: left;
  }
  .project-flex p {
    margin-top: 0px;
  }
  .project-flex h4 {
    margin-bottom: 10px;
  }
  .download-button {
    background-color: #15dec2;
    color: #1a1e23;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    margin-left: 20px;
  }
  .btn-flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-flex-m {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
`;
