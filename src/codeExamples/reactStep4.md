```
//generate Simons next move
  nextLevel = () => {
    const addSequence = this.state.simonSequence.slice();
    const newEntry = Math.floor(Math.random() * 4 + 1);
    addSequence.push(newEntry);
    this.setState({
      simonSequence: addSequence
    });
  };

  //Start the Game (play Simons First Sequence)
    startGame = async() => {
      await this.setState({ simonSequence: [first] });
      this.blinkEach();
    };

  // Run each number of the sequence
    blinkEach = () => {
      this.state.simonSequence.map((item, index) => {
      setTimeout(() => {
        this.blinkCheck(item);
      }, index * 1000);
      });
    };


To test change onClick to:
  onClick={() => this.blinkEach()
and to the other button:
  onClick={() => this.nextLevel()}

```
