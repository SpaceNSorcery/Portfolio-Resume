import React from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "gmail",
      "template_6r727ve",
      e.target,
      "user_5jxQfuaEe26vHVOWDomjP"
    )
    .then(
      (result) => {
        console.log(result.text);
        
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

function ContactPage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;

  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Leave a message, lets get creating!</h4>
            </div>
            <form onSubmit={sendEmail} className="form">
              <div className="form-field">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email*</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" placeholder="Email subject" required/>
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Leave a Message*</label>
                <textarea
                  name="textarea"
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Your message.."
                  required
                ></textarea>
              </div>
              <div className="form-field f-button" type="submit">
                <PrimaryButton
                  title={"Submit Email"}
                  type="submit"
                  name="sumbit"
                />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={"Phone"}
              icon={phone}
              cont1={"+1 (716) 444-2930"}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              cont1={"JoJoDigitalNomad@gmail.com"}
            />
            <ContactItem
              title={"Address"}
              icon={location}
              cont1={"34 Hunting Rd. Cheektowaga, NY"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--primary-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--primary-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default ContactPage;
