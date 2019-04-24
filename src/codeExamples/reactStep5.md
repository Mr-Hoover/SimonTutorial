```
Add to State :
  userSequence: [],


Add to App :
  userClick = (colorNum) => {
    const addSequence = this.state.userSequence.slice();
    addSequence.push(colorNum);
    this.setState({
      userSequence: addSequence
    });
    this.blinkCheck(colorNum);
  };


Add to color div :
  onClick={() => this.userClick(1)}


Add to Output:
  <div>User Sequence :{this.state.userSequence}</div>

```
