// import React from 'react';
import "./features.css";
import FactCardIcon from "../../assets/factCard.svg";
import QuestionCardIcon from "../../assets/questionIcon.svg";
import PracticeCardIcon from "../../assets/practiceCard.svg";
import AnswerCardIcon from "../../assets/AnswerCard.svg";
// import EllipseBackground from "../../assets/Ellipse 14.png";

const Features = () => {
  return (
    <>
      <div className="mobile-features">
        {/* Mobile headings -> only need to be displayed in mobile screen */}
        <div className="mobile-heading-container">
          <p>Discover Learning</p>
          <p>Approaches</p>
        </div>

        {/* This features section will be displayed in Mobile screen. */}
        <div className="mobile-features-section">
          {/* Flash-Card-Section */}
          <div className="card-section">
            <div className="flash-card-heading-section">
              <h2>Flash Cards</h2>
              <p>
                Amplify your Product Management Knowledge with Interactive Flash
                Cards.Master concepts,frameworks,and terminology at your own
                pace through engaging and bite-sized flash card exercises. Build
                a solid foundation and boost your confidence as you progress
                through your Product management journey.{" "}
              </p>
            </div>
            <div className="cards-container">
              <img
                className="flash-card-img"
                src={FactCardIcon}
                alt="FactCardIcon"
              />
            </div>
            <div className="flash-card-features-section">
              <h3>Features and Benefits</h3>
              <ul style={{ paddingLeft: "1.25rem" }}>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Sollicitudin sagittis accumsan faucibus morbi sed.</li>
                <li>Vel risus odio condimentum vestibulum duis laoreet ut.</li>
                <li>Aliquam vel facilisi arcu urna sodales tristique.</li>
                <li>Sollicitudin tristique porta commodo eleifend dui</li>
                <li>fermentum magnis malesuada. Nulla.</li>
              </ul>
            </div>
            <button className="start-btn">Start Learning</button>
          </div>

          {/* Quiz-Card-Section */}
          <div className="card-section">
            <div className="flash-card-heading-section">
              <h2>Quizzes</h2>
              <p>
                Ignite Learning through Interactive Quizzes. Challenge your
                understanding of key concepts, decision-making scenarios, and
                industry best practices. Sharpen your analytical skills, uncover
                areas for improvement, and solidify your knowledge through
                engaging quiz experiences.{" "}
              </p>
            </div>
            <div className="cards-container">
              <img
                className="quiz-card-img"
                src={QuestionCardIcon}
                alt="QuestionCardIcon"
              />
            </div>
            <div className="flash-card-features-section">
              <h3>Features and Benefits</h3>
              <ul style={{ paddingLeft: "1.25rem" }}>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Sollicitudin sagittis accumsan faucibus morbi sed.</li>
                <li>Vel risus odio condimentum vestibulum duis laoreet ut.</li>
                <li>Aliquam vel facilisi arcu urna sodales tristique.</li>
                <li>Sollicitudin tristique porta commodo eleifend dui</li>
                <li>fermentum magnis malesuada. Nulla.</li>
              </ul>
            </div>
            <button className="start-btn">Start Learning</button>
          </div>

          {/* Practice-Interview-Qn-Card-Section */}
          <div className="card-section">
            <div className="flash-card-heading-section">
              <h2 style={{ lineHeight: "2rem" }}>
                Practice Interview Questions
              </h2>
              <p>
                Excel in Product management with practice interview questions.
                Gain the confidence and expertise needed to ace real world
                product management interviews. Practice answering challenging
                interview questions, and receive valuable feedback. Prepare
                yourself to showcase your talents and standout in the
                competitive product management landscape.{" "}
              </p>
            </div>
            <div className="cards-container">
              <img
                className="practice-Qn-card-img"
                src={PracticeCardIcon}
                alt="PracticeCardIcon"
              />
            </div>
            <div className="flash-card-features-section">
              <h3>Features and Benefits</h3>
              <ul style={{ paddingLeft: "1.25rem" }}>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Sollicitudin sagittis accumsan faucibus morbi sed.</li>
                <li>Vel risus odio condimentum vestibulum duis laoreet ut.</li>
                <li>Aliquam vel facilisi arcu urna sodales tristique.</li>
                <li>Sollicitudin tristique porta commodo eleifend dui</li>
                <li>fermentum magnis malesuada. Nulla.</li>
              </ul>
            </div>
            <button className="start-btn">Coming Soon</button>
          </div>

          {/* Interview-Qn-Card-Section */}
          <div className="card-section">
            <div className="flash-card-heading-section">
              <h2>Interview Questions</h2>
              <p>
                Dive into Past Interview Questions to Excel in Product
                Management. Explore a comprehensive collection of previous
                interview questions asked by top companies and industry experts.
                Gain insights into the thought process, problem-solving
                techniques, and strategic approaches required to succeed in
                product management interviews. Hone your critical thinking
                skills, expand your knowledge base, and be well-prepared to
                tackle any interview challenge that comes your way.{" "}
              </p>
            </div>
            <div className="cards-container">
              <img
                className="interview-Qn-card-img"
                src={AnswerCardIcon}
                alt="AnswerCardIcon"
              />
            </div>
            <div className="flash-card-features-section">
              <h3>Features and Benefits</h3>
              <ul style={{ paddingLeft: "1.25rem" }}>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Sollicitudin sagittis accumsan faucibus morbi sed.</li>
                <li>Vel risus odio condimentum vestibulum duis laoreet ut.</li>
                <li>Aliquam vel facilisi arcu urna sodales tristique.</li>
                <li>Sollicitudin tristique porta commodo eleifend dui</li>
                <li>fermentum magnis malesuada. Nulla.</li>
              </ul>
            </div>
            <button className="start-btn">Coming Soon</button>
          </div>
        </div>
      </div>

      {/* This features section will be displayed in Desktop screen. */}
      <div className="desktop-features">
        <div id="flash-card" className="desktop-features-section">
          <div className="flash-card-features">
            <h2>Flash Cards</h2>
            <p>
              Amplify your Product Management Knowledge with Interactive Flash
              Cards.Master concepts,frameworks,and terminology at your own pace
              through engaging and bite-sized flash card exercises. Build a
              solid foundation and boost your confidence as you progress through
              your Product management journey.{" "}
            </p>
            <h3>Features and Benefits</h3>
            <ul style={{ paddingLeft: "1.25rem" }}>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Sollicitudin sagittis accumsan faucibus morbi sed.</li>
              <li>Vel risus odio condimentum vestibulum duis laoreet ut.</li>
              <li>Aliquam vel facilisi arcu urna sodales tristique.</li>
              <li>Sollicitudin tristique porta commodo eleifend dui</li>
              <li>fermentum magnis malesuada. Nulla.</li>
            </ul>
          </div>
          <div className="flash-card-img-container" >
            <img
              className="flash-card-img"
              src={FactCardIcon}
              alt="FactCardIcon"
            />
            <button className="start-btn">Start Learning</button>
          </div>
        </div>

        <div id="quiz-card" style={{ display: "flex", justifyContent: "space-around" }}>
          <div className="quiz-card-img-container">
            <img
              className="quiz-card-img"
              src={QuestionCardIcon}
              alt="QuestionCardIcon"
            />
            <button className="start-btn">Start Learning</button>
          </div>
          <div className="flash-card-features">
            <h2>Quizzes</h2>
            <p>
              Ignite Learning through Interactive Quizzes. Challenge your
              understanding of key concepts, decision-making scenarios, and
              industry best practices. Sharpen your analytical skills, uncover
              areas for improvement, and solidify your knowledge through
              engaging quiz experiences.
            </p>
            <h3>Features and Benefits</h3>
            <ul style={{ paddingLeft: "1.25rem" }}>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Sollicitudin sagittis accumsan faucibus morbi sed.</li>
              <li>Vel risus odio condimentum vestibulum duis laoreet ut.</li>
              <li>Aliquam vel facilisi arcu urna sodales tristique.</li>
              <li>Sollicitudin tristique porta commodo eleifend dui</li>
              <li>fermentum magnis malesuada. Nulla.</li>
            </ul>
          </div>
        </div>

        <div
          id="practiceQn-card" 
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div className="flash-card-features">
            <h2>Practice Interview Questions</h2>
            <p>
              Excel in Product management with practice interview questions.
              Gain the confidence and expertise needed to ace real world product
              management interviews. Practice answering challenging interview
              questions, and receive valuable feedback. Prepare yourself to
              showcase your talents and standout in the competitive product
              management landscape.{" "}
            </p>
            <h3>Features and Benefits</h3>
            <ul style={{ paddingLeft: "1.25rem" }}>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Sollicitudin sagittis accumsan faucibus morbi sed.</li>
              <li>Vel risus odio condimentum vestibulum duis laoreet ut.</li>
              <li>Aliquam vel facilisi arcu urna sodales tristique.</li>
              <li>Sollicitudin tristique porta commodo eleifend dui</li>
              <li>fermentum magnis malesuada. Nulla.</li>
            </ul>
          </div>
          <div className="practice-Qn-card-img-container">
            <img
              className="practice-Qn-card-img"
              src={PracticeCardIcon}
              alt="PracticeCardIcon"
            />
            <button className="start-btn">Coming Soon</button>
          </div>
        </div>

        <div id="interviewQn-card" style={{ display: "flex", justifyContent: "space-around" }}>
          <div className="interview-Qn-card-img-container">
            <img
              className="interview-Qn-card-img"
              src={AnswerCardIcon}
              alt="AnswerCardIcon"
            />
            <button className="start-btn">Coming Soon</button>
          </div>
          <div className="flash-card-features">
            <h2 >Interview Questions</h2>
            <p>
              Dive into Past Interview Questions to Excel in Product Management.
              Explore a comprehensive collection of previous interview questions
              asked by top companies and industry experts. Gain insights into
              the thought process, problem-solving techniques, and strategic
              approaches required to succeed in product management interviews.
              Hone your critical thinking skills, expand your knowledge base,
              and be well-prepared to tackle any interview challenge that comes
              your way.
            </p>
            <h3>Features and Benefits</h3>
            <ul style={{ paddingLeft: "1.25rem" }}>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Sollicitudin sagittis accumsan faucibus morbi sed.</li>
              <li>Vel risus odio condimentum vestibulum duis laoreet ut.</li>
              <li>Aliquam vel facilisi arcu urna sodales tristique.</li>
              <li>Sollicitudin tristique porta commodo eleifend dui</li>
              <li>fermentum magnis malesuada. Nulla.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
