import * as React from "react";
import { expect } from "chai";
import { mount } from "enzyme";

import Icon from "../../src/";

describe("Icon component", function describe() {
  it("should render correctly", () => {
    const wrapper = mount(<Icon name="home-3" type="line" size="3x" />);
    expect(wrapper.props()).to.eql({
      type: "line",
      name: "home-3",
      size: "3x"
    });
  });
});
