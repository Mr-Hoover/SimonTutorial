```
const sound1 = new Audio(
"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
);
const sound2 = new Audio(
"https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
);
const sound3 = new Audio(
"https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
);
const sound4 = new Audio(
"https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    blinkGreen: [],
    blinkRed: [],
    blinkYellow: [],
    blinkBlue: []
    };
  }

//Make the color blink / play sound
    blinkCheck = (item) => {
      const blinkValue = 0.75;
      const blinkLength = 500;

      if (item == 1) {
        this.setState({
          blinkGreen: [blinkValue],
        });
        sound1.play();
        setTimeout(() => {
          this.setState({
            blinkGreen: []
          });
        }, blinkLength);
      } else if (item == 2) {
        this.setState({
          blinkRed: [blinkValue]
        });
        sound2.play();
        setTimeout(() => {
          this.setState({
            blinkRed: []
          });
        }, blinkLength);
      } else if (item == 3) {
        this.setState({
          blinkYellow: [blinkValue]
        });
        sound3.play();
        setTimeout(() => {
          this.setState({
            blinkYellow: []
          });
        }, blinkLength);
      } else if (item == 4) {
        this.setState({
          blinkBlue: [blinkValue]
        });
        sound4.play();
        setTimeout(() => {
          this.setState({
            blinkBlue: []
          });
        }, blinkLength);
      }
    };


Add to color block <div> :
  style={{ opacity: `${this.state.blinkGreen}` }}

Add to a button for testing :
  onClick={() => this.blinkCheck(#)}
```
