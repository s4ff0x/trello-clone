import cn from "clsx";

import styles from "./typography.module.css";

import type { HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

export interface Props extends HTMLAttributes<HTMLElement> {
  tag?: "span" | "p" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  weight?: "regular" | "medium" | "bold";
  children?: ReactNode;
}

export type Ref = HTMLElement & HTMLSpanElement & HTMLParagraphElement;

export const Typography = forwardRef<Ref, Props>(
  (
    {
      className,
      tag: Tag = "p",
      size = "md",
      weight = "regular",
      children,
      ...rest
    },
    ref,
  ) => {
    const classList = cn(
      styles.root,
      styles[`size-${size}`],
      styles[`weight-${weight}`],
      className,
    );

    return (
      <Tag ref={ref} className={classList} {...rest}>
        {children}
      </Tag>
    );
  },
);
