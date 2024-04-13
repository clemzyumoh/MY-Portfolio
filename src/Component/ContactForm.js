import { useState } from "react";
import styled from "styled-components";
import { validateEmail } from "./Utils";
import emailjs from "@emailjs/browser";
import { useMediaQuery } from "@react-hook/media-query";

function ContactForm() {
  const [yourName, setYourName] = useState("");
  const [comment, setComment] = useState(" ");
  const [email, setEmail] = useState(" ");
  // const [emailError, setEmailError] = useState(null);

  const getIsFormValid = () => {
    // Implement this function
    const yourNameValid = yourName.trim() !== "";
    const commentValid = comment.trim() !== "";
    const emailValid = email.trim() !== "" && validateEmail(email);
    // const emailValid = email.trim() !== "" && !emailError;

    return yourNameValid && emailValid && commentValid;
  };

  // const handleEmailChange = (e) => {
  //   const newEmail = e.target.value;
  //   setEmail(newEmail);

  //   // Validate email and set the email error
  //   const error = validateEmail(newEmail);
  //   setEmailError(error);
  // };

  const clearForm = () => {
    // Implement this function
    setYourName("");
    setEmail("");
    setComment("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = getIsFormValid();

    if (isFormValid) {
      clearForm();
    }

    //Emailjs serviceId, templateId, and Public key
    const serviceId = "service_ykyb5em";
    const templateId = "template_g6x007w";
    const publicKey = "AtcrGwMVwZlKmA2aF";

    //create an object that contains dynamic template parameters
    const templateParams = {
      from_name: yourName,
      from_email: email,
      to_name: "clement Umoh",
      message: comment,
    };

    // sned the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert("Email sent successfully!", response);
        setYourName("");
        setEmail("");
        setComment("");
      })
      .catch((error) => {
        alert("Error sending email!", error);
      });
  };

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <div>
      <Main onSubmit={handleSubmit}>
        <fieldset
          className={isMobile ? "field-m" : isTablet ? "field-t" : "field"}
        >
          <div
            className={
              isMobile
                ? "input-containermobile"
                : isTablet
                ? "input-containermobile"
                : "input-container"
            }
          >
            <div
              className={
                isMobile
                  ? "input-flex-m"
                  : isTablet
                  ? "input-flex-t"
                  : "input-flex"
              }
            >
              <label htmlFor="username">
                Your name <sup>*</sup>
              </label>
              <input
                autoComplete="username"
                id="username"
                placeholder="Your name"
                type="text"
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
              />
            </div>

            <div
              className={
                isMobile
                  ? "input-flex-m"
                  : isTablet
                  ? "input-flex-t"
                  : "input-flex"
              }
            >
              <label htmlFor="email">
                Email address <sup>*</sup>
              </label>
              <input
                autoComplete="email"
                id="email"
                placeholder="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* {emailError && <div style={{ color: 'red' }}>{emailError}</div>} */}
            </div>
          </div>

          <div className="textarea-flex">
            <label htmlFor="textarea">
              Your Message <sup>*</sup>
            </label>
            <textarea
              autoComplete="textarea"
              id="textarea"
              className="textarea"
              placeholder="Type your message here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="btn-flex">
            <button className="btn" type="submit" disabled={!getIsFormValid()}>
              Send Message
            </button>
          </div>
        </fieldset>
      </Main>
    </div>
  );
}

export default ContactForm;

const Main = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 5px;
  width: 100vw;
  height: fit-content;
  margin: 40px auto;
  padding: 0%;

  .field {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: none;

    width: 70%;
    max-height: fit-content;
    margin: 30px auto;
    padding: 20px;
  }
  .field-t {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: none;

    width: 70px;
    max-height: fit-content;
    margin: 30px auto;
    padding: 20px;
  }
  .field-m {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: none;
    border: 1px solid #15dec2;
    width: 80%;
    max-height: fit-content;
    padding: 30px;
    margin: 0px;
    overflow-x: hidden;
  }

  label {
    display: block;
    margin-bottom: 20px;
    color: #15dec2;
    font-size: 0.7rem;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border-bottom: 1px solid #15dec2;
    border-top: 1px solid #1a1e23;
    border-left: 1px solid #1a1e23;
    border-right: 1px solid #1a1e23;
    border-radius: 3px;
    background-color: #1a1e23;
    color: white;
    outline: none;
  }
  .input-flex {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    width: 500px;
    margin: 20px;
  }
  .input-flex-t {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    width: 500px;
    margin: 20px auto 20px auto;
  }
  .input-flex-m {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    width: 100%;
    margin: 20px auto 20px auto;
  }
  .input-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 10px auto 10px auto;
  }
  .input-containermobile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 20px auto 20px auto;
  }
  .textarea {
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #15dec2;
    width: 100%;
    background-color: #1a1e23;
    border-radius: 3px;
    color: white;
  }

  .textarea-flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    margin: 30px auto 50px auto;
  }

  .btn {
    padding: 20px;
    color: black;
    border: 2px solid #15dec2;
    border-radius: 20px;
    background-color: #15dec2;
    cursor: pointer;
    width: 100%;
    font-size: 1rem;

    &:disabled {
      background-color: #1a1e23;
      color: #15dec2;
      border: 2px solid #15dec2;
      border-radius: 20px;
      cursor: not-allowed;
    }
  }
  .btn-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 30px auto 30px auto;
  }
`;
//  .form {
//     padding: 20px;
//     border: none;
//     border-radius: 5px;
//     width: 1200px;
//     border: 1px solid #15dec2;
//     max-height: fit-content;
//   }
//   .form-t {
//     padding: 20px;
//     border: none;
//     border-radius: 5px;
//     width: 1000px;
//     border: 1px solid #15dec2;
//     max-height: fit-content;
//   }
//   .form-m {
//     padding: 20px;
//     border: none;
//     border-radius: 5px;
//     max-width: 750px;
//     border: 1px solid #15dec2;
//     max-height: fit-content;
//   }
