import React, { Component } from "react";
import { AutoAffix } from "react-overlays";
import ScrollableAnchor from "react-scrollable-anchor";
import "../styles/Step.css";
import codeReact from "../codeExamples/reactStep4.md";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

class Step4 extends Component {
  render() {
    return (
      <div classname="Step">
        <AutoAffix container={this}>
          <div className="panel panel-default">
            <div className="panel-body">
              <ScrollableAnchor id={"StepFour"}>
                <h2>Step 4: Blink Next </h2>
              </ScrollableAnchor>
            </div>
          </div>
        </AutoAffix>
        <ul>
          <li>Generate next random # for Simon</li>
          <li>
            Get the Correct Color div to blink for all #’s in simonSequence
          </li>
        </ul>

        <p>React:</p>
        <ReactMarkdown source={codeReact} renderers={{ code: CodeBlock }} />
      </div>
    );
  }
}

export default Step4;
