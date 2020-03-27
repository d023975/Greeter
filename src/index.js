import React from "react";
import ReactDOM from "react-dom";
import './styles.css';

import Greeter from "./App";

const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );
ReactDOM.render(<Greeter maxLength={20} />, rootElement);
