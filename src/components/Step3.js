import React, { Component } from "react";
import { AutoAffix } from "react-overlays";
import ScrollableAnchor from "react-scrollable-anchor";
import "../styles/Step.css";
import codeReact from "../codeExamples/reactStep3.md";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

class Step3 extends Component {
  render() {
    return (
      <div classname="Step">
        <AutoAffix container={this}>
          <div className="panel panel-default">
            <div className="panel-body">
              <ScrollableAnchor id={"StepThree"}>
                <h2>Step 3: Blink by Num </h2>
              </ScrollableAnchor>
            </div>
          </div>
        </AutoAffix>
        <ul>
          <li>Generate a random # for Simon’s 1st #</li>
          <li>Get the Correct Color div to blink</li>
        </ul>

        <p>React:</p>
        <ReactMarkdown source={codeReact} renderers={{ code: CodeBlock }} />
      </div>
    );
  }
}

export default Step3;
