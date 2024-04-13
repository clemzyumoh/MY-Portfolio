import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { FaStackOverflow } from "react-icons/fa";

import { useMediaQuery } from "@react-hook/media-query";

const LogoLink = styled(RouterLink)`
  font-size: 23px;

  color: #15dec2;
  margin-right: 15px;
  margin-left: 15px;
  text-decoration: none;
`;

function Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <div>
      <FooterContainer>
        <div
          className={
            isMobile
              ? "footer-flexmobile"
              : isTablet
              ? "footer-flex"
              : "footer-flex"
          }
        >
          <div
            className={
              isMobile ? "content1-mobile" : isTablet ? "content1" : "content1"
            }
          >
            <p>2024 ClementUmoh.All right reserved.</p>
          </div>
          <div
            className={
              isMobile ? "content2-mobile" : isTablet ? "content2" : "content2"
            }
          >
            <p>Privacy Poilcy</p>
            <p>Terms & Condition</p>
          </div>

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
      </FooterContainer>
    </div>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1e23;
  max-height: fit-content;
  max-width: 100%;
  border-top: 1px solid #15dec2;
  color: whitesmoke;
  margin: 0px;
  padding: 0px;

  .logo-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .footer-flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px;
    margin: 10px auto;
    width: 100vw;
  }
  .footer-flexmobile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80vw;
    margin: 10px auto 20px;
  }
  .content1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content1-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 100px;
    margin-right: 100px;
  }
  .content2-mobile {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
`;
