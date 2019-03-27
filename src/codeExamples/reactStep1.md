```
import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

render() {
  return (
    <div className="App">
      <div className="Simon">
        <div className="Green"/>
        <div className="Red”/>
        <div className="Yellow"/>
        <div className="Blue"/>
        <div className="ControlPanel">
          <button >Start game / Reset</button>
          <button > Replay Sequence </button>
        </div>
      </div>

      <div>Number of steps : {this.state.simonSequence.length} </div>
      <div>Simon's Sequence : {this.state.simonSequence} </div>
      <div>User Sequence : {this.state.userSequence} </div>
    </div>
  );
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```
