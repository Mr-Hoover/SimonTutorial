import React, { Component } from "react";
import { AutoAffix } from "react-overlays";
import "../styles/MenuButton.css";

class MenuButton extends Component {
  render() {
    return (
      <div className="panelDefault">
      <AutoAffix>
        <div className="panel panel-default">
          <div className="affixpanel">
            <div className="MenuButton">
              <button id="roundButton" onMouseDown={this.props.handleMouseDown}>
                <div className="Colors">
                  <div className="Green" />
                  <div className="Red" />
                  <div className="Yellow" />
                  <div className="Blue" />
                </div>
                <div className="ControlPanel">
                  <img
                    className="Logo"
                    src="https://static-asset-delivery.hasbroapps.com/5d395fc4f350191038d25e68a836a9422da9cde8/f5157f9173a103e2d3cb7747f3080681.png"
                    height="3"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </AutoAffix>
      </div>
    );
  }
}

export default MenuButton;
