```
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {

render() {
  return (
    <div className="App">
      <div className="Simon">
        <div className="Green"/>
        <div className="Red"/>
        <div className="Yellow"/>
        <div className="Blue"/>
        <div className="ControlPanel">
          <button >Start game / Reset</button>
          <button > Replay Sequence </button>
        </div>
      </div>

      <div>Number of steps : {} </div>
      <div>Simon's Sequence : {} </div>
      <div>User Sequence : {} </div>
    </div>
  );
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```
