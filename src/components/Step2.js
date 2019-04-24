import React, { Component } from "react";
import { AutoAffix } from "react-overlays";
import ScrollableAnchor from "react-scrollable-anchor";
import "../styles/Step.css";
import codeReact from "../codeExamples/reactStep2.md";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

class Step2 extends Component {
  render() {
    return (
      <div className="Step">
        <ScrollableAnchor id={"StepTwo"}>
          <div className="anchorPoint" />
        </ScrollableAnchor>
        <AutoAffix container={this}>
          <div className="panel panel-default">
            <div className="panel-body">
              <h2>Step 2: Blink / Play </h2>
            </div>
          </div>
        </AutoAffix>
        <ul>
          <li>Get Color to Blink / Play Sound</li>
        </ul>

        <p>React:</p>
        <ReactMarkdown source={codeReact} renderers={{ code: CodeBlock }} />
      </div>
    );
  }
}

export default Step2;
