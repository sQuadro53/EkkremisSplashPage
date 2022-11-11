import React from "react";
import Button from "./Button";
import "../styles/topBar.css";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="top-bar">
      <Link to="/home">
        <img
          className="header-logo-font"
          src={require("../img/Ekkremis-logo-dark.png")}
          alt="Ekkremis"
          height="auto"
          width="250px"
        />
      </Link>

      <div className="login-button-container">
        <Link to="/home">
          <Button className="FPbutton" children="About" />
        </Link>
        <Link to="/docs">
          <Button className="FPbutton" children="Docs" />
        </Link>

        <a href="https://github.com/oslabs-beta/Ekkremis" target="_blank">
          <Button className="FPbutton" children="Github" />
        </a>

        <a href="https://medium.com/@ekkremiskubernetes/ekkremis-a-periscopic-view-into-kubernetes-pending-pods-37344cf90da0" target="_blank">
          <Button className="FPbutton" children="Blog" />
        </a>
      </div>
    </div>
  );
};
export default TopBar;