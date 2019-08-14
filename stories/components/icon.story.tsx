import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, object } from "@storybook/addon-knobs";

import iconList from "../../src/components/Icon/iconList";

import Icon from "../../src";

type size =
  | "lg"
  | "xl"
  | "xxs"
  | "xs"
  | "sm"
  | "1x"
  | "2x"
  | "3x"
  | "4x"
  | "5x"
  | "6x"
  | "7x"
  | "8x"
  | "9x"
  | "10x"
  | "fw";

type _type = "fill" | "line";

storiesOf("Icon", module)
  .addDecorator(withKnobs)
  .add("name", () => (
    <Icon
      name={select("name", iconList, "account-box")}
      type="line"
      size="3x"
    />
  ))
  .add("size", () => (
    <Icon
      size={select(
        "size",
        [
          "lg",
          "xl",
          "xxs",
          "xs",
          "sm",
          "1x",
          "2x",
          "3x",
          "4x",
          "5x",
          "6x",
          "7x",
          "8x",
          "9x",
          "10x",
          "fw"
        ] as size[],
        "1x"
      )}
      type="line"
      name={select("name", iconList, "account-box")}
    />
  ))
  .add("type", () => (
    <Icon
      name={select("name", iconList, "account-box")}
      type={select("type", ["fill", "line"] as _type[], "fill")}
      size="3x"
    />
  ))
  .add("style", () => (
    <Icon
      size="3x"
      style={object("style", {
        color: "pink",
        border: "5px dotted limegreen"
      })}
      type="line"
      name={select("name", iconList, "account-box")}
    />
  ));
