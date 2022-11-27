import React from "react";
import "../styles/People.css";

const People = () => {
  return (
    <div className="crew-container">
      <h1 className="">Meet the team</h1>
      <div className="all-crew-cards">
        <div className="crew-card">
          <img
            src={require("../img/rilo.png")}
            alt="Rilo"
            width="120"
            height="120"
            viewBox="0 0 16 16"
            className="headshot"
          ></img>
          <div className="crew-member">
            <h4>Rilo Wade</h4>
            <h5>Software Engineer</h5>
          </div>
          <div className="crew-contact">
            <a href="https://github.com/WaffleCloud" target="_blank">
              <img
                src={require("../img/github.png")}
                alt="github-logo"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/taywade" target="_blank">
              <img
                src={require("../img/linkedin.png")}
                alt="linkedin-logo"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              ></img>
            </a>
          </div>
        </div>
        <div className="crew-card">
          <img
            src={require("../img/forest.png")}
            alt="Forest"
            width="120"
            height="120"
            className="headshot"
            // viewBox="0 0 16 16"
          ></img>
          <div className="crew-member">
            <h4>Forest Leigh</h4>
            <h5>Software Engineer</h5>
          </div>
          <div className="crew-contact">
            <a href="https://github.com/forestleigh" target="_blank">
              <img
                src={require("../img/github.png")}
                alt="github-logo"
                width="30"
                height="30"
                // viewBox="0 0 16 16"
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/forestleigh/" target="_blank">
              <img
                src={require("../img/linkedin.png")}
                alt="linkedin-logo"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              ></img>
            </a>
          </div>
        </div>
        <div className="crew-card">
          <img
            src={require("../img/Cesar-s.jpeg")}
            alt="Cesar"
            width="120"
            height="120"
            viewBox="0 0 16 16"
            className="headshot"
          ></img>
          <div className="crew-member">
            <h4>Cesar Quintanilla</h4>
            <h5>Software Engineer</h5>
          </div>
          <div className="crew-contact">
            <a href="https://github.com/Cesar-Quintanilla" target="_blank">
              <img
                src={require("../img/github.png")}
                alt="github-logo"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/quintanilla-cesar" target="_blank">
              <img
                src={require("../img/linkedin.png")}
                alt="linkedin-logo"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              ></img>
            </a>
          </div>
        </div>
        <div className="crew-card">
          <img
            src={require("../img/z.jpg")}
            alt="Z"
            width="120"
            height="120"
            viewBox="0 0 16 16"
            className="headshot"
          ></img>
          <div className="crew-member">
            <h4>Zihao Li</h4>
            <h5>Software Engineer</h5>
          </div>
          <div className="crew-contact">
            <a
              href="https://github.com/orgs/sQuadro53/people/zihaoli518"
              target="_blank"
            >
              <img
                src={require("../img/github.png")}
                alt="github-logo"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/lizihao/" target="_blank">
              <img
                src={require("../img/linkedin.png")}
                alt="linkedin-logo"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              ></img>
            </a>
          </div>
        </div>
        <div className="crew-card">
          <img
            src={require("../img/matt.jpeg")}
            alt="Matt"
            width="120"
            height="120"
            viewBox="0 0 16 16"
            className="headshot"
          ></img>
          <div className="crew-member">
            <h4>Matt Pan</h4>
            <h5>Software Engineer</h5>
          </div>
          <div className="crew-contact">
            <a
              href="https://github.com/orgs/sQuadro53/people/matthewmpan"
              target="_blank"
            >
              <img
                src={require("../img/github.png")}
                alt="github-logo"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/matthewpan/" target="_blank">
              <img
                src={require("../img/linkedin.png")}
                alt="linkedin-logo"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
