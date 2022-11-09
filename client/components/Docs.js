import React from 'react';
import TopBar from './TopBar';
import Toc from './Toc';
import '../styles/Docs.css';

const DummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const Docs = () => {
  return (
    <div className="container">
      <TopBar />
      <main>
        <h2 id="initial-header">Ekkremis</h2>
        <p>{DummyText}</p>
        <h2 id="second-header">Running the Electron App</h2>
        <p>{DummyText}</p>
        <h3 id="third-header">Development Mode</h3>
        <p>{DummyText}</p>
        <p>{DummyText}</p>
        <h3 id="third-header">Production Mode</h3>
        <p>{DummyText}</p>
        <p>{DummyText}</p>
        <h2 id="third-header">Using Ekkremis</h2>
        <p>{DummyText}</p>
        <p>{DummyText}</p>
        <h2 id="fourth-header">Kubernetes Requirements</h2>
        <p>{DummyText}</p>
        <p>{DummyText}</p>
        <p>{DummyText}</p>
        <p>{DummyText}</p>
        <h2 id="fifth-header">Prometheus Requirements</h2>
        <p>{DummyText}</p>
        <p>{DummyText}</p>
        <h2 id="sixth-header">Features</h2>
        <p>{DummyText}</p>
        <p>{DummyText}</p>
        <h2 id="seventh-header">Upcoming Features</h2>
        <p>{DummyText}</p>
        <p>{DummyText}</p>
        <h2 id="eighth-header">Technologies</h2>
        <p>{DummyText}</p>
        <p>{DummyText}</p>
      </main>
      <Toc />
    </div>
  );
};

export default Docs;