import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/Canterbury.ttf";
import "./fonts/DS-DIGI.ttf";
import "./fonts/DS-DIGIB.ttf";
<<<<<<< HEAD
import "./index.css";
=======
//import "./index.css";
>>>>>>> dab091d8475a732d99383bc3799f6b6d8f34096b
import firebaseConfig from "./firebaseConfig.js";
import firebase from "firebase";

firebase.initializeApp(firebaseConfig);
console.log("smth");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
