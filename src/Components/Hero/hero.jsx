import React, { useEffect } from "react";
import "./hero.css";
import LaptopIcon from "../../assets/laptop.svg";
import FlashCardsBox from "../../assets/flashCardBox.svg";
import QuizBox from "../../assets/quizBox.svg";
import PracticeInterviewBox from "../../assets/practiceInterviewBox.svg";
import InterviewQnBox from "../../assets/interviewQnBox.svg";
// import LeftBackground from "../../assets/Rectangle 586.png";
// import RightBackground from "../../assets/Rectangle 587.png";

function Hero() {
  useEffect(() => {
    const txts = document.querySelector(".animate-text").children;
    const txtsLen = txts.length;
    let index = 0;
    const textInTimer = 2000,
      textOutTimer = 1800;

    (function animateText() {
      for (let i = 0; i < txtsLen; i++) {
        txts[i].classList.remove("text-in", "text-out");
      }
      txts[index].classList.add("text-in");

      setTimeout(function () {
        txts[index].classList.add("text-out");
      }, textOutTimer);

      setTimeout(function () {
        if (index == txtsLen - 1) {
          index = 0;
        } else {
          index++;
        }
        animateText();
      }, textInTimer);
    })();
  });

  return (
    <div className="flash-page">
      <div className="heading" style={{ paddingTop: "2rem" }}>
        <p>Empower Your Product Vision: Master the Art of</p>
        <p>Product Management with </p>
        <p className="animate-text">
          <span style={{ color: "#FD443A" }}>Flash Cards</span>
          <span style={{ color: "#FD443A" }}>Quizzes</span>
          <span style={{ color: "#FD443A" }}>Mock Interview Questions</span>
          <span style={{ color: "#FD443A" }}>Interview Questions</span>
        </p>
      </div>
      <button type="button" className="start-btn">Get Started</button>
      <div className="mid-text" style={{ paddingTop: "0.75rem" }}>
        <p>Ready to Supercharge Your Product</p>
        <p>Management? Discover the Power of Our Learning</p>
        <p>Modules!</p>
      </div>
      <div className="flash-page-last-section">
        <div className="box-container">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={FlashCardsBox}
              alt="FlashCardsBox"
              className="box-icons"
            />
            <img src={QuizBox} alt="QuizBox" className="box-icons" />
            <img
              src={PracticeInterviewBox}
              alt="PracticeInterviewBox"
              className="box-icons"
            />
            <img
              src={InterviewQnBox}
              alt="InterviewQnBox"
              className="box-icons"
            />
          </div>
          <h4>Flash Cards: Reinforce Key Concepts</h4>
          <ul
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              color: "#D9D9D9",
            }}
          >
            <li>
              Boost your product management knowledge with interactive
              flashcards.
            </li>
            <li>
              Learn key concepts and terminologies through bite-sized flashcard
              exercises.
            </li>
          </ul>
        </div>
        <img
          src={LaptopIcon}
          alt="LaptopIcon"
          style={{ height: "15.625rem", maxWidth: "21rem" }}
        />
      </div>

      {/* Filler Div for BackgroundColor */}
      <div className="filler-rectangle"></div>
    </div>
  );
}

export default Hero;
