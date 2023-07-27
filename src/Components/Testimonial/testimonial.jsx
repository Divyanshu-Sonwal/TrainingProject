// import React from 'react'
import ManIcon from "../../assets/Man.svg";
import WomanIcon from "../../assets/Woman.svg";
import Testimonial1 from "../../assets/Testimonial1.svg";
import Testimonial2 from "../../assets/Testimonial2.svg";
import Testimonial3 from "../../assets/Testimonial3.svg";
import BarDiagram from "../../assets/barDiagram.svg";
import "./testimonial.css";

function Testimonial() {
  return (
    <div className="testimonial-container">
      <div className="explore-container">
        <img src={ManIcon} alt="ManIcon" />
        <div>
          <h2
            style={{
              fontSize: "40px",
              fontFamily: "Poppins",
              color: "#D9D9D9",
            }}
          >
            Explore all Modules
          </h2>
          <button className="start-btn">Get Started for Free!</button>
        </div>
        <img className="woman-icon" src={WomanIcon} alt="WomanIcon" />
      </div>

      <div className="testimonial-section">
        <h2>Why are others getting into product management?</h2>
        <div className="testimonial-boxes">
          <img src={Testimonial1} alt="Testimonial1" />
          <img src={Testimonial2} alt="Testimonial2" />
          <img src={Testimonial3} alt="Testimonial3" />
        </div>
      </div>

      <div style={{display:"flex", justifyContent:"center"}}>
        <div style={{height:"18.9375rem", maxWidth:"30.1875rem", padding:"2rem 4rem", textAlign:"start"}}>
          <h2>So Why Product Management?</h2>
          <p style={{paddingRight:"8rem", fontFamily:"Inter"}}>
            Product management offers a rewarding career path with abundant
            opportunities for growth, leadership, and influence. Gain the
            ability to shape the direction of cutting-edge products, collaborate
            with diverse teams, and drive impactful outcomes.
          </p>
        </div>
        <div style={{padding:"2rem"}}>
          <img style={{height:"19rem", maxWidth:"30rem"}} src={BarDiagram} alt="BarDiagram" />
          <p>Product Manager Salaries by Role in India</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
