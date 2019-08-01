import * as React from "react";
import "remixicon/fonts/remixicon.css";
export interface IconProps {
    size?: "lg" | "xl" | "xxs" | "xs" | "sm" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | "fw";
    name: string;
    component?: React.ElementType;
    role?: string;
    ariaHidden?: string;
    userClass?: string;
    ref?: React.Ref<HTMLElement>;
    type?: "fill" | "line";
    style?: Object;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<IconProps, "style" | "size" | "name" | "component" | "role" | "ariaHidden" | "userClass" | "type"> & React.RefAttributes<unknown>>>;
export default _default;
