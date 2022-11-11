// importing dependencies
import React from "react";
import Button from "./Button";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-bar">
      <Link to="/home">
        <img
          className="footer-logo-font"
          src={require("../img/periscope.png")}
          alt="Ekkremis"
          height="auto"
          width="70px"
        />
      </Link>

      <a
        href="https://github.com/oslabs-beta/Ekkremis/blob/main/lICENSE"
        target="_blank"
      >
        © 2022 Ekkremis | MIT License
      </a>

      <div className="logo-container">
        <a href="https://github.com/oslabs-beta/Ekkremis" target="_blank">
          <img
            className="footer-github-logo"
            src={require("../img/github_white.jpeg")}
            alt="Ekkremis"
            height="auto"
            width="30px"
          />
        </a>

        <a href="https://medium.com/@ekkremiskubernetes/ekkremis-a-periscopic-view-into-kubernetes-pending-pods-37344cf90da0" target="_blank">
          <img
            className="footer-medium-logo"
            src={require("../img/medium_white.png")}
            alt="Ekkremis"
            height="auto"
            width="30px"
          />
        </a>
      </div>
    </div>
  );
};
export default Footer;
