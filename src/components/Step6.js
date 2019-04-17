import React, { Component } from "react";
import { AutoAffix } from "react-overlays";
import ScrollableAnchor from "react-scrollable-anchor";
import "../styles/Step.css";
import codeReact from "../codeExamples/reactStep6.md";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";



class Step6 extends Component {
  render() {
    return (
      <div className="Step">
        <AutoAffix container={this}>
          <div className="panel panel-default">
            <div className="panel-body">
              <ScrollableAnchor id={"StepSix"}>
                <h2>Step 6: Right & Wrong </h2>
              </ScrollableAnchor>
            </div>
          </div>
        </AutoAffix>
        <ul>
          <li>Have app compare User vs Simon</li>
          <ul>
            <li>sequence wrong</li>
            <li>sequence right</li>
          </ul>
        </ul>

        <p>React:</p>
        <ReactMarkdown source={codeReact} renderers={{ code: CodeBlock }} />
      </div>
    );
  }
}

export default Step6;
