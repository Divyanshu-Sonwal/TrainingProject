import { useEffect, useRef, useState } from "react";
import "./hero.css";
import FlashLaptopIcon from "../../assets/laptop.svg";
import QuizLaptopIcon from "../../assets/Frame 2166.svg";
import PracticeQnLaptopIcon from "../../assets/Group 17.svg";
import InterviewQnLaptopIcon from "../../assets/Group 18.svg";
import FlashCardsBox from "../../assets/flashCardBox.svg";
import FlashCardBox2 from "../../assets/emptyFlashCard.svg";
import QuizBox from "../../assets/quiz.svg";
import QuizBox2 from "../../assets/quizBox.svg";
import PracticeInterviewBox from "../../assets/practiceInterview.svg";
import PracticeInterviewBox2 from "../../assets/practiceInterviewBox.svg";
import InterviewQnBox from "../../assets/interviewQn.svg";
import InterviewQnBox2 from "../../assets/interviewQnBox.svg";
// import LeftBackground from "../../assets/Rectangle 586.png";
// import RightBackground from "../../assets/Rectangle 587.png";

function Hero() {
  const [imgSrc, setImgSrc] = useState("");

  const imgRef = useRef(imgSrc);
  imgRef.current = imgSrc;

  useEffect(() => {
    setImgSrc("flash-card");
  }, []);

  const cardsArr = [
    {
      title: "flash-card",
      heading: "Flash Cards: Reinforce Key Concepts",
      point1:
        "Boost your product management knowledge with interactive flashcards.",
      point2:
        "Learn key concepts and terminologies through bite-sized flashcard exercises.",
    },
    {
      title: "quiz-card",
      heading: "Quizzes: Test Your Knowledge",
      point1:
        "Challenge yourself with engaging quizzes that evaluate your grasp of essential product management concepts.",
      point2:
        "Receive immediate feedback on your quiz answers, enabling you to gauge your understanding and focus on areas that need improvement.",
    },
    {
      title: "practiceQn-card",
      heading: "Practice Interview questions: Sharpen Your Interview Skills",
      point1:
        "Practice and refine your responses to industry-specific questions, gain valuable feedback.",
      point2:
        "Enhance your ability to showcase your expertise and problem-solving prowess in real-world scenarios.",
    },
    {
      title: "interviewQn-card",
      heading: " Interview Questions: Learn from Real Scenarios",
      point1:
        "Gain valuable insights by exploring a diverse collection of interview questions sourced from actual product management interviews.",
      point2:
        "Polish your responses and boost your confidence through targeted practice with a wide range of product management interview questions.",
    },
  ];

  // Cards Animation

  // for (let i = 0; i < cardsArr.length; i++) {
  //     animation(i);
  // }

  // useEffect(() => {
  //   function animation(i){
  //     setTimeout(() => {
  //       setImgSrc(cardsArr[i].title);
  //     }, 1000);
  //   }
  // }, []);

  // useEffect(() => {
  //   const delayedLoop = async (delay) => {
  //     for (let i = 0; i < cardsArr.length; i++) {
  //       await new Promise(resolve => setTimeout(resolve, delay));
  //       setImgSrc(cardsArr[i].title);
  //     }
  //   };

  //   delayedLoop(1000);

  //   // Make sure to clean up the loop if the component unmounts before the loop finishes
  //   return () => {
  //     // Perform any cleanup or cancellation here if needed
  //   };
  // }, []);



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
  }, []);

  return (
    <div className="flash-page" style={{paddingBottom:'2rem'}}>
      <div className="heading" style={{ paddingTop: "2rem" }}>
        {/* Mobile headings -> only need to be displayed in mobile screen */}
        <p className="mobile-heading">Empower Your Product</p>
        <p className="mobile-heading">Vision:</p>
        <p className="mobile-heading">Master the Art of Product</p>
        <p className="mobile-heading">Management with</p>

        {/* Desktop heading -> need to be displayed other than mobile screens */}
        <p className="desktop-heading">
          Empower Your Product Vision: Master the Art of
        </p>

        <p className="desktop-heading">Product Management with </p>
        <p className="animate-text">
          <span style={{ color: "#FD443A" }}>Flash Cards</span>
          <span style={{ color: "#FD443A" }}>Quizzes</span>
          <span style={{ color: "#FD443A" }}>Mock Interview Questions</span>
          <span style={{ color: "#FD443A" }}>Interview Questions</span>
        </p>
      </div>
      <button type="button" className="all-mobile-btn start-btn get-started-btn">
        Get Started
      </button>
      <div className="mid-text" style={{ paddingTop: "0.75rem" }}>
        {/* Mobile headings -> only need to be displayed in mobile screen */}
        <p className="mobile-heading">Ready to Supercharge Your</p>
        <p className="mobile-heading">Product Management?</p>
        <p className="mobile-heading">Discover the Power of Our Learning</p>

        {/* Desktop heading -> need to be displayed other than mobile screens */}
        <p className="desktop-heading">Ready to Supercharge Your Product</p>
        <p className="desktop-heading">
          Management? Discover the Power of Our Learning
        </p>

        <p>Modules!</p>
      </div>
      <div className="flash-page-last-section">
        <div className="box-container">
          <div className="card-container">
            <div onClick={() => setImgSrc("flash-card")}>
              <img
                src={imgSrc === "flash-card" ? FlashCardsBox : FlashCardBox2}
                alt="FlashCardsBox"
                className="box-icons"
              />
            </div>
            <div onClick={() => setImgSrc("quiz-card")}>
              <img
                src={imgSrc === "quiz-card" ? QuizBox : QuizBox2}
                alt="QuizBox"
                className="box-icons"
              />
            </div>
            <div onClick={() => setImgSrc("practiceQn-card")}>
              <img
                src={
                  imgSrc === "practiceQn-card"
                    ? PracticeInterviewBox
                    : PracticeInterviewBox2
                }
                alt="PracticeInterviewBox"
                className="box-icons"
              />
            </div>
            <div onClick={() => setImgSrc("interviewQn-card")}>
              <img
                src={
                  imgSrc === "interviewQn-card"
                    ? InterviewQnBox
                    : InterviewQnBox2
                }
                alt="InterviewQnBox"
                className="box-icons"
              />
            </div>
          </div>
          {cardsArr.map((obj) =>
            imgSrc === obj.title ? (
              <>
                <div className="features-text-box">
                  <h4>{obj.heading}</h4>
                  <ul
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      color: "#D9D9D9",
                    }}
                  >
                    <li>{obj.point1}</li>
                    <li>{obj.point2}</li>
                  </ul>
                </div>
              </>
            ) : (
              <></>
            )
          )}
        </div>
        <div className="laptop-container">
          <img
            src={
              imgSrc === "flash-card"
                ? FlashLaptopIcon
                : imgSrc === "quiz-card"
                ? QuizLaptopIcon
                : imgSrc === "practiceQn-card"
                ? PracticeQnLaptopIcon
                : InterviewQnLaptopIcon
            }
            className="laptop-icon"
            alt="LaptopIcon"
          />
        </div>
      </div>

      <button type="button" className="start-btn get-started-btn get-started-end-btn">
        <a href={`#${imgSrc}`} style={{textDecoration:"none", color:"black"}}>Get Started</a>
      </button>

      {/* Filler Div for BackgroundColor */}
      {/* <div className="filler-rectangle"></div> */}
    </div>
  );
}

export default Hero;
