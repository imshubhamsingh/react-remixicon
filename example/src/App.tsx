import React, { Component } from "react";
import { Icon } from "react-remixicon";

class App extends Component {
  render() {
    console.log(Icon);
    return (
      <div>
        <Icon name="home-3-line" ariaHidden="false" size="3x" />
        hi
      </div>
    );
  }
}

export default App;
