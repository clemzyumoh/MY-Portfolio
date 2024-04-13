import ContactForm from "../../Component/ContactForm";
import Footer from "../../Component/Footer";
import styled from "styled-components";
import StyledText from "../../Component/Brand1";
import UnderLine from "../../Component/Line";
import { useMediaQuery } from "@react-hook/media-query";

function Contact() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div>
      <Main>
        <div className="container">
          <div className="heading">
            <StyledText fontSize="1.2rem" color="#15DEC2">
              <h1>Contact Information</h1>
            </StyledText>
            <UnderLine lineLength={350} />
          </div>
          <div className={isMobile ? "content-flex-m " : "content-flex"}>
            <div className="content">
              <h5>
                Address : Petroluem Training Institute, Delta State , Nigeria.
              </h5>
              <h5>
                Email :{" "}
                <StyledText color="#15DEC2">
                  clementumoh24@gmail.com <br /> clemzyumoh@gmail.com
                </StyledText>
              </h5>
            </div>
            <div className="content">
              <h5>Phone: 09164129038, 09025748522</h5>
              <h5>Website: </h5>
            </div>
          </div>
        </div>
        <div className="heading">
          <StyledText fontSize="1.5rem" color="#15DEC2">
            <h3>Send me a message</h3>
          </StyledText>
          <UnderLine lineLength={250} />
        </div>
        <ContactForm />
        <Footer />
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
  color: whitesmoke;
  overflow-x: hidden;

  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80vw;
    margin: 40px auto 20px;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80vw;
    margin: 50px auto 15px auto;
  }
  .content-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    margin: 30px auto;
  }
  .content-flex-m {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    width: 80vw;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 80vw;
  }
  .content-email {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
  }
`;
