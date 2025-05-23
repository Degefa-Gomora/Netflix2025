import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer-icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
          </ul>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="service_code d-md-flex">
          <p>Service Code</p>
        </div>
        <div className="copy-write d-md-flex">
          &copy;1997-2024 Netflix, Inc.
        </div>
        <div>
          <p>
            This is a portfolio project for educational purposes, not affiliated
            with Netflix.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
