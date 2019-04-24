```
* {
    background-image: url("http://cdn.backgroundhost.com/backgrounds/subtlepatterns/retina_wood.png");
}

@font-face {
    font-family: 'Digital-7';
    src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/184191/Digital-7.eot?#iefix') format('embedded-opentype'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/184191/Digital-7.woff') format('woff'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/184191/Digital-7.ttf') format('truetype'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/184191/Digital-7.svg#Digital-7')
}

$size: 550px;
$colorSize: 240px;
$radius: 100%;
$around: 7.5px solid #333;
$controlsColor: gray;


.Simon {
    margin: 100px auto;
    display: flex;
    width: $size;
    height: $size;
    border-radius: $radius;
    background: #333;
    flex-wrap: wrap;
}

.Colors {
    display: flex;
    flex-wrap: wrap;
}

.Green {
    background: green;
    border-top-left-radius: $radius;
    margin: auto;
    height: $colorSize;
    width: $colorSize;
    padding: 10px;
    border: $around
}

.Red {
    background: Red;
    border-top-right-radius: $radius;
    margin: auto;
    height: $colorSize;
    width: $colorSize;
    padding: 10px;
    border: $around
}

.Yellow {
    background: Yellow;
    border-bottom-left-radius: $radius;
    margin: auto;
    height: $colorSize;
    width: $colorSize;
    padding: 10px;
    border: $around
}

.Blue {
    background: blue;
    border-bottom-right-radius: $radius;
    margin: auto;
    height: $colorSize;
    width: $colorSize;
    padding: 10px;
    border: $around
}

.ControlPanel {
    position: absolute;
    border-radius: $radius;
    margin: 165px 0 0 165px;
    background:$controlsColor;
    width: 200px;
    height: 200px;
    border: 12px solid #333;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}

img {
    margin-top: 40px;
    background: $controlsColor;
    border-radius: 15px;
}

.Display{
    background: $controlsColor;
    display:flex;
}

.Counter {
    background: black;
    border:2px solid red;
    width: 70px;
    height: 60px;
    Margin-right:5px;
    font-size: 75px;
    color: red;
    text-align: center;
    font-family: 'Digital-7';
}

.Buttons{
    background:$controlsColor;
    Display:flex;
    Flex-direction:column;
    justify-content: end;
    align-items: flex-start;
}

button {
    background: #D3D3D3;
    border-radius: $radius;
    border: 2px solid #333;
    padding: 10px;
    width: 20px;
    height: 20px;
    text-align: center;
    vertical-align: middle;
    box-shadow: 0 3px #999;
}

button:hover {
    cursor: pointer;
}

button:active {
    box-shadow: 0 5px #666;
    transform: translateY(2px);
}

.top ,.bottom {
    background:$controlsColor;
    Display:flex;
    justify-conent: center;
    align-items: center;
    height: 30px;
}

p {
    background: $controlsColor;
    margin-left: 2px;
    font-family: sans-serif;
}

```
