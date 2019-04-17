import React, { Component } from "react";
import { AutoAffix } from "react-overlays";
import ScrollableAnchor from "react-scrollable-anchor";
import "../styles/Step.css";
import codeReact from "../codeExamples/reactStep1.md";
import codeCSS from "../codeExamples/cssStep1.md";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";



class Step1 extends Component {
  render() {
    return (
      <div className="Step">
      <ScrollableAnchor id={"StepOne"}> 
      <div className= "anchorPoint"/>
      </ScrollableAnchor>
        <AutoAffix container={this}>
          <div className="panel panel-default">
            <div className="panel-body">
              
                <h2>Step 1: Set-up </h2>
              
            </div>
          </div>
        </AutoAffix>
        <ul>
          <li>4 color boxes (green, red, yellow, blue)</li>
          <li>Control Panel w/ 2 buttons (start / replay)</li>
          <li>3 outputs (# of steps, Simon’s Sequence, User Sequence)</li>
        </ul>

        <p>React:</p>
        <ReactMarkdown source={codeReact} renderers={{ code: CodeBlock }} />

        <p>CSS:</p>
        <ReactMarkdown source={codeCSS} renderers={{ code: CodeBlock }} />
      </div>
    );
  }
}

export default Step1;
