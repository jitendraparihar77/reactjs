import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Usememo from "./Usememo";
import FetchApi from "./FetchApi";
import MultipleReturn from "./MultipleReturn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Usememo />
    <FetchApi />
    <MultipleReturn />
  </React.StrictMode>
);
