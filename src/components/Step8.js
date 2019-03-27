import React, { Component } from "react";
import { AutoAffix } from "react-overlays";
import ScrollableAnchor from "react-scrollable-anchor";
import "../styles/Step.css";
import codeReact from "../codeExamples/reactStep8.md";
import codeCSS from "../codeExamples/cssStep8.md";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

class Step8 extends Component {
  render() {
    return (
      <div className="Step">
        <AutoAffix container={this}>
          <div className="panel panel-default">
            <div className="panel-body">
              <ScrollableAnchor id={"StepEight"}>
                <h2>Step 8: CSS </h2>
              </ScrollableAnchor>
            </div>
          </div>
        </AutoAffix>
        <ul>
          <li>Final changes to React</li>
          <li>Final changes to CSS</li>
        </ul>

        <p>React:</p>
        <ReactMarkdown source={codeReact} renderers={{ code: CodeBlock }} />

        <p>CSS:</p>
        <ReactMarkdown source={codeCSS} renderers={{ code: CodeBlock }} />
      </div>
    );
  }
}

export default Step8;
