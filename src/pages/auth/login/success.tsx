import styles from "./login.module.css";
import { Typography } from "@/shared/ui";
import cn from "clsx";
import { Envelope, IconArrowLeft } from "@/shared/assets/icons";

export const Success = () => {
  return (
    <>
      <div>
        <Envelope className={cn("mb-4")} />
        <Typography tag={"h1"} size={"xl"} weight={"bold"} className={"mb-2"}>
          Check your email
        </Typography>
        <Typography tag={"p"}>
          We sent a login link to olivia@untitledui.com
        </Typography>
        <a className={styles.backlink}>
          <IconArrowLeft />
          <Typography tag={"span"} size={"sm"} weight={"bold"}>
            Back to log in
          </Typography>
        </a>
      </div>
    </>
  );
};
