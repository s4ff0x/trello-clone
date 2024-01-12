import cn from "clsx";

import styles from "./styles.module.css";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "primary" | "secondary-gray" | "link-gray" | "link-color";
  isDestructive?: boolean;
  children?: ReactNode;
}

export type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, Props>(
  (
    {
      className,
      size = "md",
      variant = "primary",
      isDestructive = false,
      onClick,
      children,
      ...rest
    },
    ref,
  ) => {
    const classList = cn(
      styles.root,
      styles[`size-${size}`],
      styles[`variant-${variant}`],
      {
        [styles.desctuctive]: isDestructive,
      },
      className,
    );

    return (
      <button ref={ref} className={classList} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  },
);
