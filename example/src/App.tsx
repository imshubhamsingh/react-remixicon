import React, { Component } from "react";
import Icon from "react-remixicon";

class App extends Component {
  _ref = React.createRef();
  componentDidMount() {
    //console.log(this._ref);
  }
  render() {
    return (
      <div>
        <Icon
          name="home-3"
          type="line"
          ariaHidden="false"
          size="3x"
          ref={this._ref}
        />
        hi
      </div>
    );
  }
}

export default App;
