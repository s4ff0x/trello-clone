import { ImageLogomark } from "@/shared/assets/images";
import type { FC, HTMLAttributes } from "react";
import styles from "./styles.module.css";
import cn from "clsx";

export type LogoIconProps = HTMLAttributes<HTMLImageElement>;

export const LogoIcon = ({ className }: LogoIconProps) => {
  return <img src={ImageLogomark} alt="logo" className={className} />;
};

interface Props {
  className?: string;
}

export const Logo: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <img className={styles.logomark} src={ImageLogomark} alt="Logo" />
      <span className={styles.text}>Brello</span>
    </div>
  );
};
