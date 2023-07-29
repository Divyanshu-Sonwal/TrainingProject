// import React from 'react';
import FooterLogo from "../../assets/footerLogo.svg";
import GithubIcon from "../../assets/github.svg";
import FacebookIcon from "../../assets/facebook.svg";
import TwitterIcon from "../../assets/twitter.svg";
import YoutubeIcon from "../../assets/youtube.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import AtIcon from "../../assets/at.svg";
import WifiIcon from "../../assets/wifi.svg";
import InstagramIcon from "../../assets/instagram.svg";
import BulletPointIcon from "../../assets/bullet.svg";
import "./footer.css";

function Footer() {
  return (
    <>
      {/* Footer for Mobile Screens*/}
      <div className="mobile-footer">
        <div className="footer-content">
          <img className="footer-logo" src={FooterLogo} alt="FooterLogo" />
          <hr></hr>
          <div className="social-media-icons">
            <img src={YoutubeIcon} alt="YoutubeIcon" />
            <img src={LinkedinIcon} alt="LinkedinIcon" />
            <img src={InstagramIcon} alt="InstagramIcon" />
          </div>
          <div >
            <p style={{marginBottom:"0rem"}}>Terms & conditions</p>
            <img
              className="bullet-point-icon"
              src={BulletPointIcon}
              alt="BulletPointIcon"
            />
            <p style={{margin:"0rem"}}>Refund Policy</p>
            <img
              className="bullet-point-icon"
              src={BulletPointIcon}
              alt="BulletPointIcon"
            />
            <p style={{margin:"0rem"}}>Privacy Policy</p>
          </div>
          <p style={{ fontSize: "0.9475rem" }}>
            Contact Us: <b>contact@theproductplatform.com</b>{" "}
          </p>
          <p style={{fontSize:"0.75", fontWeight:"400"}}>© Copyright 2023 The Product Platform </p>
        </div>
      </div>

      {/* Footer for Desktop Screens */}
      <div className="desktop-footer">
        <div className="footer-content">
          <div className="footer-icons">
            <img
              style={{ height: "2.5rem" }}
              src={FooterLogo}
              alt="FooterLogo"
            />
            <div className="social-media-icons">
              <img src={YoutubeIcon} alt="YoutubeIcon" />
              <img src={LinkedinIcon} alt="LinkedinIcon" />
              <img src={InstagramIcon} alt="InstagramIcon" />
            </div>
          </div>

          <div className="copyright-container">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p>Terms & conditions</p>
              <img
                className="bullet-point-icon"
                src={BulletPointIcon}
                alt="BulletPointIcon"
              />
              <p>Refund Policy</p>
              <img
                className="bullet-point-icon"
                src={BulletPointIcon}
                alt="BulletPointIcon"
              />
              <p>Privacy Policy</p>
            </div>
            <p style={{ fontSize: "1.125rem", textAlign: "center" }}>
              Contact Us: <b>contact@theproductplatform.com</b>{" "}
            </p>
            <hr></hr>
            <p style={{ fontSize: "0.80rem", textAlign: "center", fontWeight: "400" }}>
              © Copyright 2023 The Product Platform{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
