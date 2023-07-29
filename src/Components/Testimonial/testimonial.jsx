// import Reac from 'react'
import { useEffect, useState } from "react";
import ManIcon from "../../assets/Man.svg";
import WomanIcon from "../../assets/Woman.svg";
import BarDiagram from "../../assets/barDiagram.svg";
import FlowChartIcon from "../../assets/flowChartIcon.svg";
import MobileFlowChartIcon from "../../assets/mobileFlowChart.svg";
import LeftArrowIcon from "../../assets/right.svg";
import RightArrowIcon from "../../assets/left.svg";
import "./testimonial.css";

function Testimonial() {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className="testimonial-container">
      {/* This div will be displayed in Mobile screen. */}
      <div className="mobile-explore-container">
        <h2>Explore all Modules</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img className="man-icon" src={ManIcon} alt="ManIcon" />
          <button className="mobile-start-btn">Get Started for Free!</button>
          <img className="woman-icon" src={WomanIcon} alt="WomanIcon" />
        </div>
      </div>

      {/* This div will be displayed in Desktop screen. */}
      <div className="desktop-explore-container">
        <img className="man-icon" src={ManIcon} alt="ManIcon" />
        <div>
          <h2>Explore all Modules</h2>
          <button className="start-btn">Get Started for Free!</button>
          <p>Login with your Campus email to get started for free!</p>
        </div>
        <img className="woman-icon" src={WomanIcon} alt="WomanIcon" />
      </div>

      {/* This div will be displayed in Mobile screen. */}
      <div className="mobile-testimonial-section">
        <h2>Testimonials</h2>
        <div className="carousel">
          {slideIndex > 0 ? (
            <img
              onClick={() => setSlideIndex(slideIndex - 1)}
              src={LeftArrowIcon}
              alt="LeftArrowIcon"
            />
          ) : (
            <></>
          )}
          {slideIndex === 0 ? (
            <div className="testimonial-element">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug="
                  alt="profile-img"
                />
                <span>Corey Torff</span>
              </div>
              <p>
                “ Lorem ipsum dolor sit amet consectetur. Vel cursus eu turpis
                nisl rhoncus tristique. Et ultrices vel interdum sed tincidunt.
                In donec arcu nulla pellentesque pharetra commodo. Amet dictum
                magna aliquet aliquam. Lacus pellentesque duis nascetur tempor.
                Arcu dignissim purus amet neque donec urna augue vivamus
                sodales. In tristique in faucibus urna sociis vestibulum vitae
                suspendisse donec. Eget pretium neque in fames pellentesque.
                Porta imperdiet leo aliquet ac. ”
              </p>
            </div>
          ) : (
            <></>
          )}

          {slideIndex === 1 ? (
            <div className="testimonial-element">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="https://www.kcl.ac.uk/ImportedImages/Schools/Business/news-images/Elisa-Russo500x499.xe1f2b6fd.jpg?w=376&h=375&crop=368,208,8,35"
                  alt="profile-img"
                />
                <span>Cheyenne Westervelt</span>
              </div>
              <p>
                “ Lorem ipsum dolor sit amet consectetur. Vel cursus eu turpis
                nisl rhoncus tristique. Et ultrices vel interdum sed tincidunt.
                In donec arcu nulla pellentesque pharetra commodo. Amet dictum
                magna aliquet aliquam. Lacus pellentesque duis nascetur tempor.
                Arcu dignissim purus amet neque donec urna augue vivamus
                sodales. In tristique in faucibus urna sociis vestibulum vitae
                suspendisse donec. Eget pretium neque in fames pellentesque.
                Porta imperdiet leo aliquet ac. ”
              </p>
            </div>
          ) : (
            <></>
          )}

          {slideIndex === 2 ? (
            <div className="testimonial-element">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80"
                  alt="profile-img"
                />
                <span>Kianna Gouse</span>
              </div>
              <p>
                “ Lorem ipsum dolor sit amet consectetur. Vel cursus eu turpis
                nisl rhoncus tristique. Et ultrices vel interdum sed tincidunt.
                In donec arcu nulla pellentesque pharetra commodo. Amet dictum
                magna aliquet aliquam. Lacus pellentesque duis nascetur tempor.
                Arcu dignissim purus amet neque donec urna augue vivamus
                sodales. In tristique in faucibus urna sociis vestibulum vitae
                suspendisse donec. Eget pretium neque in fames pellentesque.
                Porta imperdiet leo aliquet ac. ”
              </p>
            </div>
          ) : (
            <></>
          )}

          {slideIndex < 2 ? (
            <img
              onClick={() => setSlideIndex(slideIndex + 1)}
              src={RightArrowIcon}
              alt="RightArrowIcon"
            />
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* This div will be displayed in Desktop screen. */}

      <div className="desktop-testimonial-section">
        <h2>Why are others getting into product management?</h2>
        <div className="testimonial-boxes">
          <div className="testimonial-element">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug="
                alt="profile-img"
              />
              <span>Corey Torff</span>
            </div>
            <p>
              “ Lorem ipsum dolor sit amet consectetur. Vel cursus eu turpis
              nisl rhoncus tristique. Et ultrices vel interdum sed tincidunt. In
              donec arcu nulla pellentesque pharetra commodo. Amet dictum magna
              aliquet aliquam. Lacus pellentesque duis nascetur tempor. Arcu
              dignissim purus amet neque donec urna augue vivamus sodales. In
              tristique in faucibus urna sociis vestibulum vitae suspendisse
              donec. Eget pretium neque in fames pellentesque. Porta imperdiet
              leo aliquet ac. ”
            </p>
          </div>
          <div className="testimonial-element">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://www.kcl.ac.uk/ImportedImages/Schools/Business/news-images/Elisa-Russo500x499.xe1f2b6fd.jpg?w=376&h=375&crop=368,208,8,35"
                alt="profile-img"
              />
              <span>Cheyenne Westervelt</span>
            </div>
            <p>
              “ Lorem ipsum dolor sit amet consectetur. Vel cursus eu turpis
              nisl rhoncus tristique. Et ultrices vel interdum sed tincidunt. In
              donec arcu nulla pellentesque pharetra commodo. Amet dictum magna
              aliquet aliquam. Lacus pellentesque duis nascetur tempor. Arcu
              dignissim purus amet neque donec urna augue vivamus sodales. In
              tristique in faucibus urna sociis vestibulum vitae suspendisse
              donec. Eget pretium neque in fames pellentesque. Porta imperdiet
              leo aliquet ac. ”
            </p>
          </div>
          <div className="testimonial-element">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80"
                alt="profile-img"
              />
              <span>Kianna Gouse</span>
            </div>
            <p>
              “ Lorem ipsum dolor sit amet consectetur. Vel cursus eu turpis
              nisl rhoncus tristique. Et ultrices vel interdum sed tincidunt. In
              donec arcu nulla pellentesque pharetra commodo. Amet dictum magna
              aliquet aliquam. Lacus pellentesque duis nascetur tempor. Arcu
              dignissim purus amet neque donec urna augue vivamus sodales. In
              tristique in faucibus urna sociis vestibulum vitae suspendisse
              donec. Eget pretium neque in fames pellentesque. Porta imperdiet
              leo aliquet ac. ”
            </p>
          </div>
        </div>
      </div>

      <div className="product-management-container">
        <div className="product-management-text">
          <h3 className="desktop-heading">So Why Product Management?</h3>
          <h3 className="mobile-heading">Why Product Management?</h3>
          <p className="mobile-paragraph-text">
            Product management offers a rewarding career path with abundant
            opportunities for growth, leadership, and influence. Gain the
            ability to shape the direction of cutting-edge products, collaborate
            with diverse teams, and drive impactful outcomes.
          </p>
        </div>
        <div className="product-management-img">
          <img src={BarDiagram} alt="BarDiagram" />
          <p>Product Manager Salaries by Role in India</p>
        </div>
      </div>

      <div style={{ color: "#D9D9D9", paddingBottom: "2rem" }}>
        <h2 className="desktop-heading product-manager-heading">
          What is the role of a Product Manager?
        </h2>
        <h2 className="mobile-heading product-manager-heading">
          What is the role of a
        </h2>
        <h2
          style={{ marginTop: "0" }}
          className="mobile-heading product-manager-heading product-manager-specific-heading"
        >
          Product Manager?
        </h2>
        <img
          className="desktop-heading"
          style={{
            height: "17rem",
            width: "70rem",
            marginTop: "1rem",
            maxWidth: "100%",
          }}
          src={FlowChartIcon}
          alt="FlowChartIcon"
        />
        <img
          className="mobile-heading mobile-flow-chart-icon"
          src={MobileFlowChartIcon}
          alt="MobileFlowChartIcon"
        />
        <div className="journey-text-container">
          <h2 className="journey-text">
            Ready to take your product management journey to the next level?
          </h2>
          <h2 className="journey-text">Start preparing!</h2>
          <button className="register-btn start-btn">Register Now!</button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
