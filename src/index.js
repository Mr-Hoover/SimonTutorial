import React from "react";
import ReactDOM from "react-dom";
import ScrollableAnchor from "react-scrollable-anchor";
import MenuContainer from "./components/MenuContainer";
import Directions from "./components/Directions";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";
import Step7 from "./components/Step7";
import Step8 from "./components/Step8";

import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <ScrollableAnchor id={"Top"}>
        <MenuContainer />
      </ScrollableAnchor>
      <div className="body">
        <div className="parallax" />
        <Directions />
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
        <Step6 />
        <Step7 />
        <Step8 />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
