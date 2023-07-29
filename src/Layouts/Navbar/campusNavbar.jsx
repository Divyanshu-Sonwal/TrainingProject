import { useState } from "react";
import "./navbar.css";
import logo from "../../assets/productLogo.svg";
import mobileLogo from "../../assets/Black and White - Semi Bold - Montserrat.svg";
import dropDownIcon from "../../assets/dropdown.svg";
import flashCardIcon from "../../assets/flashCard.svg";
import mockInterviewIcon from "../../assets/mockInterview.svg";
import interviewIcon from "../../assets/interview.svg";
import CloseIcon from "../../assets/ic_baseline-close.svg";
import TrigramIcon from "../../assets/trigram.svg";

function CampusNavbar() {
  const [visibility1, setVisibility1] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const [mobileVisibility, setMobileVisibility] = useState(false);
  const [popup, setPopup] = useState(true);

  const changeVisibility1 = () => {
    setVisibility1(!visibility1);
    setPopup(false);
  };

  const changeVisibility2 = () => {
    setVisibility2(!visibility2);
    setPopup(false);
  };

  const changeMobileVisibility = () => {
    setMobileVisibility(!mobileVisibility);
    setPopup(false);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="mobile-navbar">
        <div
          className=""
          onClick={changeMobileVisibility}
          onMouseLeave={() => setMobileVisibility(false)}
        >
          <img
            style={{ marginTop: "0.5rem" }}
            src={TrigramIcon}
            alt="TrigramIcon"
          />
          {mobileVisibility && (
            <div className="practice-dropdown">
              <div className="dropdown-elements">
                <img src={flashCardIcon} alt="flashCardIcon" />
                <div className="dropdown-text">
                  <h5>Flash Cards and Quizzes</h5>
                  <p>
                    Learn faster and effectively using our flash cards and
                    quizzes
                  </p>
                </div>
              </div>
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
        <img src={mobileLogo} alt="mobileLogo" />
        <button className="mobile-btn">Login</button>
        {popup && (
          <div className="mobile-pop-up">
            <div className="mobile-shape"></div>
            <div style={{ display: "flex" }}>
              <span>
                Register with your <b>Campus email</b> to get started for{" "}
                <b>free!</b>
              </span>
              <img
                onClick={() => setPopup(false)}
                src={CloseIcon}
                alt="CloseIcon"
              />
            </div>
          </div>
        )}
      </div>

      {/* Desktop Navbar */}
      <div className="navbar">
        <img
          src={logo}
          alt="product-logo"
          style={{ height: "5.625rem", width: "25.375rem", cursor: "pointer" }}
        />
        <div className="navbar-elements">
          <div
            className="navbar-dropdown"
            onClick={changeVisibility1}
            onMouseLeave={() => setVisibility1(false)}
          >
            <p>
              Learn <img src={dropDownIcon} alt="dropDownIcon" />
            </p>
            {visibility1 && (
              <div className="learn-dropdown">
                <img src={flashCardIcon} alt="flashCardIcon" />
                <div className="dropdown-text">
                  <h5>Flash Cards and Quizzes</h5>
                  <p>
                    Learn faster and effectively using our flash cards and
                    quizzes
                  </p>
                </div>
              </div>
            )}
          </div>
          <div
            className="navbar-dropdown"
            onClick={changeVisibility2}
            onMouseLeave={() => setVisibility2(false)}
          >
            <p>Practice</p>
          </div>
          <p>Login</p>
          <div>
            <button className="btn">Sign up</button>
            {popup && (
              <div className="pop-up">
                <div className="shape"></div>
                <div style={{ display: "flex" }}>
                  <span>
                    Register with your <b>Campus email</b> to get started for{" "}
                    <b>free!</b>
                  </span>
                  <img
                    onClick={() => setPopup(false)}
                    src={CloseIcon}
                    alt="CloseIcon"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CampusNavbar;
