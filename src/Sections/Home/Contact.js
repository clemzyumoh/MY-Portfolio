import React from "react";
import StyledText from "../../Component/Brand1";
import UnderLine from "../../Component/Line";
import styled from "styled-components";
import ContactForm from "../../Component/ContactForm";
import { useMediaQuery } from "@react-hook/media-query";

function Contact() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  // const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <div>
      <Main>
        <div className="heading-container">
          <div className="heading">
            <StyledText fontSize="1.5rem" color="#15DEC2">
              <h1>Contact</h1>
            </StyledText>
            <UnderLine lineLength={150} />
          </div>
          <p>I'm currently available for works/ projects</p>
        </div>

        <div className={isMobile ? "heading2-m" : "heading2"}>
          <StyledText $lineHeight="10px" color="#15DEC2">
            <h3>Send Me A Message</h3>
          </StyledText>
        </div>

        <ContactForm />
      </Main>
    </div>
  );
}

export default Contact;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1e23;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
  color: whitesmoke;
  max-height: fit-content;
  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    line-height: 0%;
  }
  .heading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 100px auto 20px;
  }

  .heading2 {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px 0px 20px 0px;
    width: 300px;
    border: 3px solid #15dec2;
    margin-top: 40px;
  }
  .heading2-m {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px 0px 20px 0px;
    width: 80vw;
    border: 3px solid #15dec2;
    margin-top: 40px;
  }
`;
