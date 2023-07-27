// import React from 'react'
import "./hero.css";
import LaptopIcon from "../../assets/laptop.svg";
import FlashCardsBox from "../../assets/flashCardBox.svg";
import QuizBox from "../../assets/quizBox.svg";
import PracticeInterviewBox from "../../assets/practiceInterviewBox.svg";
import InterviewQnBox from '../../assets/interviewQnBox.svg';

function Hero() {
  return (
    <div className="flash-page">
      <div className="heading" style={{ paddingTop: "2rem" }}>
        <p>Empower Your Product Vision: Master the Art of</p>
        <p>Product Management with </p>
        <p style={{ color: "#FD443A" }}>Flash Cards</p>
      </div>
      <button className="start-btn">Get Started</button>
      <div className="mid-text" style={{ paddingTop: "0.75rem" }}>
        <p>Ready to Supercharge Your Product</p>
        <p>Management? Discover the Power of Our Learning</p>
        <p>Modules!</p>
      </div>
      <div className="flash-page-last-section">
        <div className="box-container">
          <div style={{ display:"flex", justifyContent:"center"}}>
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
          <ul style={{fontFamily:"Inter", fontStyle:"normal", color:"#D9D9D9"}}>
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
