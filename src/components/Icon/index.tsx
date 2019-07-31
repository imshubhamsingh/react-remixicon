import * as React from "react";

import iconList from "./iconList";

import "remixicon/fonts/remixicon.css";
export interface IconProps {
  size?:
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
  name: string;
  component?: React.ElementType;
  role?: string;
  ariaHidden?: string;
  userClass?: string;
  ref?: React.Ref<HTMLElement>;
  type?: "fill" | "line";
  style?: Object;
}

const Icon: React.FC<IconProps> = (props, ref) => {
  const {
    name,
    size,
    component,
    role,
    ariaHidden,
    userClass,
    children,
    type,
    style,
    ...remainder
  } = props;
  if (!iconList.includes(name)) {
    log(`Could not find icon ${name}`);
    return null;
  }
  const CustomTag = component || "i";

  return (
    <CustomTag
      aria-hidden={ariaHidden || "true"}
      role={role || "presentation"}
      className={[
        `remixicon-${name}-${type || "fill"} ${size ? `ri-${size}` : ""}`,
        userClass
      ]
        .filter(e => e)
        .join(" ")}
      {...remainder}
      ref={ref}
      style={style}
    >
      {children}
    </CustomTag>
  );
};

export default React.memo(React.forwardRef(Icon));

const log = (message: string) => {
  if (!(process && process.env && process.env.NODE_ENV === "production")) {
    // eslint-disable-next-line no-console
    console.error(`[react-remixicon]: ${message}.`);
  }
};
