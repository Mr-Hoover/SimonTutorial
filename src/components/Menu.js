import React, { Component } from "react";
import "../styles/Menu.css";
import ScrollableAnchor from "react-scrollable-anchor";
import App from "../index.js";

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
              <a href="#Top">Home</a>
            </h3>

            <div class="tooltip">
              <h3>
                <a href="#StepOne">Step 1: Set up </a>
              </h3>
              <span class="stepDescript">
                - 4 color boxes (green, red, yellow, blue)
                <br />
                - Control Panel w/ 2 buttons (start / replay)
                <br />
                - 3 outputs (# of steps, Simon’s Sequence, User Sequence)
                <br />
              </span>
            </div>

            <div class="tooltip">
              <h3>
                <a href="#StepTwo">Step 2: Blink / Play</a>
              </h3>
              <span class="stepDescript">
                - Get Color to Blink / Play Sound
                <br />
              </span>
            </div>

            <div class="tooltip">
              <h3>
                <a href="#StepThree">Step 3: Blink by Num</a>
              </h3>
              <span class="stepDescript">
                - Generate a random # for Simon’s 1st #<br />
                - Get the Correct Color div to blink
                <br />
              </span>
            </div>

            <div class="tooltip">
              <h3>
                <a href="#StepFour">Step 4: Blink Next</a>
              </h3>
              <span class="stepDescript">
                - Generate next random # for Simon
                <br />
                - Get the Correct Color div to blink for all #’s in
                simonSequence
                <br />
              </span>
            </div>

            <div class="tooltip">
              <h3>
                <a href="#StepFive">Step 5: User Blink</a>
              </h3>
              <span class="stepDescript">
                - Get Color div to blink when clicked on
                <br />
                - Get userSequence to update w/ div clicked
                <br />
              </span>
            </div>

            <div class="tooltip">
              <h3>
                <a href="#StepSix">Step 6: Right & Wrong</a>
              </h3>
              <span class="stepDescript">
                - Have app compare User vs Simon
                <br />
                - sequence wrong
                <br />
                - sequence right
                <br />
              </span>
            </div>

            <div class="tooltip">
              <h3>
                <a href="#StepSeven">Step 7: Buttons</a>
              </h3>
              <span class="stepDescript">
                - Set Start / Reset Button
                <br />
                - Set Replay Sequence Button
                <br />
              </span>
            </div>

            <div class="tooltip">
              <h3>
                <a href="#StepEight">Step 8: CSS</a>
              </h3>
              <span class="stepDescript">
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
