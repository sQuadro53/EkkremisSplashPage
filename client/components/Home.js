import React from "react";
import TopBar from "./TopBar";
import People from "./People";
import Footer from "./Footer";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="whole">
      <TopBar />

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
                src={require("../img/seahorse.png")}
                width="60"
                height="60"
                viewbox="0 0 16 16"
              ></img>

              <div>
                <h3 className="list-heading">Lightweight and Simple</h3>
                <p className="list-description">
                  Minimal dependencies and a simple learning curve for
                  additional technologies
                </p>
              </div>
            </div>

            <div className="highlight-box">
              <img
                src={require("../img/starfish.png")}
                width="60"
                height="60"
                viewbox="0 0 16 16"
              ></img>

              <div>
                <h3 className="list-heading">Optomize your Time</h3>
                <p className="list-description">
                  Ekkremis automates previously manual queries
                </p>
              </div>
            </div>

            <div className="highlight-box">
              <img
                src={require("../img/turtle.png")}
                width="60"
                height="60"
                viewbox="0 0 16 16"
              ></img>

              <div>
                <h3 className="list-heading">Open Source</h3>
                <p className="list-description">
                  Contributors and suggestions for improvements are encouraged
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="description">
          <h1>Cluster Lifecycle Insights</h1>
          <p>
            Pods in Kubernetes have a lifecycle composed of several phases shown
            in the diagram below. While most pods quickly progress from Pending
            to Running, some pods can get stuck in Pending. Troubleshooting
            pending pods and understanding the changes needed to solve the issue
            can be time-consuming and require many manual queries. Ekkremis is
            here to help!
          </p>
          <img
            src="../img/pod_lifecycle.png"
            alt="diagram of the kubernetes pod lifcycle"
            height="auto"
            width="300px"
          ></img>
        </div>

        <figure className="features-container">
          <div className="features-square">
            <div className="features-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M16.143 2l5.857 5.858v8.284l-5.857 5.858h-8.286l-5.857-5.858v-8.284l5.857-5.858h8.286zm.828-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-6.471 6h3l-1 8h-1l-1-8zm1.5 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
              </svg>
            </div>
            <h3 className="features-header3">Automated Alerts</h3>
            <p className="features-paragraph">
              No more forgetting to manually query to find pods stuck in the
              pending phase. Instead, customize email or slack alerts that will
              suggest solutions in a timely fashion.
            </p>
          </div>
          <div className="features-square">
            <div className="features-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M13 12.414v-12.364c6.158.51 11 5.66 11 11.95 0 6.627-5.373 12-12 12-2.953 0-5.654-1.072-7.744-2.842l8.744-8.744zm-2-12.364c-6.158.51-11 5.66-11 11.95 0 2.954 1.072 5.654 2.842 7.745l1.42-1.42c-1.412-1.725-2.262-3.928-2.262-6.325 0-5.177 3.953-9.446 9-9.949v-2.001z" />
              </svg>
            </div>
            <h3 className="features-header3">
              Optomized Kubernetes Lifecycles
            </h3>
            <p className="features-paragraph">
              See just how much efficiency you gain by applying Ekkremis solutions with a
              dashboard organized by pod status.
            </p>
          </div>
          <div className="features-square">
            <div className="features-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm13.5 10.75c0-.414-.336-.75-.75-.75h-4.5c-.414 0-.75.336-.75.75s.336.75.75.75h4.5c.414 0 .75-.336.75-.75zm-11.772-.537 1.25 1.114c.13.116.293.173.455.173.185 0 .37-.075.504-.222l2.116-2.313c.12-.131.179-.296.179-.459 0-.375-.303-.682-.684-.682-.185 0-.368.074-.504.221l-1.66 1.815-.746-.665c-.131-.116-.293-.173-.455-.173-.379 0-.683.307-.683.682 0 .188.077.374.228.509zm11.772-2.711c0-.414-.336-.75-.75-.75h-4.5c-.414 0-.75.336-.75.75s.336.75.75.75h4.5c.414 0 .75-.336.75-.75zm-11.772-1.613 1.25 1.114c.13.116.293.173.455.173.185 0 .37-.074.504-.221l2.116-2.313c.12-.131.179-.296.179-.46 0-.374-.303-.682-.684-.682-.185 0-.368.074-.504.221l-1.66 1.815-.746-.664c-.131-.116-.293-.173-.455-.173-.379 0-.683.306-.683.682 0 .187.077.374.228.509zm11.772-1.639c0-.414-.336-.75-.75-.75h-4.5c-.414 0-.75.336-.75.75s.336.75.75.75h4.5c.414 0 .75-.336.75-.75z" />
              </svg>
            </div>
            <h3 className="features-header3">Micro and Macro Views</h3>
            <p className="features-paragraph">
              View resource usage and other metrics for individual pods or whole
              clusters. Ekkremis abstracts the difficulties of PromQl and
              provides you with easy to interpret lightweight charts.
            </p>
          </div>
          <div className="features-square">
            <div className="features-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  d="m15.985 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007zm1.991 6.999c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm-3 0c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm-3 0c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
            <h3 className="features-header3">Enhanced Error Handling</h3>
            <p className="features-paragraph">
              If a Pod is stuck in Pending it means that it can not be scheduled
              onto a node. There are a variety of common reasons and Ekkremis
              can identfiy them and suggest tailored soulutions.
            </p>
          </div>
        </figure>
      </div>

      <div className="demo-container">
        <h1 className="">Demo video</h1>
        <p>
          See the Ekkremis lifecycle optomization dashboard with Electron
          runtime in action!{" "}
        </p>
        <div className="Demo"></div>
      </div>

      <div>
        <People />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
