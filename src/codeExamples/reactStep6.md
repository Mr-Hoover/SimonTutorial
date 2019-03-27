```
Add to userClick function :

setTimeout(() => {
  this.sequenceCheck();
}, 500);


Add to App :

//Checking simonsSequence vs userSequence
  sequenceCheck = () => {
    const simon = this.state.simonSequence;
    const user = this.state.userSequence;
//Sequence Wrong
    user.map((item, index) => {
      if (item !== simon[index]) {
        this.setState({
          userSequence: []
        });
        sound1.play();
        sound2.play();
        sound3.play();
      }
    });
//Sequence Right
    if (simon.length === user.length) {
      this.setState({ userSequence: [] });
      setTimeout(() => {
        this.nextLevel();
        this.blinkEach();
      }, 500);
    }
  }

```
