import React from 'react';
import '../styles/People.css';

const People = () => {

    return (
      <div className="crew-container">
        <h1 className="">Meet the team</h1>
        <div className="all-crew-cards">
        <div className="crew-card">
          <img
            src={require("../img/fish.png")}
            width="60"
            height="60"
            viewbox="0 0 16 16"
          ></img>
          <div className="crew-member">
            <h2>Rilo Wade</h2>
            <h3>Software Engineer</h3>
          </div>
          <div className="crew-contact">
            <a href="default.asp">
              <img
                src={require("../img/github.png")}
                width="60"
                height="60"
                viewbox="0 0 16 16"
              ></img>
            </a>
            <a href="default.asp">
              <img
                src={require("../img/linkedin.png")}
                width="60"
                height="60"
                viewbox="0 0 16 16"
              ></img>
            </a>
          </div>
        </div>
        <div className="crew-card">
          <img
            src={require("../img/forest.png")}
            width="140"
            height="140"
            viewbox="0 0 16 16"
          ></img>
          <div className="crew-member">
            <h2>Forest Leigh</h2>
            <h3>Software Engineer</h3>
          </div>
          <div className="crew-contact">
            <a href="https://github.com/forestleigh">
              <img
                src={require("../img/github.png")}
                width="60"
                height="60"
                viewbox="0 0 16 16"
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/forestleigh/">
              <img
                src={require("../img/linkedin.png")}
                width="60"
                height="60"
                viewbox="0 0 16 16"
              ></img>
            </a>
          </div>
        </div>
        <div className="crew-card">
          <img
            src={require("../img/fish.png")}
            width="60"
            height="60"
            viewbox="0 0 16 16"
          ></img>
          <div className="crew-member">
            <h2>Cesar Quintanilla</h2>
            <h3>Software Engineer</h3>
          </div>
          <div className="crew-contact">
            <a href="default.asp">
              <img
                src={require("../img/github.png")}
                width="60"
                height="60"
                viewbox="0 0 16 16"
              ></img>
            </a>
            <a href="default.asp">
              <img
                src={require("../img/linkedin.png")}
                width="60"
                height="60"
                viewbox="0 0 16 16"
              ></img>
            </a>
          </div>
        </div>
        <div className="crew-card">
          <img
            src={require("../img/fish.png")}
            width="60"
            height="60"
            viewbox="0 0 16 16"
          ></img>
          <div className="crew-member">
            <h2>Zihao Li</h2>
            <h3>Software Engineer</h3>
          </div>
          <div className="crew-contact">
            <a href="default.asp">
              <img
                src={require("../img/github.png")}
                width="60"
                height="60"
                viewbox="0 0 16 16"
              ></img>
            </a>
            <a href="default.asp">
              <img
                src={require("../img/linkedin.png")}
                width="60"
                height="60"
                viewbox="0 0 16 16"
              ></img>
            </a>
          </div>
        </div>
        <div className="crew-card">
          <img
            src={require("../img/fish.png")}
            width="60"
            height="60"
            viewbox="0 0 16 16"
          ></img>
          <div className="crew-member">
            <h2>Matt Pan</h2>
            <h3>Software Engineer</h3>
          </div>
          <div className="crew-contact">
            <a href="default.asp">
              <img
                src={require("../img/github.png")}
                width="60"
                height="60"
                viewbox="0 0 16 16"
              ></img>
            </a>
            <a href="default.asp">
              <img
                src={require("../img/linkedin.png")}
                width="60"
                height="60"
                viewbox="0 0 16 16"
              ></img>
            </a>
          </div>
        </div>
        </div>
        
      </div>
    );

}

export default People;
