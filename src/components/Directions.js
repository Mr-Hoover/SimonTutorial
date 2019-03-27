import React, { Component } from "react";

class Directions extends Component {
  render() {
    return (
      <div classname="Directions">
        <h1>
          Building{" "}
          {
            <img
              className="Logo"
              src="https://static-asset-delivery.hasbroapps.com/5d395fc4f350191038d25e68a836a9422da9cde8/f5157f9173a103e2d3cb7747f3080681.png"
              height="40"
            />
          }{" "}
          in React
        </h1>
        <h4>
          Simon is an electronic game of memory skill. The device has four
          colored buttons, each producing a particular tone when it is pressed
          or activated by the device. A round in the game consists of the device
          lighting up one or more buttons in a random order, after which the
          player must reproduce that order by pressing the buttons. As the game
          progresses, the number of buttons to be pressed increases.
        </h4>
      </div>
    );
  }
}

export default Directions;
