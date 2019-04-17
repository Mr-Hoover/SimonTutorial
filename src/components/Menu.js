import React, { Component } from "react";
import "../styles/Menu.css";
import ScrollableAnchor from "react-scrollable-anchor";
import App from "../index.js";

import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset: -100})

class Menu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div>
        <div
          id="flyoutMenu"
          onMouseUp={this.props.handleMouseDown}
          className={visibility}
        >
          <div className="Menu">
            <h3>
              <a href="#Top">
               <img
              className="Logo"
              src="https://static-asset-delivery.hasbroapps.com/5d395fc4f350191038d25e68a836a9422da9cde8/f5157f9173a103e2d3cb7747f3080681.png"
              height="40"
            />
              </a>
            </h3>

            <div className="tooltip">
              <h3>
                <a href="#StepOne">Step 1: Set up </a>
              </h3>
              <span className="stepDescript">
                - 4 color boxes (green, red, yellow, blue)
                <br />
                - Control Panel w/ 2 buttons (start / replay)
                <br />
                - 3 outputs (# of steps, Simon’s Sequence, User Sequence)
                <br />
              </span>
            </div>

            <div className="tooltip">
              <h3>
                <a href="#StepTwo">Step 2: Blink / Play</a>
              </h3>
              <span className="stepDescript">
                - Get Color to Blink / Play Sound
                <br />
              </span>
            </div>

            <div className="tooltip">
              <h3>
                <a href="#StepThree">Step 3: Blink by Num</a>
              </h3>
              <span className="stepDescript">
                - Generate a random # for Simon’s 1st #<br />
                - Get the Correct Color div to blink
                <br />
              </span>
            </div>

            <div className="tooltip">
              <h3>
                <a href="#StepFour">Step 4: Blink Next</a>
              </h3>
              <span className="stepDescript">
                - Generate next random # for Simon
                <br />
                - Get the Correct Color div to blink for all #’s in
                simonSequence
                <br />
              </span>
            </div>

            <div className="tooltip">
              <h3>
                <a href="#StepFive">Step 5: User Blink</a>
              </h3>
              <span className="stepDescript">
                - Get Color div to blink when clicked on
                <br />
                - Get userSequence to update w/ div clicked
                <br />
              </span>
            </div>

            <div className="tooltip">
              <h3>
                <a href="#StepSix">Step 6: Right & Wrong</a>
              </h3>
              <span className="stepDescript">
                - Have app compare User vs Simon
                <br />
                - sequence wrong
                <br />
                - sequence right
                <br />
              </span>
            </div>

            <div className="tooltip">
              <h3>
                <a href="#StepSeven">Step 7: Buttons</a>
              </h3>
              <span className="stepDescript">
                - Set Start / Reset Button
                <br />
                - Set Replay Sequence Button
                <br />
              </span>
            </div>

            <div className="tooltip">
              <h3>
                <a href="#StepEight">Step 8: CSS</a>
              </h3>
              <span className="stepDescript">
                - Final changes to React return
                <br />
                - Final changes to CSS
                <br />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
