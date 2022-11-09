import React from "react";
import TopBar from "./TopBar";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="not-found-container">
      <TopBar />
      <img src="../img/Ekkremis-md.png" alt="Page not Found" />
      <h1>Oops!</h1>
      <p>
        Sorry, this part of the ocean is too deep even for Ekkremis. Try
        searching in a different endpoint.
      </p>
    </div>
  );
};

export default NotFound;
