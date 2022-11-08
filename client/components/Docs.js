import React from 'react';
import TopBar from './TopBar';
import '../styles/Docs.css';

const Docs = () => {

    return (
      <div>
        <div>
          <TopBar />
        </div>

        <div className="table-of-contents">
          <img
            className="header-logo"
            src={require("../img/Ekkremis-sm.png")}
            alt="Ekkremis"
            height="100px"
            width="180px"
          />
          <a href=""> </a>
          <a href=""> </a>
          <a href=""> </a>
          <a href=""> </a>
        </div>
        <div className="docs">
          <img
            className="docs-banner"
            src={require("../img/Ekkremis_Banner.jpg")}
            alt="Ekkremis Banner"
            height="100px"
            width="180px"
          />
          <h1>Introducing Ekkremis</h1>
          <p></p>
        </div>
      </div>
    );

}

export default Docs;