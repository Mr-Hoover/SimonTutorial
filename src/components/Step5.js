import React, { Component } from "react";
import { AutoAffix } from "react-overlays";
import ScrollableAnchor from "react-scrollable-anchor";
import "../styles/Step.css";
import codeReact from "../codeExamples/reactStep5.md";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

class Step5 extends Component {
  render() {
    return (
      <div className="Step">
        <ScrollableAnchor id={"StepFive"}>
          <div className="anchorPoint" />
        </ScrollableAnchor>
        <AutoAffix container={this}>
          <div className="panel panel-default">
            <div className="panel-body">
              <h2>Step 5: User Blink </h2>
            </div>
          </div>
        </AutoAffix>
        <ul>
          <li>Get Color div to blink when clicked on</li>
          <li>Get userSequence to update w/ div clicked</li>
        </ul>

        <p>React:</p>
        <ReactMarkdown source={codeReact} renderers={{ code: CodeBlock }} />
      </div>
    );
  }
}

export default Step5;
