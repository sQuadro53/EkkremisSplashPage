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
          Ekkremis (εκκρεμής) is Greek for Pending. Induction of pending pods is inevitable and identifying the issues to get those pods running is challenging. Push updates to your cluster worry-free with Ekkremis alerts and lifecycle optimization dashboard.
          </p>

          <h2 id="second-header">Running the App</h2>
          <p>Prerequisites (Not required for the Demo):</p>
          <ul>Prometheus installed</ul>
          <ul>The port-forward for Prometheus: `localhost:9090`</ul>

          <h3 id="third-header">Development Mode (Web)</h3>
          <p>Ekkremis can be run from the web as well as from Electron.</p>
          <p>To get started on the web, follow these steps:</p>
          <p>Clone the Ekkremis repository:</p>
          <CodeCopy copyText={"https://github.com/oslabs-beta/Ekkremis"} />
          <p>In the terminal in the cloned repository run the following commands:</p>
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
          <p>To get started on the web, follow these steps:</p>
          <p>Clone the Ekkremis repository:</p>
          <CodeCopy copyText={"https://github.com/oslabs-beta/Ekkremis"} />
          <p>In the terminal in the cloned repository run the following commands:</p>
          <CodeCopy copyText={"npm install; npm postinstall"} />
          <p>The post-install step is for Electron-specific dependencies.</p>
          <p>The build step will add to your 'electron' folder and .</p>
          <p>Next, start Ekkremis:</p>
          <CodeCopy copyText={"npm run electron:dev"} />

          <h3 id="third-header">Production Mode (Electron Only)</h3>
          <p>
            The command below will build and bundle files into the 'dist' folder for
            production. The Electron app will be rendered based on the bundled files.
          </p>
          <CodeCopy copyText={"npm run electron:build"} />

          <h2 id="third-header">Using Ekkremis Lifecycle Dashboard</h2>
          <li>
            1. On a successful startup, you will be greeted with a landing page
            and the option to continue to the dashboard.
          </li>
          <li>
            2. The Dashboard is where you will find a summary of your pods,
            displayed metrics, and the option to investigate possible errors.
          </li>
          <li>
            3. Once in the dashboard, Ekkremis will intrinsically check the
            Prometheus endpoint 'localhost:9090', please edit this endpoint if
            needed in the top navigation bar.
          </li>
          <li>
            4. A query bar on the left will transport you through views of your pods
            in various lifecycle statuses.
          </li>
          <li>
            5. You can view error messages for individual pods by
            selecting the 'logs' button on each pod's display.
          </li>
          <li>
            6. You can view charts and metrics for groups of pods in the chart
            display at the top of the dashboard.
          </li>

          <h2 id="fourth-header">Kubernetes Requirements</h2>
          <p>
            Ekkremis can observe Kubernetes clusters that are locally hosted
            with MiniKube or hosted on the cloud so long as Prometheus has been
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
          <p>Ekkremis requires a Prometheus endpoint to display your data. Once you have Prometheus installed into your Kubernetes cluster, follow the steps below to connect your setup to Ekkremis.</p>
          <CodeCopy copyText={"kubectl port-forward service/[PROMETHEUS] 9090"} />

          <h3 id="fifth-header">Connecting Prometheus to Ekkremis</h3>
          <p>With successful port forwarding, you are ready to begin with Ekkremis.</p>
          <p>Simply load the app and enter the Prometheus metrics endpoint into the top navigation bar.</p>

          <h2 id="eighth-header">Running the Demo</h2>
          <p>We have two ways of serving up mock data to get you accustomed to Ekkremis. These demos include several induced error cases as well as healthy deployments. </p>

          <h3 id="fifth-header">Prepared mock data through endpoint</h3>
          <p>This option is the fastest and doesn't require Prometheus or Kubernetes to be setup as a prerequisite. </p>
          <p>1. Copy the following demo endpoint and paste it in the top navbar of Ekkremis. </p>
          <p>2. Explore the mock data presentations on your own, or reference the instructions for 'Using Ekkremis Lifecycle Dashboard' posted above. </p>

          <h3 id="fifth-header">Deploy mock data pods with MiniKube</h3>
          <p>Prereqisites: installation of Docker, minikube, and and the kubectl command line tool. </p>
          <p>1. Start the Docker desktop app (you don't need to be signed in). </p>
          <p>2. Start your minicube cluster with the command below: </p>
          <CodeCopy copyText={"minikube start"} />
          <p>3. Minikube has its own pods and you can check them out with the following command to view all running pods: </p>
          <CodeCopy copyText={"kubectl get po -A"} />
          <p>4. Clone the following repo of mock yaml files make for Ekkremis: </p>
          <CodeCopy copyText={"https://github.com/sQuadro53/Ekkremis-Setup-Files.git"} />
          <p>5. Change directory to the cloned repo: </p>
          <CodeCopy copyText={"cd Ekkremis-Setup-Files"} />
          <p>6. Explore the mock data files present arranged by error case and pick the ones relevant to you.</p>
          <p>7. We will deploy as a positive control, a working version of the popular app Cow Clicker.</p>
          <CodeCopy copyText={"kubectl apply -f cowclicker_working.yml"} />
          <p>8. Now we'll deploy a version of the app that has an incorrect Docker image file resulting in a pending error.</p>
          <CodeCopy copyText={"kubectl apply -f cowclicker_not_working.yml"} />
          <p>9. Optional: deploy additional mock error cases from the files in this folder.</p>
          <p>10. Next we will set up kube-state-metrics, a project under the Kubernetes organization, generates Prometheus format metrics based on the current state of the Kubernetes native resources.</p>
          <p>11. Clone the following git repository:</p>
          <CodeCopy copyText={"https://github.com/kubernetes/kube-state-metrics.git"} />
          <p>12. Enter the freshly cloned repository.</p>
          <p>13. Create the kube metrics server.</p>
          <CodeCopy copyText={"kubectl apply -f examples/standard"} />
          <p>14. Run the get all pods command to check if state metrics is now available in the kube-system namespace.</p>
          <CodeCopy copyText={"kubectl get po -A"} />
          <p>15. Expose the metrics endpoint so you can view it in browser to check if it is working properly.</p>
          <CodeCopy copyText={"kubectl proxy"} />
          <p>16. Metrics should be available in this url: `http://localhost:8001/api/v1/namespaces/kube-system/services/kube-state-metrics:http-metrics/proxy/metrics`</p>
          <p>17. Once satisfied, exit out of this proxy with <code>^C</code></p>
          <p>18. Next we will start Prometheus. We'll create a namespace for it below:</p>
          <CodeCopy copyText={"kubectl create namespace monitoring"} />
          <p>19. Navigate to the cloned 'Ekkremis-Setup-Files' directory and distinguish the cluster role with a config file. The <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">cluster role</a> contains rules for permissions. This has to be set within a particular namespace, the "kind" value must match the new namespace.</p>
          <CodeCopy copyText={"kubectl create -f clusterRole.yml"} />
          <p>20. Prepare for the Prometheus deployment using the <a href="https://kubernetes.io/docs/concepts/configuration/configmap/">config-map</a>:</p>
          <CodeCopy copyText={"kubectl create -f config-map.yml"} />
          <p>21. Deploy Prometheus:</p>
          <CodeCopy copyText={"kubectl create  -f prometheus-deployment.yml"} />
          <p>22. Confirm the deployment by looking at all pods:</p>
          <CodeCopy copyText={"kubectl get po -A"} />
          <p>23. Prometheus scrapes all data from the kube metrics server. You can learn more <a href="http://localhost:8001/api/v1/namespaces/kube-system/services/kube-state-metrics:http-metrics/proxy/metrics">here</a>.</p>
          <p>24. Next we can get access to prometheus in the browser. Get the name of our prometheus deployment:</p>
          <CodeCopy copyText={"kubectl get deployments --namespace=monitoring"} />
          <p>25. Execute the following command with our pod name to access prometheus from localhost port 9090:</p>
          <CodeCopy copyText={"kubectl port-forward <name-of-deployment> 9090:9090 -n monitoring"} />
          <p>26. Metrics should be available in this url: `http://localhost:9090`</p>
          <p>27. Open Ekkrems and provide this endpoint in the top navbar to learn more about your live deployed mock pods!</p>
          
          <h2 id="sixth-header">Features</h2>
          <li>Realtime pod metric, with the option to sort by pod lifecycle status</li>
          <li>Optomizing Kubernetes served locally or on the cloud</li>
          <li>Filter by pod status, so you never forget about pending pods again</li>
          <li>Customizable monitoring and alerts for unhealthy pods</li>
          <li>Displays error logs and provides solutions</li>
          <li>Abstract away PromQL queries with preconfigured views</li>

          <h2 id="seventh-header">Upcoming Features</h2>
          <li>Expansion of error logs accessible using Kubectl the Kubernetes command line interface</li>
          <li>Customized solutions for pods stuck in the unknown state</li>
          <li>User accounts for the storage long-term storage of pod history</li>
          
          <h2 id="eighth-header">Technologies</h2>
          <p>Ekkremis was build with:</p>
          <div className='tech-stack'> 
          <li>
            <p>Electron</p>
            <img className='tech-stack-icons' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png' alt=''/>
          </li>
          <li>
            <p>TypeScript</p>
            <img className='tech-stack-icons' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' alt=''/>
          </li>
          <li>
            <p>React</p>
            <img className='tech-stack-icons' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt=''/>
          </li>
          <li>
            <p>React Router</p>
            <img className='tech-stack-icons' src='https://cdn.freebiesupply.com/logos/large/2x/react-router-logo-png-transparent.png' alt=''/>
          </li>
          <li>
            <p>Jest</p>
            <img className='tech-stack-icons' src='https://www.pngfind.com/pngs/m/92-927312_jest-testing-hd-png-download.png' alt=''/>
          </li>
          <li>
            <p>Node js</p>
            <img className='tech-stack-icons' src='https://img.favpng.com/16/11/19/node-js-javascript-web-application-express-js-computer-software-png-favpng-cYmJvJyBDcTNbLdSRdNAceLyW.jpg' alt=''/>
          </li>
          <li>
            <p>Prometheus</p>
            <img className='tech-stack-icons' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png' alt=''/>
          </li>
          <li>
            <p>Chart js</p>
            <img className='tech-stack-icons' src='https://avatars.githubusercontent.com/u/10342521?s=280&v=4' alt=''/>
          </li>
          <li>
            <p>Webpack</p>
            <img className='tech-stack-icons' src='https://seeklogo.com/images/W/webpack-logo-9E66EE203A-seeklogo.com.png' alt=''/>
          </li>
          </div>
        </main>
        <Toc />
      </div>
      <Footer />
    </div>
  );
};

export default Docs;
