import { useState } from "react";
import "./navbar.css";
import logo from "../../assets/productLogo.svg";
import dropDownIcon from "../../assets/dropdown.svg";
import flashCardIcon from "../../assets/flashCard.svg";
import mockInterviewIcon from "../../assets/mockInterview.svg";
import interviewIcon from "../../assets/interview.svg";

function Navbar() {
  const [visibility1, setVisibility1] = useState(false);
  const [visibility2, setVisibility2] = useState(false);

  const changeVisibility1 = () => {
    setVisibility1(!visibility1);
  };

  const changeVisibility2 = () => {
    setVisibility2(!visibility2);
  };

  return (
    <div className="navbar">
      <img
        src={logo}
        alt="product-logo"
        style={{ height: "5.625rem", width: "25.375rem", cursor: "pointer"}}
      />
      <div className="navbar-elements">
        <div className="navbar-dropdown" onClick={changeVisibility1} onMouseLeave={()=>setVisibility1(false)}>
          <p>
            Learn <img src={dropDownIcon} alt="dropDownIcon" />
          </p>
          {visibility1 && (
            <div className="learn-dropdown" >
              <img src={flashCardIcon} alt="flashCardIcon" />
              <div className="dropdown-text">
                <h5>Flash Cards and Quizzes</h5>
                <p>
                  Learn faster and effectively using our flash cards and quizzes
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="navbar-dropdown" onClick={changeVisibility2} onMouseLeave={()=>setVisibility2(false)}>
          <p>
            Practice <img src={dropDownIcon} alt="dropDownIcon" />
          </p>
          {visibility2 && (
            <div className="practice-dropdown">
              <div className="dropdown-elements">
                <img src={mockInterviewIcon} alt="mockInterview" />
                <div className="dropdown-text">
                  <h5>Mock Interview Questions</h5>
                  <p>
                    Start to prepare for your interviews with our mock interview
                    questions
                  </p>
                </div>
              </div>
              <div className="dropdown-elements">
                <img src={interviewIcon} alt="mockInterview" />
                <div className="dropdown-text">
                  <h5>Interview Questions</h5>
                  <p>
                    Browse through our curated set of interview questions asked
                    by the top companies
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <p>Login</p>
        <button  className="btn">Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
