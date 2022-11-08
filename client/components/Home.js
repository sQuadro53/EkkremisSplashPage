import React from 'react';
import TopBar from './TopBar';
import People from './People';
import '../styles/Home.css';

const Home = () => {

    return (
      <div>
        <div className="header">
          <TopBar />
        </div>
        <div className="intro-container">
          <div className="logo">
            <img
              className="header-logo"
              src={require("../img/Ekkremis-md.png")}
              alt="Ekkremis"
              height="100px"
              width="180px"
            />
          </div>
        
          <div className="highlights">
            <h1>Introducing Ekkremis</h1>
            <h2>A periscopic view into Kubernetes pod lifecycles</h2>
            <div className="highlights-container">
              <div className="highlight-box">
                <img
                  src={require('../img/fish.png')}
                  width="60"
                  height="60"
                  viewbox="0 0 16 16"
                ></img>
                <div>
                  <li className="list-heading">Lightweight and Simple</li>
                  <li className="list-description">
                    Minimal dependiencies and and learning curve for additioonal
                    technologies
                  </li>
                </div>
              </div>
              <div className="highlight-box">
                <img
                  src={require('../img/starfish.png')}
                  width="60"
                  height="60"
                  viewbox="0 0 16 16"
                ></img>
                <div>
                  <li className="list-heading">Optomize your time</li>
                  <li className="list-description">
                    Ekkremis automates quireies that were previously manual
                  </li>
                </div>
              </div>
              <div className="highlight-box">
                <img
                  src={require('../img/turtle.png')}
                  width="60"
                  height="60"
                  viewbox="0 0 16 16"
                ></img>
                
                <div>
                  <li className="list-heading">Open Source</li>
                  <li className="list-description">
                    Contributors and suggetions for imrpovments are encouraged
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="description">
            <h1>Cluster Monitoring and Lifecycle Insights</h1>
            <p>
              Leveraging Prometheus and Prometheus Alerts to optomize Kubernetes
              clusters and help identify pods stuck in pending phase. Ekkremis'
              Lifecycle Dashboard renders pod metrics in a visually digestble
              manner and suggests solutions for unhealthy pods.
            </p>
          </div>
          <div className ="features-container">
            <h1>features</h1>
          </div>
    
        </div>
        <div className="demo-container">
                <h1 className ="">Demo video</h1>
                <div className ="Demo"></div>
          </div>
          
      </div>
    );

}

export default Home; 





