import React from "react";
import styled from "styled-components";
import PrimaryButtonCV from "./PrimaryButton";
import ServiceCard from "./ServiceCard";

function ImageSection() {
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:200,100,400"
    rel="stylesheet"
    type="text/css"
  />;
  return (
    <ImageSectionStyled>
      <div className="left-content"></div>
      <div className="right-content">
        <h4>
          I'm <span>Josh Goodman</span>: <span class="wrap"></span>
          <p id="demo"></p>
        </h4>
        <h5>(A.K.A. JoJo!)</h5>

        <p className="paragraph">
          Even before writing my first <span>"Hello World!"</span> in
          highschool, I always held an affinity for tech and language. Now at
          23, I fully embrace the nerd within and teach myself to code full
          time!
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages</p>
            <p>Hobbies</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Joshua Goodman</p>
            <p>: 23</p>
            <p>: American </p>
            <p>: English, Japanese </p>
            <p>: Coding, Writing, Linguistics, Gaming</p>
            <p>: Buffalo, New York </p>
            <p>: Web Development (MERN Stack)</p>
          </div>
        </div>
        <div>

            <a className='' href="https://www.youtube.com/">
          <PrimaryButtonCV title={'CV Download'}/>
            </a>
      
        </div>
      </div>
    </ImageSectionStyled>
  );
}

// <text-anim id="textanim"></text-anim>

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }

  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;

/* const txtFull = "'Hello World!' ";
const txtArr = txtFull.split("");

function getRandomTime() {
  return Math.random() * 0.3;
}
function getEle(id) {
  return document.getElementById("textanim");
}
function ModifyTxt(el, txt) {
  return (el.innerHTML = txt);
}
function writeOut(txtArr, curChar = 0) {
  const randomTime = getRandomTime();
  setTimeout(
    () => {
      const el = getEle("textanim");
      let elTxt = el.innerHTML;
      elTxt += txtArr[curChar];
      ModifyTxt(el, elTxt);
      //check if next iteration is out of range
      if (curChar + 1 == txtArr.length) {
        return deleteOut(txtArr, txtArr.length);
      }
      return writeOut(txtArr, curChar + 1);
    },

    randomTime * 1000
  );
}
function deleteOut(txtArr, curChar = 0) {
  const randomTime = getRandomTime();
  setTimeout(
    () => {
      const el = getEle("textanim");
      let elTxt = el.innerHTML;
      //remove
      const elTxtArr = elTxt.split("");
      const elTxtArrLen = elTxtArr.length;
      console.log(elTxtArr.length - 1);
      const newElTxt = elTxtArr.splice(0, curChar - 1).join("");
      ModifyTxt(el, newElTxt);
      if (elTxtArrLen == 0) {
        return writeOut(txtArr, 0);
      }
      return deleteOut(txtArr, elTxtArrLen - 1);
    },

    randomTime * 3500
  );
  return;
}
writeOut(txtArr); */
