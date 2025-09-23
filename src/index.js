import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
import * as serviceWorker from "./registerServiceWorker"; // Updated this line

ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();
serviceWorker.unregister();
