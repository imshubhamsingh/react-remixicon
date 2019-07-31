import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";

import Icon from "../index";

describe("Icon component", function describe() {
  it("should render correctly", () => {
    // This will only test the test stub defined in test.setup.js
    // Testing the real Icon component hasn't succeeded yet.
    const wrapper = mount(<Icon name="home-3" type="line" size="3x" />);
    expect(wrapper.props()).to.eql({
      type: "line",
      name: "home-3",
      size: "3x"
    });
  });
});
