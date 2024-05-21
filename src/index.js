import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./login";
import reportWebVitals from "./reportWebVitals";
import FoodOrderingPage from "./foodordering";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <BrowserRouter>
        <App />
      </BrowserRouter>

      {/* <Login /> */}
      {/* <FoodOrderingPage /> */}
      {/* <FoodItem /> */}
    </body>
  </html>
);

reportWebVitals();
