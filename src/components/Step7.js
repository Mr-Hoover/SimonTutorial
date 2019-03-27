import React, { Component } from "react";
import { AutoAffix } from "react-overlays";
import ScrollableAnchor from "react-scrollable-anchor";
import "../styles/Step.css";
import codeReact from "../codeExamples/reactStep7.md";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

class Step7 extends Component {
  render() {
    return (
      <div classname="Step">
        <AutoAffix container={this}>
          <div className="panel panel-default">
            <div className="panel-body">
              <ScrollableAnchor id={"StepSeven"}>
                <h2>Step 7: Buttons </h2>
              </ScrollableAnchor>
            </div>
          </div>
        </AutoAffix>
        <ul>
          <li>Set Start / Reset Button</li>
          <li>Set Replay Sequence Button</li>
        </ul>

        <p>React:</p>
        <ReactMarkdown source={codeReact} renderers={{ code: CodeBlock }} />
      </div>
    );
  }
}

export default Step7;
