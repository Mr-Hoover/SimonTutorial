```
Place outside of app:

//generate Simons first move
  const first = Math.floor(Math.random() * 4 + 1);


Place inside of app:

Add to State :
  simonSequence: [first],

//Start the Game (play Simons First Sequence)
  startGame = async() => {
    await this.setState({ simonSequence: [first] });
    this.blinkCheck(this.state.simonSequence);
  };


Change Button onClick Command to startGame():
  onClick={() => this.startGame()


Add to OutPut:
  <div>Number of steps : {this.state.simonSequence.length} </div>
  <div>Simon's Sequence :{this.state.simonSequence}</div>

```
