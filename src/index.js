import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import reduxConfiguration from "./redux/configureStore";
import { Provider } from "react-redux";

const store = reduxConfiguration({ courses: [{ title: "first course" }] });
render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
