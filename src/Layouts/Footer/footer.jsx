// import React from 'react';
import FooterLogo from "../../assets/footerLogo.svg";
import GithubIcon from "../../assets/github.svg";
import FacebookIcon from "../../assets/facebook.svg";
import TwitterIcon from "../../assets/twitter.svg";
import YoutubeIcon from "../../assets/youtube.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import AtIcon from "../../assets/at.svg";
import WifiIcon from "../../assets/wifi.svg";
import "./footer.css";

function Footer() {
  return (
    <>
    {/* Footer for Mobile Screens*/}
    <div className="mobile-footer">
      <div className="footer-content">
        {/* <div className="footer-logo-container"> */}
        <img className="footer-logo" src={FooterLogo} alt="FooterLogo" />
        {/* </div> */}
        <hr></hr>
        <p style={{fontSize:"0.9475rem"}}>Contact Us: <b>contact@thebootcampplatform.com</b> </p>
        <div className="social-media-icons">
          <img src={GithubIcon} alt="GithubIcon" />
          <img src={FacebookIcon} alt="FacebookIcon" />
          <img src={TwitterIcon} alt="TwitterIcon" />
          <img src={YoutubeIcon} alt="YoutubeIcon" />
          <img src={LinkedinIcon} alt="LinkedinIcon" />
          <img src={AtIcon} alt="AtIcon" />
          <img src={WifiIcon} alt="WifiIcon" />
        </div>
        <p>© Copyright 2023 The Bootcamp Platform </p>
      </div>
    </div>

    {/* Footer for Desktop Screens */}
    <div className="desktop-footer">
      <div className="footer-content">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img style={{height:"2.5rem"}} src={FooterLogo} alt="FooterLogo" />
        <div className="social-media-icons">
          <img src={GithubIcon} alt="GithubIcon" />
          <img src={FacebookIcon} alt="FacebookIcon" />
          <img src={TwitterIcon} alt="TwitterIcon" />
          <img src={YoutubeIcon} alt="YoutubeIcon" />
          <img src={LinkedinIcon} alt="LinkedinIcon" />
          <img src={AtIcon} alt="AtIcon" />
          <img src={WifiIcon} alt="WifiIcon" />
        </div>
      </div>

      <div className="copyright-container">
      <p style={{fontSize:"1rem"}}>Contact Us: <b>contact@theproductplatform.com</b> </p>
      <hr></hr>
      <p style={{fontSize:"0.80rem"}}>© Copyright 2023 The Product Platform </p>
      </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
