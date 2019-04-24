```
Change CSS to SCSS:
  import "./styles.scss";


return (
  <div className="App">
    <div className="Simon">
      <div className="Colors">
        <div
          className="Green"
          style={{ opacity: `${this.state.blinkGreen}` }}
          onClick={() => this.userClick(1)}
        />
        <div
          className="Red"
          style={{ opacity: `${this.state.blinkRed}` }}
          onClick={() => this.userClick(2)}
        />
        <div
          className="Yellow"
          style={{ opacity: `${this.state.blinkYellow}` }}
          onClick={() => this.userClick(3)}
        />
        <div
          className="Blue"
          style={{ opacity: `${this.state.blinkBlue}` }}
          onClick={() => this.userClick(4)}
        />
      </div>
      <div className="ControlPanel">
        <img className="Logo"
        src="https://static-asset-delivery.hasbroapps.com/5d395fc4f350191038d25e68a836a9422da9cde8/f5157f9173a103e2d3cb7747f3080681.png"
        height="50"
        />
        <div className="Display">
            <div className="Counter"> {this.state.simonSequence.length}
            </div>
            <div className="Buttons">
              <div className="top">
                <button onClick={() => this.startGame()}/>
                <p> START </p>
              </div>
              <div className="bottom">
                <button onClick={() => this.blinkEach()}/>
                <p> REPLAY </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
);
```
