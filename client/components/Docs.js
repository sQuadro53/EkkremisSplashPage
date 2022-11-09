import React from "react";
import TopBar from "./TopBar";
import Toc from "./Toc";
import "../styles/Docs.css";
import Footer from "./Footer";
import CodeCopy from "./CodeCopy";

const DummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const Docs = () => {
  return (
    <div>
      <div className="container">
        <TopBar />
        <main>
          <h2 id="initial-header">Ekkremis</h2>
          <p>
            Ekkremis (εκκρεμής) is greek for Pending. While pending pods are
            enevitable, there's no reason to keep the around or forget about
            them. Push updates to your cluster worry free with Ekkremis alerts
            and lifecycle optomization dashboard.{" "}
          </p>

          <h2 id="second-header">Running the App</h2>
          <p>Prerequisites (Not required for the Demo):</p>
          <ul>Prometheus installed</ul>
          <ul>The port-forward for Prometheus: `localhost:9090`</ul>

          <h3 id="third-header">Development Mode (Web)</h3>
          <p>Ekkremis can be run from the web as well as Electron.</p>
          <p>To get started on the web, follow these steps:</p>
          <CodeCopy copyText={"npm install; npm run build"} />
          <p>The build step will add to your 'dist' folder.</p>
          <p>Next, start Ekkremis:</p>
          <CodeCopy copyText={"npm start"} />

          <h3 id="third-header">Development Mode (Electron)</h3>
          <p>
            Electron is configured for hot reloading when opened in development
            mode. The server will watch for changes to the files and rerender
            the app.
          </p>
          <p>To get started, follow these steps:</p>
          <CodeCopy copyText={"npm install; npm postinstall"} />
          <p>The post install step is for Electron-specific dependencies.</p>
          <p>The build step will add to your 'electron' folder and .</p>
          <p>Next, start Ekkremis:</p>
          <CodeCopy copyText={"npm run electron:dev"} />

          <h3 id="third-header">Production Mode (Electron Only)</h3>
          <p>
            The command below will build and bundle files into /dist folder for
            production and open the electron app based on the bundled files.
          </p>
          <CodeCopy copyText={"npm run electron:build"} />

          <h2 id="third-header">Using Ekkremis Lifecycle Dashboard</h2>
          <li>
            On a successful startup, you will be greeted with a landing page
            with the option to continue to dashboard.
          </li>
          <li>
            The Dashboard is where you will find a summary of your pods,
            displayed metrics, and the option to investigate possible errors.
          </li>
          <li>
            Once in the dashboard Ekkremis will intrinsically check the
            prometheus enpoint 'localhost:9090', please edit this endpoint if
            needed in the top navigation bar.
          </li>
          <li>
            A querybar on the left will transport you through views of oyur pods
            in verious lifecycle statuses.
          </li>
          <li>
            You can view charts and error messages for individual pods by
            selecting the 'charts' and 'logs' button on each pods display.
          </li>
          <li>
            You can view charts and metrics for groups of pods in the chart
            display at the top of the dashboard.
          </li>

          <h2 id="fourth-header">Kubernetes Requirements</h2>
          <p>
            Ekkremis can observe Kubernetes clusters that are locally hosted
            with MiniKube or hosted on the cloud so long as prometheus has been
            set up to monitor them.
          </p>
          <p>
            Learn more about MiniKube{" "}
            <a href="https://minikube.sigs.k8s.io/docs/start/">here</a>
          </p>
          <p>
            Learn more about hosting Kubernetes cluster on the cloud with{" "}
            <a href="https://aws.amazon.com/pm/eks/?trk=f1c2908b-21ff-4e9e-9903-63e9080ae3f4&sc_channel=ps&s_kwcid=AL!4422!3!624771413892!e!!g!!aws%20kubernetes&ef_id=Cj0KCQiAmaibBhCAARIsAKUlaKTi9giWe9VN1GBY72A4mwxHDhXQyRj9U8z8gsgPx3Ar6Dw4t8OWaiYaAn-gEALw_wcB:G:s&s_kwcid=AL!4422!3!624771413892!e!!g!!aws%20kubernetes">
              Amazon Web Services (AWS)
            </a>{" "}
            or{" "}
            <a href="https://cloudonair.withgoogle.com/events/cloud-onboard-gke">
              Google Cloud Platform (GCP)
            </a>
            .
          </p>

          <h2 id="fifth-header">Prometheus Requirements</h2>
          <p>Ekkremis requires a Prometheus enpoint to display your data. Once you have Prometheus installed into your Kubernetes cluster, follow the steps below to connect your setup to Ekkremis.</p>
          <CodeCopy copyText={"kubectl port-forward service/[PROMETHEUS] 9090"} />

          <h3 id="fifth-header">Connecting Prometheus to Ekkremis</h3>
          <p>With sucessful port forwarding, you are ready to begin with Ekkremis.</p>
          <p>Simply load the app and enter the Prometheus metrics endpoint into the top navigation bar.</p>

          <h2 id="sixth-header">Features</h2>
          <li>Realtime pod metric, with the option to sort by pod lifecycle status</li>
          <li>Optomizing Kubernetes served locally or on the cloud</li>
          <li>Filter by pod status, so you never forget about pending pods again</li>
          <li>customizable monitoring and alerts for unhealthy pods</li>
          <li>Displays error logs and provides solutions</li>
          <li>Abstract away PromQL queries with preconfigured views</li>

          <h2 id="seventh-header">Upcoming Features</h2>
          <li>Expansion of error logs accesible using Kubectl the Kubernetes command line interface</li>
          <li>Customized solutions for pods stuck in the unknown state</li>
          <li>User accounts for the storage long-term storage of pod history </li>

          <h2 id="eighth-header">Technologies</h2>
          <p>Ekkremis was build with:</p>
          <li>Electron</li>
          <li>Typescript</li>
          <li>React</li>
          <li>React Router</li>
          <li>Jest</li>
          <li>Node</li>
          <li>Prometheus</li>
          <li>Chart.js</li>
          <li>Webpack</li>
        </main>
        <Toc />
      </div>
      <Footer />
    </div>
  );
};

export default Docs;
